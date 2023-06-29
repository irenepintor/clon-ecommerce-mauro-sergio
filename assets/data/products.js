const products = [
    {
        id: 317,
        gender: 'women',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2021/11/013B-4-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2021/11/503-2-350x453.jpg'],
        name: 'Ámbar',
        price: 7959,
        info: 'Sweater manga ranglan, con canelones.\nAjustado, se amolda al cuerpo.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 345,
        gender: 'women',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2020/01/708-22-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2020/01/215-350x453.jpg'],
        name: 'Eugenia',
        price: 8389,
        info: 'Sweater escote en “v”, con tajos en los laterales. Diferencia de largo entre delantera y espalda.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 355,
        gender: 'women',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2020/12/619-6-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2020/12/503-3-350x453.jpg'],
        name: 'Lluvia',
        price: 9679,
        info: 'Sweater cuello redondo, puños altos. Detalle de botones en manga.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 373,
        gender: 'women',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2019/07/20-11-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2019/07/503-7-350x453.jpg'],
        name: 'Soldi',
        price: 7739,
        info: 'Sweater cuello redondo, tejido con trenzas y canelones.\nAjustado, se amolda al cuerpo.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 343,
        gender: 'women',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2020/08/215-1-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2020/08/020-3-350x453.jpg'],
        name: 'Zoe',
        price: 8599,
        info: 'Sweater cuello bote. Detalle de tajos en manga.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 344,
        gender: 'women',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2023/02/013-1-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2023/02/708-350x453.jpg'],
        name: 'Amaru',
        price: 7099,
        info: 'Casaca oversize con trenzas y canelones en delantera . Cuello bote.\nOversize, muy holgado.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 330,
        gender: 'women',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2019/08/13-130-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2019/08/604-9-350x453.jpg'],
        name: 'Ana',
        price: 8599,
        info: 'Saquito con botones, elástico y puños altos. Detalle de botones en manga.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 350,
        gender: 'women',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2023/02/816-1-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2023/02/215-3-350x453.jpg'],
        name: 'Ñanco',
        price: 7639,
        info: 'Cárdigan oversize liso.\nAncho, holgado.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 349,
        gender: 'women',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2021/11/605-7-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2021/11/13-350x453.jpg'],
        name: 'Emma',
        price: 8599,
        info: 'Saquito con botones y bolsillos.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 246,
        gender: 'women',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/12-1-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/118-13-350x453.jpg'],
        name: 'Iruya',
        price: '5809',
        info: 'Cárdigan escote en “v” con botones.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 239,
        gender: 'women',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/020-42-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/019-3-350x453.jpg'],
        name: 'Chaltén',
        price: 5809,
        info: 'Cárdigan pied de poule con cuello redondo y botones.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 320,
        gender: 'women',
        type: 'Saco',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/06/503-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/06/020-1-350x453.jpg'],
        name: 'Roma',
        price: 9889,
        info: 'Saco largo abierto con bolsillos y tajos laterales. Detalle de puño doblado.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 210,
        gender: 'women',
        type: 'Saco',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/019-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/02-350x453.jpg'],
        name: 'Nuna',
        price: 10109,
        info: 'Saco largo animal print, manga caída.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 477,
        gender: 'women',
        type: 'Saco',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2021/11/03-2-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2021/11/018-1-350x453.jpg'],
        name: 'Luz',
        price: 8389,
        info: 'Saco con bolsillos y botón escondido en cuello.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 32,
        gender: 'women',
        type: 'Polera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2021/11/215-2-350x453.jpg'],
        name: 'Nube',
        price: 7959,
        info: 'Polera con trabajo de punto en mangas.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 469,
        gender: 'women',
        type: 'Polera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/03/12-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/03/03-350x453.jpg'],
        name: 'Flora',
        price: 7309,
        info: 'Media polera con trabajo de punto en mangas.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 224,
        gender: 'women',
        type: 'Polera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/020-5-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/03-5-350x453.jpg'],
        name: 'Lule',
        price: 6449,
        info: 'Polera jacquard con perlas en delantera.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 217,
        gender: 'women',
        type: 'Polera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/017-3-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/010-350x453.jpg'],
        name: 'Arrayán',
        price: 5809,
        info: 'Polera con botones y tajo en puño.\nEstándar, holgado medio.\nTAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 231,
        gender: 'women',
        type: 'Polera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/012-11-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/02-2-350x453.jpg'],
        name: 'Aymara',
        price: 7099,
        info: 'Polera con cierre a tono y bordado “Pampa” en delantera.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 360,
        gender: 'women',
        type: 'Campera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/04/013B-1-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/04/708-350x453.jpg'],
        name: 'Elena',
        price: 9029,
        info: 'Campera con cierre, bolsillos y capucha.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.'
    },
    {
        id: 247,
        gender: 'women',
        type: 'Campera',
        season: 'otoño-invierno',
        img: ['https://maurosergio.com/wp-content/uploads/2022/09/118A-350x453.jpg', 'https://maurosergio.com/wp-content/uploads/2022/09/020-45-350x453.jpg'],
        name: 'Tafí',
        price: 7309,
        info: 'Campera con cierre y cuello redondo.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'
    },
    {
        id: 375,
        gender: 'men',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2021/11/13-5-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2021/11/505B-1-350x453.jpg',
        ],
        name: 'Eric',
        price: 9679,
        info: 'Sweater cuello redondo, con canelones en laterles y mangas.\nAjustado, se amolda al cuerpo.\nTextura suave, apta para usar sobre la piel.',
    },
    {
        id: 326,
        gender: 'men',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2018/07/605a-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2018/07/013-350x453.jpg',
        ],
        name: 'Marco',
        price: 8389,
        info: 'Sweater cuello redondo. Detalle de punto en el cuello.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.',
    },
    {
        id: 399,
        gender: 'men',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2020/01/13b-6-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2020/01/604b-4-350x453.jpg',
        ],
        name: 'Emilio',
        price: 9889,
        info: 'Sweater escote en “v” clásico.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.',
    },
    {
        id: 307,
        gender: 'men',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2019/01/020-4-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2019/01/007-350x453.jpg',
        ],
        name: 'Forte',
        price: 8599,
        info: 'Sweater cuello redondo con bordado.\nEstándar, holgado medio.\nTextura suave, apta para usar sobre la piel.',
    },
    {
        id: 261,
        gender: 'men',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2018/08/014-2-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2018/08/013-1-350x453.jpg',
        ],
        name: 'Itaete',
        price: '8169',
        info: 'Sweater con cierre en cuello, jacquard y trenzas.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 420,
        gender: 'men',
        type: 'Sweater',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2020/01/308-20-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2020/01/015-1-350x453.jpg',
        ],
        name: 'Pedro',
        price: 6449,
        info: 'Sweater escote en “V”, básico.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 480,
        gender: 'men',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2022/09/13-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2022/09/320-1-350x453.jpg',
        ],
        name: 'Algarrobo',
        price: 6669,
        info: 'Escote en “V” oversize liso.\nAncho, holgado\nTextura suave, apta para usar sobre la piel.',
    },
    {
        id: 461,
        gender: 'men',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2021/04/318-6-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2021/04/03-350x453.jpg',
        ],
        name: 'Prometeo',
        price: 7739,
        info: 'Cárdigan cuello smoking, con botones y bolsillos.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 490,
        gender: 'men',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2023/02/013-3-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2023/02/016-350x453.jpg',
        ],
        name: 'Otto',
        price: 6879,
        info: 'Cárdigan escote en “v” con botones y trabajo de punto en prenda.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 35,
        gender: 'men',
        type: 'Cardigan',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2022/09/016-2-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2022/09/020-11-350x453.jpg',
        ],
        name: 'Viedma',
        price: 7099,
        info: 'Cárdigan con capucha y bolsillos.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 334,
        gender: 'men',
        type: 'Polera',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2022/10/505-1-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2022/10/505-1-350x453.jpg',
        ],
        name: 'Arawi',
        price: 8169,
        info: 'Escote en “V” oversize liso.\nAncho, holgado\nTextura suave, apta para usar sobre la piel.',
    },
    {
        id: 475,
        gender: 'men',
        type: 'Polera',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2021/11/03-1-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2021/11/308-4-350x453.jpg',
        ],
        name: 'Austral',
        price: 4949,
        info: 'Polera con cordón en cuello.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 488,
        gender: 'men',
        type: 'Campera',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2022/09/015-4-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2022/09/015-4-350x453.jpg',
        ],
        name: 'Pehuén',
        price: 6449,
        info: 'Campera con cierre, bolsillos y manga ranglan con detalle en vivo.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 425,
        gender: 'men',
        type: 'Campera',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2020/05/208-1-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2020/05/213-3-350x453.jpg',
        ],
        name: 'Vento',
        price: 9889,
        info: 'Campera cuello polo, con cierre y bolsillos. Prenda sin costuras.\nEstándar, holgado medio.\nTextura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
    {
        id: 228,
        gender: 'men',
        type: 'Chaleco',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2022/05/118-3-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2022/05/016B-1-350x453.jpg',
        ],
        name: 'Silvestre',
        price: 5809,
        info: 'Chaleco escote en “v». Prenda sin costuras.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    }
];

function saveProductsLS(){
    localStorage.setItem("products", JSON.stringify(products));
}
function getProductsLS(){
    return JSON.parse(localStorage.getItem("products"));
}
function saveCartLS(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}
function getCartLS(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

saveProductsLS();

function addProduct(id){
    const cart = getCartLS();
    const products = searchProduct(id);
    cart.push(products);
    saveCartLS(cart);
}

function searchProduct(id){
    const allPoducts = getProductsLS();
    return allPoducts.find(item => item.id === id)
}