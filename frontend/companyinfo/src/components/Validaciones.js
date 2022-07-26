export const validarNumeroTelefono = (numero) => {
    if (parseInt(numero).toString().length < 10){
        return false
    }else{
        return true
    }
}

export const validarNumeroNIT = (numero) => {
    if (parseInt(numero).toString().length < 12){
        return false
    }else{
        return true
    }
}