// Generar cart.html desde JS y toda su funcionalidad.
//Siendo su accesibilidad desde: <a href="#"><i class="bi bi-cart-fill"></i> Mi Carrito</a> en index.html

//Form de pedido de tipo de cliente, tipo de pago, cuotas, recargos o descuentos



let payment; //Tipo de Pago: efectivo-transferencia-credito (cuotas)-debito
let client;
const IVA = 21;
let tax;

switch (payment) {
    case cash:
        tax = -20;
        break;
    case transfer:
        tax = -10;
    break;
    case debit:
        tax = -5;
        break;
    case credit:
        while (credit) {
            switch(tax){
                case 3:
                    tax = 15;
                    break;
                case 6:
                    tax = 35;
                    break;
                case 12:
                    tax = 75;
                    break;
                case 18:
                    tax = 120;
                    break;
                case 24:
                    tax = 250;
                    break;
                case 36:
                    tax = 510;
                break;
                default:
                break;
            }
        }
    break;
    default:
        break;
}

