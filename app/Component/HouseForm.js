import { House } from "../Models/House"


export function getHouseForm(houseData = {}) {
  const newHouse = new House(houseData)

  console.log('house form', newHouse)
  return `
  <form onsubmit="app.housesController.createHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
        placeholder="Address..." value="${newHouse.address}" required>
    </div>
    <div>
      <label for="sqft" class="form-label">Sqft</label>
      <input type="value" class="form-control" name="sqft" id="sqft" aria-describedby="sqft"
        placeholder="Sqft..." value="${newHouse.sqft}" required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="year" class="form-label">Year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." min="1900" max="2022" value="${newHouse.year}" required>
    </div>
    <div>
      <label for="beds" class="form-label">Bedrooms</label>
      <input type="value" class="form-control" name="beds" id="beds" aria-describedby="beds" placeholder="Bedrooms..." min="1" value="${newHouse.beds}" required>
    </div>
    <div>
      <label for="baths" class="form-label">Bathrooms</label>
      <input type="value" class="form-control" name="baths" id="baths" aria-describedby="baths" placeholder="Bathrooms..." min="1" value="${newHouse.baths}" required>
    </div>
    <div>
      <label for="acres" class="form-label">Acres</label>
      <input type="value" class="form-control" name="acres" id="acres" aria-describedby="acres" placeholder="Acres..." value="${newHouse.acres}" required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' value="${newHouse.price}" required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="img" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="img" id="img" aria-describedby="img"
        placeholder="Image Url..." value="${newHouse.img}" required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" value="${newHouse.description}" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">${newHouse.id ? 'Edit' : 'Create'}</button>
  </div>
</form>
    `
}