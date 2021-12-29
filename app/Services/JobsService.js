import { ProxyState } from "../AppState";
import { Job } from "../Models/Job";
// Job
// ProxyState

class JobsService {
    removeJob(id) {
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)
    }
    createJob(jobData) {
        const job = new Job(jobData)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }
}

export const JobsService = new JobsService()