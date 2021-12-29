export function getJobForm() {
    return `
    <form onsubmit="app.jobsController.createJob()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
          placeholder="Title..." required>
      </div>
      <div>
        <label for="pay" class="form-label">Pay</label>
        <input type="value" class="form-control" name="pay" id="pay" aria-describedby="pay"
          placeholder="Pay..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="time" class="form-label">Hours</label>
        <input type="text" class="form-control" name="time" id="time" aria-describedby="time"
          placeholder="Full-time..." min="1900" max="2022" required>
      </div>
      <div>
        <label for="benefits" class="form-label">Benefits</label>
        <input type="text" class="form-control" name="benefits" id="benefits" aria-describedby="benefits" placeholder="Benefits..." required>
      </div>
      <div>
        <label for="Company" class="form-label">Company</label>
        <input type="text" class="form-control" name="company" id="company" aria-describedby="company" placeholder="Company..." required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="qualification" class="form-label">Qualifications</label>
        <textarea type="text" class="form-control" name="qualification" id="qualification"
          aria-describedby="qualification" placeholder="Qualifications..." min="5" max="250" required> </textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
      `
}