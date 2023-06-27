let menProducts = [
    {
        id: 375,
        gender: 'men',
        type: 'Sweaters',
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
        type: 'Sweaters',
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
        type: 'Sweaters',
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
        type: 'Sweaters',
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
        type: 'Sweaters',
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
        type: 'Sweaters',
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
        type: 'Cardigans',
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
        type: 'Cardigans',
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
        type: 'Cardigans',
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
        type: 'Cardigans',
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
        type: 'Poleras',
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
        type: 'Poleras',
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
        type: 'Camperas',
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
        type: 'Camperas',
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
        type: 'chalecos',
        season: 'otoño-invierno',
        img: [
            'https://maurosergio.com/wp-content/uploads/2022/05/118-3-350x453.jpg',
            'https://maurosergio.com/wp-content/uploads/2022/05/016B-1-350x453.jpg',
        ],
        name: 'Silvestre',
        price: 5809,
        info: 'Chaleco escote en “v». Prenda sin costuras.\nEstándar, holgado medio.\nAlta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.',
    },
];

function saveProductsLS() {
    localStorage.setItem('menProducts', JSON.stringify(menProducts));
}

function getProductsLS() {
    return JSON.parse(localStorage.getItem('menProducts'));
}
saveProductsLS();

function productCard() {
    let product = getProductsLS();
    let content = "";

    product.forEach((products) => {
        content += `
        <div class="card flex-container mt-3">
            <li class="product-card">
                <a href="">
                <img src="${products.img[0]}" alt="${products.name}" class="img-fluid mb-2">
                </a>
                <div class="">
                    <a href="">
                        <h5 class="fs-6">Art. ${products.id} - ${products.name}</h5>
                        <span class="price fs-4">$${products.price}</span>
                        <p class="mt-2">
                            <button class="btn btn-secondary text-center" onClick="seeProduct(${products.id})">Ver Producto</button>
                        </p>
                    </a>
                </div>
            </li>
        </div>`;
    });
    document.getElementById('menProductCard').innerHTML = content;
}

function seeProduct(id) {
    let product = getProductsLS();
    let products = product.find(item => item.id == id);
    localStorage.setItem('product', JSON.stringify(products));
    location.href = 'categoria.html';
}

productCard();