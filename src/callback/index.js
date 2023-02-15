//callback permite pasar una función como argumento para luego llamarla dentro de la función que la recibe

function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

//**********************************  

function sum(num1, num2){
    return num1 + num2;
}
//al llamar mi función con el parametro callback le paso la cantidad de argumentos que necesita mi funcion sum de una vez
//y al llamar la funcion no le pongo argumentos
function calc(num1, num2, callback){

    return callback(num1, num2);
    
}

//no es necesario agregar la función 
console.log("la suma es:" + calc(2,2, sum));

//setTimeout ya de por si es un callback
setTimeout(function () {
    console.log('Hola JavaScrip');
}, 5000);

function grettin(name){
    console.log(`Hola ${name}`);
}

// Argumentos la función, el tiempo, el argumento que recibe la función grettin(name)
setTimeout(grettin, 2000, 'Jhon');

const myFunc = () => console.log('log after 2s');

function execCallback(callback) {
    // Tu código aquí 👈
    return setTimeout(callback, 2000);
  }

  execCallback(myFunc);