import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { api } from "./AxiosService.js"


class CarsService {

  async getAllCars() {
    const res = await api.get('cars')
    console.log('get cars', res.data)
    ProxyState.cars = res.data.map(c => new Car(c))
    console.log('ProxyCars', ProxyState.cars)
  }
  async removeCar(id) {
    const res = await api.delete(`cars/${id}`)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
  }

  async createCar(carData) {
    const res = await api.post('cars')
    console.log('post Car', res.data)
    ProxyState.cars = [new Car(res.data), ...ProxyState.cars]
  }

  async editCar(carData, id) {
    const res = await api.put(`cars/${id}`, carData)
    let editedCarIndex = ProxyState.cars.findIndex(c => c.id == id)
    ProxyState.cars.splice(editedCarIndex, 1, new Car(res.data))
    ProxyState.cars = ProxyState.cars
  }
}

export const carsService = new CarsService()