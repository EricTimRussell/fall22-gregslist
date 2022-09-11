import { generateId } from "../Utils/generateId.js";

export class House {

  /**
   * Data to build house
   * @param {{bedrooms: number, bathrooms: number, levels: number, sqFeet: number, imgUrl: string, year: number, price: number, description: string, id?: string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.sqFeet = data.sqFeet
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get houseCardTemplate() {
    return `
    <div class="col-md-4 mb-3">
    <div class="card p-2">
      <img src="${this.imgUrl}" alt="house">
      <div class="card-body">
        <h4>${this.price}</h4>
      </div>
      <div>
        <h5>Bedrooms ${this.bedrooms} | Bathrooms ${this.bathrooms} | SqFeet ${this.sqFeet}</h5>
        <h5>Levels ${this.levels} | Built ${this.year}</h5>
      </div>
      <div>
        <p>${this.description}</p>
      </div>
`
  }








}