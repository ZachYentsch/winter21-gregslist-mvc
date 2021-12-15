export function gethouseform() {
    return `
        <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="${this.address}-image">
        <div class="p-3">
        <h4 class="text-center"><b>${this.price}</b></h4>
          <p class="text-center uppercase"><b>${this.address}</b></p>
          <p class="m-0">${this.year} - ${this.sqft} - ${this.beds} - ${this.baths}</p>
          <p class="m-0">${this.description}</p>
        </div>
      </div>
    </div>
    `
}