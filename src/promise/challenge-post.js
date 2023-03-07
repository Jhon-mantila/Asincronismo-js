import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';


function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST', //el metodo put o delete
        mode:'cors', //validar los cors
        credentials: 'same-origin',//sin autenticación
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)

    });

    return response;
}

const data = {
    "title": "New Product jhon mantilla",
    "price": 1200,
    "description": "el producto de prueba de jhon mantilla",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json()) //la respuesta primero la tranformamos en un json
    .then(data => console.log(data)) //luego la imprimimos