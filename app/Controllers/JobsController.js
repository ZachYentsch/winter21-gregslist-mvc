import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Component/JobForm.js";
import { jobsService } from "../Services/jobsService.js";


function _drawJobs() {
    const jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById('listings').innerHTML = template
}

export class JobsController {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
    }
    drawJobs() {
        _drawJobs()
        document.getElementById('modal-body-slot').innerHTML = getJobForm()
    }

    createJob() {
        window.event.preventDefault()
        console.log('Jobs')
        const form = window.event.target;
        const jobData = {
            title: form.title.value,
            pay: form.pay.value,
            time: form.time.value,
            description: form.description.value,
            company: form.company.value,
            benefits: form.benefits.value,
            qualifications: form.qualifications.value,
        }
        jobsService.createJob(jobData)
        form.reset()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
    }
    removeJob(id) {
        jobsService.removeJob(id)
    }
}