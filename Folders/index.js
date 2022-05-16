let input = document.getElementById("input-text");
let lengthData = document.getElementById("length-data");
let volumeData = document.getElementById("volume-data");
let massData = document.getElementById("mass-data");

function intConverter(val) {
   return parseFloat(val);
}

function getValue() {
   meterFeet();
   litresGallons();
   kiloPounds();
  }

function meterFeet() {
    let feet = (intConverter(input.value) * 3.28);
    let meters = (intConverter(input.value) / 3.28);
    
    let len = `${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meters.toFixed(3)} meters`;

    lengthData.textContent = len;
}

function litresGallons() {
    let gallons = (intConverter(input.value) * 0.264172);
    let litres =  (intConverter(input.value) / 0.264172);

    let volume = `${input.value} litres = ${gallons.toFixed(3)} gallons | ${input.value} gallons = ${litres.toFixed(3)} litres`;

    volumeData.textContent = volume;  
}

function kiloPounds() {
    let kilos = (intConverter(input.value) / 2.20462);
    let pounds =  (intConverter(input.value) * 2.20462);

    let mass = `${input.value} kilos = ${pounds.toFixed(3)} pounds | ${input.value} pounds = ${kilos.toFixed(3)} kilos`;

    massData.textContent = mass;  
}



