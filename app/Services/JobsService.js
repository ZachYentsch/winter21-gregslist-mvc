import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
    removeJob(id) {
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)
    }
    createJob(jobData) {
        const job = new Job(jobData)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }
}

export const jobsService = new JobsService()