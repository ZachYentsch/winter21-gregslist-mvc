import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Component/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses() {
    const houses = ProxyState.houses
    let template = ''
    houses.forEach(h => template += h.Template)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
    }
    drawHouses() {
        _drawHouses()
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }

    createHouse() {
        window.event.preventDefault()
        console.log('houses')
        const form = window.event.target;
        const houseData = {
            address: form.address.value,
            year: form.year.value,
            sqft: form.sqft.value,
            price: form.price.value,
            beds: form.beds.value,
            baths: form.baths.value,
            acres: form.acres.value,
            img: form.img.value,
            description: form.description.value,
        }
        housesService.createHouse(houseData)
        form.reset()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
    }
    removeHouse(id) {
        housesService.removeHouse(id)
    }
}