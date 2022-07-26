import { API_URL } from '../url';

export default function PostEmpresa(data){
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    try {
        fetch(API_URL, requestOptions)
        .then(response => {
            if(response.ok){
                alert("Registro exitoso");
                window.location.replace("/empresas")
            }else{
                alert("Error en el registro");
            }
        });       
    }catch(e){
        console.log(e);
    }
}