let requestOptions = {
    method: 'GET',
    redirect: 'manual'
  };
  
  fetch("https://api.flightapi.io/iata/63ffa7da9d6bbbf439f9f5cc?name=dallas&type=airport", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(`result: `, result );
  //   console.log("airline name: ",result.airlines[0].name)
  //   console.log("airline code: ",result.airlines[0].code)
  //   console.log("fares payment: ", result.fares[0].paymentfees )
  //   console.log("fares price: ", result.fares[0].price.totalAmountUsd)
  //   console.log("Flight number",result.legs[0].segments.designatorCode)
  //   console.log(result.legs[0].segments.cabin)
  //   console.log(result.legs[0].departureTime)
  //   console.log(result.legs[0].arrivalTime)
  //   console.log(result.legs[0])
  //   console.log(result.legs[0])
  //   console.log(result.legs[0])
  //   console.log(result.legs[0])
  //   console.log(result.legs[0])
    }
   
    
    
    
    
    ).catch(error => console.log('error', error));
  
  
  