import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'ford', model: 'focus', year: 2008, price: 7500, description: 'Like new only 100,000 miles', color: '#91e880', imgUrl: 'https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg' }),
    new Car({ make: 'Ferrari', model: 'F12', year: 2016, price: 70000, description: 'Loud, I know what I have', color: '#12130e', imgUrl: 'https://th.bing.com/th/id/OIP.fOvTmTApvby5cifioaAAPAHaEu?pid=ImgDet&rs=1' }),
    new Car({ make: 'Mitsubishi', model: 'Lancer EVO IX', year: 2003, price: 900000, description: 'Everyones Dream Car', color: '#53afcd', imgUrl: 'https://1.bp.blogspot.com/-uQvyI8Qr6fk/XpphWcedrMI/AAAAAAAAMIs/4dOT8-OoyW4ntOtn5fk8E13S3JXi0ZYkQCLcBGAsYHQ/s1600/the-lowdown-evo-9-00kbye-behind-the-scenes-dated-video_21-1536x1024.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({ address: '1738 Broccoli St', year: 1999, sqft: 5044, price: 1315000, beds: 6, baths: 8, acres: 4, img: 'https://th.bing.com/th/id/R.13db40ebce1b98fa47c3113d4991baef?rik=NjXc36ffQxCwrQ&riu=http%3a%2f%2fww2.hdnux.com%2fphotos%2f40%2f44%2f11%2f8536673%2f5%2frawImage.jpg&ehk=LG11szv%2fBMeCM9qw5WbvG%2fZgUFgOfdgI%2b5R7zqU6CiQ%3d&risl=&pid=ImgRaw&r=0', description: 'This stunning house has a heated swimming pool' }),
    new House({ address: '5390 S Five Mile Rd', year: 1964, sqft: 4370, price: 1250000, beds: 5, baths: 4, acres: 5, img: 'https://th.bing.com/th/id/OIP.iRSnrVBpQjrDsrYTZpawdQHaFj?pid=ImgDet&rs=1', description: 'The house underwent massive renovation with only the highest level of materials inserts' }),
    new House({ address: '1500 N Lake Shore Dr', year: 1927, sqft: 8000, price: 12000000, beds: 6, baths: 7, acres: 5, img: 'https://i.pinimg.com/originals/7b/6a/8e/7b6a8e08510ca780c7301b51afcb7674.png', description: 'Dramatically Poised Atop One of Chicagos Most Prestigious Residential Buildings' }),
  ]
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({ title: 'Stockboy', pay: '$10/hr', time: 'Part-Time', description: 'Mark items with identifying codes such as price, stock, or inventory control codes, Stock shelves with unpacked items', company: 'Albertsons', benefits: 'Paid-time Off', qualifications: 'none' }),
    new Job({ title: 'Stockboy', pay: '$17/hr', time: 'Full-Time', description: 'Mark items with identifying codes such as price, stock, or inventory control codes, Stock shelves with unpacked items', company: 'Fred Meyer', benefits: 'Paid-time Off, Partial-Coverage', qualifications: 'Highschool Diploma or equivalent' }),
    new Job({ title: 'Stockboy', pay: '$22/hr', time: 'Full-Time', description: 'Mark items with identifying codes such as price, stock, or inventory control codes, Stock shelves with unpacked items', company: 'Costco', benefits: 'Paid-time Off, Full-Coverage Insurance, 401k', qualifications: 'BA or higher' })
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
