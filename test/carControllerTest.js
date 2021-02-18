const carController = require('../controllers/car')

(async() => {
  try {
      await carController.store({name:'prueba', year: 2011});
      let resultado1 = await carController.update(1,{name:'prueba',year:2010});
      console.log(resultado1);
      // PROBANDO EL CASO DE ERROR
      await carController.update(19,{name:'prueba',year:2010});
  } catch (error) {
      console.log('ERROR MANEJADO', error.message);
  }
})();
