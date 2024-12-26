/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let distance = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    distance.innerHTML = "Length (Meters/Feet): "
    volume.innerHTML = "Volume (Liters/Gallons): "
    mass.innerHTML = "Mass (Kilograms/Pounds): "
    
    document.getElementById("length").innerHTML += inputEl.value + " meters = " + Math.round(inputEl.value * 3.281 * 1000) / 1000 + " feet | "
    document.getElementById("length").innerHTML += inputEl.value + " feet = " + Math.round(inputEl.value / 3.281 * 1000) / 1000 + " meters"
    document.getElementById("volume").innerHTML += inputEl.value + " liters = " + Math.round(inputEl.value * 0.264 * 1000) / 1000 + " gallons | "
    document.getElementById("volume").innerHTML += inputEl.value + " gallons = " + Math.round(inputEl.value / 0.264 * 1000) / 1000 + " liters"
    document.getElementById("mass").innerHTML += inputEl.value + " kilograms = " + Math.round(inputEl.value * 2.204 * 1000) / 1000 + " pounds / "
    document.getElementById("mass").innerHTML += inputEl.value + " pounds = " + Math.round(inputEl.value / 2.204 * 1000) / 1000 + " kilograms"
    
    inputEl.value = ""
})
