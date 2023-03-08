import fetch from "node-fetch";

async function runCode(){
    
    try{    
    
        const url = 'https://domain-api-com';
        const response = await fetch(url);
        const data =  await response.json();
        return data;

    }catch{
        throw new Error('API Not Found');
    }

}

runCode();