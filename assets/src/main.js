const edad = 18; 
    let ingreso = parseInt(prompt ("Ingrese su edad.")); 
    let repetir = true; 

function coincide (ingreso) { 
    return (18 <= ingreso) 
}; 

if (coincide(ingreso)) { 
    alert ("Listo. Ya puedes comprar!"); 
    repetir = false; 
} 

while (repetir){ 
    if(isNaN(ingreso)){ 
        ingreso = parseInt(prompt("Por favor, ingrese un número válido!❌")); 
        continue 
    }else if(coincide(ingreso)) { 
        alert ("Listo. Ya puedes comprar!"); 
        repetir = false; 
    }else{  
        alert ("Eres menor, debes hablar con tus mayores."); 
        repetir = false; 
    } 
}

////////////////////////////////////////////////////////////////////////////////////////////


// //Variables para Funciones
// let prenda
// let precio
// let talle
// let cantidad
// let cuotas
// let total

// let bienvenido = alert("Bienvenidos a la Tienda Online de Mauro Sergio")

// function elegirPrenda() {
//     //Variables Prendas
//     let sweater = 7529
//     let saco = 9889
//     let polera = 7849
//     let ruana = 6669
//     let poncho = 7959
//     let cardigan = 6989

//     prenda = prompt("Elige una prenda por favor: \n\
//     Sweater Ambar\n\
//     Saco Romar\n\
//     Polera Lule\n\
//     Ruana Cachi\n\
//     Poncho Ombu\n\
//     Cardigan Chalten")

//     while ((prenda.toLowerCase() !== "Sweater Ambar") && (prenda.toLowerCase() !== "Saco Romar") && (prenda.toLowerCase() !== "Polera Lule") && (prenda.toLowerCase() !== "Ruana Cachi") && (prenda.toLowerCase() !== "Poncho Ombu") && (prenda.toLowerCase() !== "Cardigan Chalten")) {
//         prenda = prompt("Elige una prenda de la lista por favor: \n\
//     Sweater Ambar\n\
//     Saco Romar\n\
//     Polera Lule\n\
//     Ruana Cachi\n\
//     Poncho Ombu\n\
//     Cardigan Chalten")
//     break
//     }
//     if (prenda === "sweater ambar") {
//         prenda = sweater
//     }
//     if (prenda === "sacor romar") {
//         prenda = saco
//     }
//     if (prenda === "polera lule") {
//         prenda = polera
//     }
//     if (prenda === "ruana cachi") {
//         prenda = ruana
//     }
//     if (prenda === "poncho ombu") {
//         prenda = poncho
//     }
//     if (prenda === "cardigan chalten") {
//         prenda = cardigan
//     }
//     return elegirPrenda()
// }

// function prendaElegida() {
    
// }

// function elegirTalle() {
//     talle = prompt("Determina tú talle: \n\
//     S - Small\n\
//     M - Medium\n\
//     L - Large\n\
//     XL - Extra Large ")

//     while ((talle.toLowerCase() !== "S" || talle.toLowerCase() === "Small") && (talle.toLowerCase() !== "M" || talle.toLowerCase() === "Medium") && (talle.toLowerCase() !== "L" || talle.toLowerCase() === "Large") && (talle.toLowerCase() !== "XL" || talle.toLowerCase() === "Extra Large")) {
//         talle = prompt("Elige un talle valido por favor: \n\
//         S - Small\n\
//         M - Medium\n\
//         L - Large\n\
//         XL - Extra Large")
//     }
//     return elegirTalle.toLowerCase()
// }

// function elegirCantidad() {
//     cantidad = parseInt(prompt("Ingresa que cantidad de prendas vas a llevar:"))
//     while (cantidad >= 1 || cantidad == "") {
//         cantidad = parseInt(prompt("Ingresa un valor mayor a 0 (cero). Intenta de nuevo"))
//     }
//     return elegirCantidad()
// }

// function elegirCuotas() {
//     cuotas = parseInt(prompt("Ingresa en cuantas cuotas pagaras el total:"))
//     while (cuotas >= 0 || cuotas == "") {
//         cuotas = parseInt(prompt("Ingresa un valor mayor a 0 (cero). Intenta de nuevo"))
//     }
//     return elegirCuotas()
// }

// // const calcularCosto = () => {
// //     total = 
// // }