import { generateId } from "../Utils/generateId.js";

export class Job {
  /**
   * Data to create Job
   * @param {{imgUrl: string, company: string, jobTitle: string, hours: number, rate: number, description: string, id?: string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.imgUrl = data.imgUrl
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }


  get jobCardTemplate() {
    return `
    <div class="col-md-4 mb-3">
    <div class="card p-2">
      <img src="${this.imgUrl}" alt="logo">
      <h6>${this.company}</h6>
      <h6>${this.jobTitle}</h6>
      <h6>${this.hours}</h6>
      <h6>${this.rate}</h6>
      <h6>${this.description}</h6>
    </div>
  </div>
`
  }





}







