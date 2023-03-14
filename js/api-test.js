
var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  redirect: 'manual'
};

fetch("https://api.flightapi.io/onewaytrip/640f1b3ff75e113b18803e12/LHR/LAX/2023-03-17/2/0/1/Economy/USD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));