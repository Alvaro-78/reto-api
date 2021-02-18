const Storage = require('../js/storage')

//Como indexAll es async para resolver la promesa hacemos el then()

let storage = new Storage();

let resultado1 = storage.set({name: 'pepe', age:'33'});
let resultado2 = storage.findById( 1 );


let resultado3 = storage.updateById(1, {name:'pepe', age: '33'});
let resultado4 = storage.findById(1);

let resultado5 = storage.updateById(2, {name:'pepe', age:'33'});
console.log(resultado1, resultado3, resultado4, resultado5);