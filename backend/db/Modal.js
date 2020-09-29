import knex from "../db/database.js";
class Modal {
  constructor() {
    this.knex = knex;
  }
}
export default Modal;
