// let free = false;
// const validarCliente = (time)=>{
//     let edad = parseInt(prompt("cual es tu edad"));
//     if(edad >= 18){
//         if(time)
//     }
// }

// const estadoSaludo = ()=>{
//     let saludo = prompt("¿como estas?");
//     if (saludo == "bien"){
//         return 'genial';
//     }else{
//         return 'una pena';
//     }
// }
// document.write(estadoSaludo());

const sumar = (num1,num2)=>{
    num1 = parseInt(prompt("primer numero"));
    num2 = parseInt(prompt("numero dos porfa"));
    let suma = num1+num2;
    return suma;
}
const restar = (num1,num2)=>{
    num1 = parseInt(prompt("primer numero a restar"));
    num2 = parseInt(prompt("numero dos porfavor"));
    let resta = num1-num2;
    return resta;
}

const opcion = (miOpcion)=>{
    miOpcion = parseInt(prompt("escriba la operacio que desea realizar"));
    if(miOpcion == 1){
        return sumar();
    }else if(miOpcion == 2){
       return restar();
    }else{
        document.write(opcion());
    }
    return miOpcion;
}
document.write(opcion());