const promise = new Promise(function(resolve, reject) {
    resolve('hey!!');
});

const cows = 10;

const countCows = new Promise(function(resolve, reject){

    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject(`There is no cows on the farm`);
    }

});

countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.error(error);
    
}).finally(() => console.log('Finally'));

/***ejemplo de promesas** */
function delay(time, message) {
    // Tu código aquí 👈
    const promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(message);
        }, time);
    });

    return promise;
  }

  delay(2000, 'Hello after 2s').then((message) => console.log(message));