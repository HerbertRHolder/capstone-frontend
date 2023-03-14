
  (function(){
    "use strict"
    // Enum Declarations for State Management
    const TRIP_TYPE = Object.freeze({
      ROUNDTRIP: "roundtrip",
      ONEWAY: "onewaytrip"
    });
    const TRIP_PASSENGER = Object.freeze({
      ADULT: "adult",
      CHILD: "child"
    });
    const TRIP_CABIN = Object.freeze({
      ECONOMY: "economy",
      BUSINESS: "business"
    });
    let BASE = `https://api.flightapi.io`;
    let KEY = `640f1b3ff75e113b18803e12`;


    document.addEventListener("DOMContentLoaded", ()=>{
      let form = document.getElementById("form");
      // console.log("form: ",form)
      form.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        let event = [];
        for (let i = 0;i< evt.target.length-1;i++){
          
          event[i] = evt.target[i].value;
          console.log(`event: ${i}: `,evt.target[i].value);
        }
        let requestOptions = {
          method: 'GET',
          redirect: 'manual'
        };
        // \ ========== Trim and format for API ============== / 
        if(event[3].includes(" ") || event[4].includes(" ")){
          event[3] = event[3].trim().replaceAll(" ", '-')
          event[4] = event[4].trim().replaceAll(" ", '-')
        }
        // \ ========== Trim and format for API ============== / 

       
        // City 1
        fetch(`${BASE}/iata/${KEY}?name=${event[3]}&type=airport`, requestOptions)
                .then(response => response.json())
                .then(airport1 => {

                  // City 2
                  fetch(`${BASE}/iata/${KEY}?name=${event[4]}&type=airport`, requestOptions)
                          .then(response => response.json())
                          .then(airport2 => {
                            console.log("fetch2")
                            const dateObject = Object.freeze({
                              ONE_DATE: event[5],
                              TWO_DATE: `${event[5]}/${event[6]}`
                            });
                            
                            // \======= Default PARAMS ======\
                            let DATE = dateObject.ONE_DATE; 
                            let TRIP = TRIP_TYPE.ONEWAY;
                            let CABIN = TRIP_CABIN.ECONOMY;
                            // \======= Default PARAMS ======\

                            if (event[0] == TRIP_TYPE.ROUNDTRIP){
                              DATE = dateObject.TWO_DATE;
                              TRIP = TRIP_TYPE.ROUNDTRIP;
                            }
                            if(event[2] == TRIP_CABIN.BUSINESS){
                              CABIN = TRIP_CABIN.BUSINESS;
                            }

                            // Query
                            fetch(`${BASE}/${TRIP}/${KEY}/${airport1.data[0].iata}/${airport2.data[0].iata}/${DATE}/1/0/0/${CABIN}/USD`, requestOptions)
                                    .then(response => response.json())
                                    .then(result => {
                                      console.log( "Airport1: ",airport1.data[0].iata)
                                      console.log( "Airport2: ",airport2.data[0].iata)
                                          console.log(result)
                                    }).catch(error => console.log(error))

                          }).catch(error => console.log('error', error));

                  console.log("fetch1")
                }).catch(error => console.log(error))








      })//form event










    }) // dom loaded
  })();// IIFE



