const Storage = require('../js/storage')

//Como indexAll es async para resolver la promesa hacemos el then()

( async () => {

  try {

    let storage = new Storage();
  
    await storage.set({name: 'pepe', age: '23'})
  
    let resultado1 = await storage.set({name: 'pepe', age:'33'});
  
    let resultado2 = await storage.findById( 1 );
  
    console.log( resultado1, resultado2);
  } 
  catch ( error ) {
    console.log( "Manejo de la excepción" )
  }


} ) ();










let storage = new Storage();

let resultado1 = storage.set({name: 'pepe', age:'33'});
let resultado2 = storage.findById( 1 );


let resultado3 = storage.updateById(1, {name:'pepe', age: '33'});
let resultado4 = storage.findById(1);

let resultado5 = storage.updateById(2, {name:'pepe', age:'33'});
console.log(resultado1, resultado3, resultado4, resultado5);