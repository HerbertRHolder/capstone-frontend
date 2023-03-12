let passenger = document.createElement("div");
passenger.classList.add("d-flex");
passenger.classList.add("gap-2");
passenger.classList.add("flex-wrap");
passenger.classList.add("justify-content-center");
passenger.classList.add("justify-content-sm-start");
passenger.classList.add("justify-content-md-start");
passenger.classList.add("justify-content-lg-start");

let title = document.createElement("div");
let p = document.createElement("p");
p.innerText = "Passenger"
title.appendChild(p);

let firstNameInput = document.createElement("div");
let label1 = document.createElement("label");
label1.setAttribute("for", "firstname");
label1.setAttribute("class", "form-label");
label1.innerText = "First Name";
let inputFirstName = document.createElement("input");
inputFirstName.setAttribute("type", "text");
inputFirstName.setAttribute("class", "form-control");
firstNameInput.appendChild(label1);
firstNameInput.appendChild(inputFirstName);

let lastNameInput = document.createElement("div");
let label2 = document.createElement("label");
label2.setAttribute("for", "lastname");
label2.setAttribute("class", "form-label");
label2.innerText = "Last Name";
let inputLastName = document.createElement("input");
inputLastName.setAttribute("type", "text");
inputFirstName.setAttribute("class", "form-control");
lastNameInput.appendChild(label2);
lastNameInput.appendChild(inputLastName);

let passengerType = document.createElement("div");
let label3 = document.createElement("label");
label3.setAttribute("for", "passengerType");
label3.setAttribute("class", "form-label");
label3.innerText = "Passenger Type";
let inputPassengerType = document.createElement("input");
inputPassengerType.setAttribute("type", "text");
inputPassengerType.setAttribute("class", "form-control");
passengerType.appendChild(label3);
passengerType.appendChild(inputLastName);


passenger.appendChild(title);
passenger.appendChild(firstNameInput);
passenger.appendChild(lastNameInput);
passenger.appendChild(passengerType);











export default passenger;
   
    







