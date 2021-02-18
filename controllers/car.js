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
  
  async store(car) {
   return this.storage.set(car)
  };

  async update(car, id) {
    return this.storage.updateById(car, id)
  };
    

  async destroy () {
    return
  };

};

let CarController = new Car();
module.exports = CarController;