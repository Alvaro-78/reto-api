const Storage = require ("../js/storage.js")


class Car {

  storage;

  constructor() {

   this.storage = new Storage();
    
  };

  async indexAll() {
    return
  };

  async store() {
    return
  };

  async destroy () {
    return
  };

  async update() {
    return
  };

};

let CarController = new Car();
module.exports = CarController;