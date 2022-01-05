import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Component/HouseForm.js";
import { confirmation, toast } from "../Services/AlertService.js"
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
        housesService.getAllHouses()
    }
    drawHouses() {
        _drawHouses()
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }

    async createHouse() {
        try {
            window.event.preventDefault()
            console.log('submitted')
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
            if (id == "undefined") {
                await housesService.createHouse(houseData)
            }
            else {
                await housesService.editHouse(houseData, id)
            }
            form.reset()
            bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
        } catch (error) {
            console.log(error.message)
        }
    }
    async removeHouse(id) {
        try {
            let foundHouse = ProxyState.houses.find(h => h.id == id)
            console.log('deleting', foundHouse)
            if (await confirmation(`Are you sure you want to delete ${foundHouse.price}?`)) {
                await housesService.removeHouse(id)
                toast(`The listing for ${foundHouse.price} was removed!`)
            }
        } catch (error) {
            console.log(error.message)
        }
        housesService.removeHouse(id)
    }

    async editHouse(id) {
        try {
            let foundHouse = ProxyState.houses.find(h => h.id == id)
            bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()
            document.getElementById('modal-body-slot').innerHTML = getHouseForm(foundHouse)
            console.log('House in edit', foundHouse)
        } catch {
            console.log('error.message')
        }
    }
}