import { API_URL } from '../url' 

let requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',}
};

export default async function obtenerEmpresas(){
    return await fetch(API_URL, requestOptions)
    .then(response => response.json())
    .then(data => data);
};