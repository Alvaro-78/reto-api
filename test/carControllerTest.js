const carController = require('../controllers/car');

// console.log(carCotroller);
// console.log(carCotroller.strore);
// console.log(carCotroller.index);

//Como indexAll es async para resolver la promesa hacemos el then()
carController.indexAll().then(console.log);