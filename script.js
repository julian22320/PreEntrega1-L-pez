//FUNCIONES
let operando = "";

//DECLARACIÓN DE FUNCIONES
function calcuSuma (){
    let suma = parseInt(valorUno) + parseInt(valorDos);
    return suma;
}

function calcuRest (){
    let resta = parseInt(valorUno) - parseInt(valorDos);
    return resta;
}

function calcuMul (){
    let mul = parseInt(valorUno) * parseInt(valorDos);
    return mul;
}

function calcuDivi (){
    let divi = parseInt(valorUno) / parseInt(valorDos);
    return divi;
}

//CICLO
while( operando != "SALIR"){
    operando = prompt("Elija una de las siguientes opciones: SUMAR / RESTAR / MULTIPLICAR / DIVIDIR / SALIR");
    
    if (operando == "SUMAR"){
        valorUno = prompt("Escriba el primer número:");
        valorDos = prompt("Escriba el segundo número:");
        let resultado = calcuSuma();
        console.log("El resultado es: ", resultado);
    }

    else if(operando == "RESTAR"){
        valorUno = prompt("Escriba el primer número:");
        valorDos = prompt("Escriba el segundo número:");
        let resultado = calcuRest();
        console.log("El resultado es: ", resultado);
    }

    else if(operando == "MULTIPLICAR"){
        valorUno = prompt("Escriba el primer número:");
        valorDos = prompt("Escriba el segundo número:");
        let resultado = calcuMul();
        console.log("El resultado es: ", resultado);
    }    

    else if(operando == "DIVIDIR"){
        valorUno = prompt("Escriba el primer número:");
        valorDos = prompt("Escriba el segundo número:");
        let resultado = calcuDivi();
        console.log("El resultado es: ", resultado);
    }    

    else if(operando == "SALIR"){
        console.log("Gracias por utilizar la aplicación");
        
    }
    else{
        console.log("Ingrese una operación válida");
    }

 
}