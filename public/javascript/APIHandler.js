class APIHandler {
  constructor (baseUrl) {
    this.service = axios.create({
      baseURL: baseUrl});
  }

  getFullList () {
    return this.service.get("/characters");

  }

  getOneRegister (id) {
    return this.service.get("/characters" + id);
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
