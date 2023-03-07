const fnAsync = () => {
    return new Promise ((resolve, reject) =>{

        (true) ? setTimeout(() => resolve('Async!!'), 2000) : reject(new Error('Error!'));

    });
}

const anotherFn = async () => {

    const something = await fnAsync();

    console.log(something);
    console.log('Hello!'); // imprime de cuarto

}

console.log('Before'); //imprime primero
anotherFn(); //imprime hasta se cumpla los 2 segundos 
console.log('After'); //imprime segundo