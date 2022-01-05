import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getAllHouses() {
        const res = await api.get('houses')
        console.log('house res', res)
        ProxyState.houses = res.data.map(h => new House(h))
        console.log('proxy House', ProxyState.houses)
    }

    async removeHouse(id) {
        const res = await api.delete(`houses/${id}`)
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
    }

    async createHouse(houseData) {
        const res = await api.post('houses', houseData)
        console.log('post house', houseData)
        ProxyState.houses = [new House(res.data), ...ProxyState.houses]
    }

    async editHouse() {
        const res = await api.put(`houses/${id}`, houseData)
        let editedHouseIndex = ProxyState.houses.findIndex(h => h.id == id)
        ProxyState.houses.splice(editedHouseIndex, 1, new House(res.data))
        ProxyState.houses = ProxyState.houses
    }
}

export const housesService = new HousesService()