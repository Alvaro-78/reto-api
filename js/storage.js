
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

  async updateById(id, object) {

    try{
      //Igualando element a object estamos diciendo que object tendrá el valor del objeto element
      const element = await this.findById(id);
      console.log(typeof element , typeof element !== 'error', element)

      return element;

    }catch{
      
      if( element !== 'error' ){
        element = object;

      };

    };


  };

};

module.exports = Storage;