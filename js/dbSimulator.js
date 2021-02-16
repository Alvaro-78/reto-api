class dbSimulator {
  
   state = [];

  constructor () {
    console.log("Create new State");
  };

  async set(object) {
    this.state.push(object);
    return this.state.length;
  };

  async get() {
    return this.state.slice(-10);
  };

};

module.exports = dbSimulator;