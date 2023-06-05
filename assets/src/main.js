let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})

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
        ingreso = parseInt(prompt("Por favor, ingrese un número válido!")); 
        continue 
    }else if(coincide(ingreso)) { 
        alert ("Listo. Ya puedes comprar!"); 
        repetir = false; 
    }else{  
        alert ("Eres menor, debes hablar con tus mayores."); 
        repetir = false; 
    } 
}

const productosMujer = [
    {
        "id": "317",
        "type": "sweaters",
        "season": "otoño-invierno",
        "img": "https://maurosergio.com/wp-content/uploads/2021/11/615-7-350x453.jpg",
        "name": "Ámbar",
        "price": "7959",
        "info": "Sweater manga ranglan, con canelones.\nAjustado, se amolda al cuerpo.\nTextura suave, apta para usar sobre la piel.",
        "color": "",
        "size": ""
    },{
        "id": "345",
        "type": "sweaters",
        "season": "otoño-invierno",
        "img": "https://maurosergio.com/wp-content/uploads/2020/01/215-350x453.jpg",
        "name": "Eugenia",
        "price": "8389",
        "info": "Sweater escote en “v”, con tajos en los laterales. Diferencia de largo entre delantera y espalda.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.",
        "color": "",
        "size": ""
    },{
        "id": "355",
        "type": "sweaters",
        "season": "otoño-invierno",
        "img": "https://maurosergio.com/wp-content/uploads/2020/12/503-3-350x453.jpg",
        "name": "Lluvia",
        "price": "9679",
        "info": "Sweater cuello redondo, puños altos. Detalle de botones en manga.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.",
        "color": "",
        "size": ""
    },{
        "id": "344",
        "type": "sweaters",
        "season": "otoño-invierno",
        "img": "https://maurosergio.com/wp-content/uploads/2023/02/708-350x453.jpg",
        "name": "Amaru",
        "price": "7099",
        "info": "Casaca oversize con trenzas y canelones en delantera . Cuello bote.\nOversize, muy holgado.\nTextura suave, apta para usar sobre la piel.",
        "color": "",
        "size": ""
    }
];

let valorBuscado = "Amaru"
const busqueda = productosMujer.find(productosMujer => productosMujer.name === valorBuscado)
console.log(busqueda)