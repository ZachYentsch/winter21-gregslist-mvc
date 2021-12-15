import { generateId } from "../Utils/generateId.js";


export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.year = data.year
    this.sqft = data.sqft
    this.price = data.price
    this.beds = data.beds
    this.baths = data.baths
    this.acres = data.acres
    this.img = data.img
    this.description = data.description
  }

  get Template() {
    return `
    <div class="col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.img}" alt="image">
      <div class="p-3">
      <h4 class="text-center p-1 text-center"><b>$${this.price}</b></h4>
        <p class="text-center uppercase p-1 text-center"><b>${this.address}</b></p>
        <p class="m-0 justify-content-between p-1 text-center">Year: ${this.year} SQFT: ${this.sqft}</p>
        <p class="m-0 p-1 text-center"># of Bedrooms: ${this.beds}</p>
        <p class="m-0 p-1 text-center"># of Bathrooms: ${this.baths}</p>

        <p class="m-0">${this.description}</p>
      </div>
      <div class="text-end px-3">
      <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
      </div>
    </div>
  </div>
        `
  }

}