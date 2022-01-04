import { generateId } from "../Utils/generateId.js";

export class Job {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.pay = data.pay
        this.time = data.time
        this.description = data.description
        this.company = data.company
        this.benefits = data.benefits
        this.qualifications = data.qualifications
    }

    get Template() {
        return `
        <div class="col-md-4 p-4">
          <div class="bg-white shadow rounded">
             <div class="p-3">
                 <h4 class="text-center p-1 text-center"><b>${this.title} NEEDED</b></h4>
                 <h6 class="text-center p-1 text-center"><b>${this.company}</b></h6>
                 <p class="m-0">${this.description}</p>
                 <p class="text-center uppercase p-1 text-center"><b>${this.time}</b></p>
                 <p class="m-0 justify-content-between p-1 text-center">$${this.pay}</p>
                 <ul class="m-0 p-1 text-center">
                 <li>${this.benefits}</li>
                 </ul>
                 <ul class="m-0 p-1 text-center">
                 <li>${this.qualifications}</li>
                 </ul>
              </div>
            <div class="text-end px-3">
      <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
            </div>
          </div>
     </div>
        `
    }
}