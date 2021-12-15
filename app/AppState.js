import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'ford', model: 'focus', year: 2008, price: 7500, description: 'Like new only 100,000 miles', color: '#91e880', imgUrl: 'https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg' }),
    new Car({ make: 'ford', model: 'taurus wagon', year: 1989, price: 1000, description: 'Great Family vehicle for long vacations', color: '#93776a', imgUrl: 'https://cdn.motor1.com/images/mgl/xWqly/s3/home-built-christmas-vacation-display-includes-movie-s-epic-vehicles.jpg' }),
    new Car({ make: 'Elven', model: 'Sleigh', year: 1700, price: 900000, description: 'It only works once a year, and has 8 horsepower', color: '#f44545', imgUrl: 'https://cdn.shopify.com/s/files/1/1319/9267/products/metal-sleigh_1_1024x1024.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({ address: '1738 Broccoli St', year: 1999, sqft: 5044, price: 1315000, beds: 6, baths: 8, acres: 4, img: 'https://th.bing.com/th/id/R.13db40ebce1b98fa47c3113d4991baef?rik=NjXc36ffQxCwrQ&riu=http%3a%2f%2fww2.hdnux.com%2fphotos%2f40%2f44%2f11%2f8536673%2f5%2frawImage.jpg&ehk=LG11szv%2fBMeCM9qw5WbvG%2fZgUFgOfdgI%2b5R7zqU6CiQ%3d&risl=&pid=ImgRaw&r=0', description: 'This stunning house has a heated swimming pool built by renowned company Encore. Exotic details, like distressed-wood doors and colorful accents to add flair to the suburban home.' }),
    new House({ address: '5390 S Five Mile Rd', year: 1964, sqft: 4370, price: 1250000, beds: 5, baths: 4, acres: 5, img: 'https://th.bing.com/th/id/OIP.iRSnrVBpQjrDsrYTZpawdQHaFj?pid=ImgDet&rs=1', description: 'The house underwent massive renovation with only the highest level of materials installed and everything in the house is brand new: 3,000 sqft of new wide plank French White Oak flooring with floating staircase; all appliances brand new (Viking, Miele, Bosch); all bathrooms renovated with new marble construction and Water Works fixtures; all new furniture throughout entire house; all new linens & towels; 7 new Samsung Smart TVs (65” TV in Media Room) and a laundry room containing 2 new sets of ultra large Samsung washer/dryers.' }),
    new House({ address: '1500 N Lake Shore Dr', year: 1927, sqft: 8000, price: 12000000, beds: 6, baths: 7, acres: 5, img: 'https://i.pinimg.com/originals/7b/6a/8e/7b6a8e08510ca780c7301b51afcb7674.png', description: 'Dramatically Poised Atop One of Chicagos Most Prestigious Residential Buildings, this One-Of-A-Kind Penthouse Spans the Entire Top Floor with 8,000 sq ft of Interior Space and a Remarkable 5,000 sq ft of Outdoor Space' }),

  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
