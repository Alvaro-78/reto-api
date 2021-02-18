
class Storage {
  
   state = [];

  constructor () {
    console.log( "Create new State" );
  };

  async set(object) {
    this.state.push( object );
    
    return this.state.length;
  };

  async get() {
    
    return this.state.slice( -10 );
  };

  async findById( id ) {

    const instanceElement = this.state[ id - 1 ];
    //Se puede hacer una un if normal, un ternario o una xpresión booleana
   return instanceElement ? instanceElement : new Error( "Element not found" );
  };

  async updateById(id, nextObject) {

    await this.findById( id );

    this.state[ id - 1 ] = nextObject;

    return nextObject; 
    
  };

};

module.exports = Storage;