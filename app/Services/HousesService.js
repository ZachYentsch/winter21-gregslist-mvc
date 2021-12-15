import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
// House
// ProxyState

class HousesService {
    removeHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
    }
    createHouse(houseData) {
        const house = new House(houseData)
        ProxyState.houses = [...ProxyState.houses, house]

    }
}

export const housesService = new HousesService()