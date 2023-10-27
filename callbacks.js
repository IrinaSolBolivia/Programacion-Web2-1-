function operacionAsincrona(x, y, callback) {
    setTimeout(() => {
      const resultado = x + y;
      callback(resultado);
    }, 1000);
  }
  
  operacionAsincrona(5, 3, resultado => {
    console.log("El resultado es: " + resultado);
  });
  