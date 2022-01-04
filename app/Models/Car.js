import { generateId } from "../Utils/generateId.js"

export class Car {
  constructor(data) {
    this.id = generateId()
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || 0
    this.price = data.price || 0
    this.description = data.description || ''
    this.color = data.color || ''
    this.imgUrl = data.imgUrl || ''
  }

  get Template() {
    return /*html*/`
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.model}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.make} - ${this.model} - ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <div class="p-1 d-flex">
          <i class="mdi mdi-pencil selectable" onclick="app.carsController.editCar('${this.id}')"></i
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
          </div>
        </div>
      </div>
    </div>`
  }
}