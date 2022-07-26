import { API_URL } from '../url';

export default function PutEmpresa(data, id){
    let requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    try {
        fetch(API_URL + id, requestOptions)
        .then(response => {
            if(response.ok){
                alert("Actualización exitosa");
                window.location.replace("/empresas")
            }else{
                alert("Error en la actualización");
                console.log(response);
            }
        });       
    }catch(e){
        console.log(e);
    }
}