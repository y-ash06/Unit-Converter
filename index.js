let store = ""
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("inp-el")
let lenEl = document.getElementById("length")
let volEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

convertBtn.addEventListener("click" , function(){
    store = Number(inputEl.value)
    calculation()

})

function calculation() {
    let feet = (store * 3.281).toFixed(3)
    let meter = (store * 0.305).toFixed(3)
    let gallon = (store * 0.264).toFixed(3)
    let liter = (store * 3.785).toFixed(3)
    let pound = (store * 2.204).toFixed(3)
    let kilo = (store * 2.205).toFixed(3)

    lenEl.innerHTML = `${store} meters = ${feet} feets | ${store} feet = ${meter} meters`
    volEl.innerHTML = `${store} liters = ${gallon} gallons | ${store} gallons = ${liter} liters`
    massEl.innerHTML = `${store} kilos = ${pound} pounds | ${store} pounds = ${kilo} kilos`
}

