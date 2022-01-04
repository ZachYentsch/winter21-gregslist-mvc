import { ProxyState } from "../AppState.js"
import { getCarform } from "../Component/CarForm.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  const cars = ProxyState.cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    carsService.getAllCars()
  }
  drawCars() {
    _drawCars()
    document.getElementById('modal-body-slot').innerHTML = getCarform()
  }

  async createCar(id) {
    try {
      // prevents page reload
      window.event.preventDefault()
      console.log("submitted")
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target
      const carData = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        color: form.color.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }
      if (id == "undefined") {
        await carsService.createCar(carData)
      }
      // else {
      // NOTE NEED TO DO THIS FOR EDIT JUST LIKE LINE 38
      // }
      // clear form
      form.reset()
      // close modal
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
    } catch (error) {
      console.log(error.message)
    }
  }

  async removeCar(id) {
    try {
      const foundCar = ProxyState.cars.find(c => c.id == id)
      console.log('deleting', foundCar)
      if (await confirmation(`Are you sure you want to delete ${foundCar.make}?`)) {
        await carsService.removeCar(id)
        toast(`${foundcar.make} was removed!`)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  async editCar(id) {
    try {
      let foundCar = ProxyState.cars.find(c => c.id == id)

      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()

      document.getElementById('modal-body-slot').innerHTML = getCarform(foundCar)

      console.log('Car in Edit', foundCar)
    } catch {
      console.log('error.message');
    }
  }
}