import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/products/54';

export async function fetchData(url){

    try {
        new URL(url);
    } catch (error) {
        throw new Error('Invalid URL');
    }

    try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
        
    } catch (error) {
        throw new Error('Something was wrong');
    }
   
}

const otraFn = async (url) => {

    try {
        const products = await fetchData(url);

        console.log(products);

    } catch (cons) {

        throw new Error('Something was wrong');

    }
}

console.log("before");
//const products = await fetchData(API);
otraFn(API);
console.log("after");

/********************************** */
/**RESULETO POR PLATZI */
async function runCode(url) {
    try {
      new URL(url);
      const response = await fetch(url);
      return response.json();
     } catch(error) {
       if (error.message === "Failed to construct 'URL': Invalid URL"){
         throw new Error('Invalid URL');
       } else {
         throw new Error('Something was wrong');
       }
     }
  }