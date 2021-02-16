const Storage = require ("../js/storage.js")


class Car {

  storage;

  constructor() {
    //Al instanciar la clase storage nos traemos todas sus propiedas
   this.storage = new Storage();
    
  };

  async indexAll() {
    return this.storage.get();
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