function saveProductsLS() {
    localStorage.setItem('products', JSON.stringify(products));
}

function getProductsLS() {
    return JSON.parse(localStorage.getItem('products'));
}

function saveCartLS(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartLS() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function searchProduct(id) {
    const allPoducts = getProductsLS();
    return allPoducts.find((item) => item.id === id);
}

function productAmount(id) {
    const cart = getCartLS();
    return cart.some((item) => item.id === id);
}

function addProduct(id) {
    const cart = getCartLS();
    if (productAmount(id)) {
        let position = cart.findIndex((item) => item.id === id);
        cart[position].amount += 1;
    } else {
        const products = searchProduct(id);
        products.amount = 1;
        cart.push(products);
    }
    saveCartLS(cart);
    cartButton();
    cartCards();
}

function deleteProduct(id) {
    const cart = getCartLS();
    let position = cart.findIndex((item) => item.id === id);

    if (position !== -1) {
        if (cart[position].amount > 1) {
        cart[position].amount -= 1;
        } else {
            cart.splice(position, 1);
        }
        saveCartLS(cart);
        cartButton();
        cartCards();
    }
}

function emptyCart() {
    localStorage.removeItem('cart');
    cartCards();
    cartButton();
}

function totalProductsCart() {
    const cart = getCartLS();
    return cart.reduce((acc, item) => (acc += item.amount), 0);
    //return cart.length;
}

function fullProductAddition() {
    const cart = getCartLS();
    return cart.reduce((acc, item) => (acc += item.amount * item.price), 0);
}

function cartButton() {
    let cartButton = document.getElementById('cartButton');
    let content = `
    <button type="button" class="btn btn-secondary position-relative">
        <i class="bi bi-cart"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProductsCart()}</span>
    </button>`;
    cartButton.innerHTML = content;
}

// function productFilter(){
//     let allPoducts = getProductsLS();
//     let textSearch = document.getElementById('textSearch').value;
//     let content = '';

//     allPoducts = textSearch ? allPoducts.filter(item => item.name.toUpperCase().includes(textSearch.toUpperCase())) : allPoducts;

//     if (allPoducts.lenght > 0){
//         allPoducts.forEach(allProduct =>{
//         cardContent += `
//         <div class="card-container mt-4 mb-4">
//             <div class="card">
//                 <div class="card-body">
//                 <li class="product-card">
//                     <a href="categoria.html" onclick="seeProduct(${allProduct.id})">
//                     <img src="${allProduct.img[0]}" alt="${allProduct.name}" class="img-fluid mb-2">
//                     </a>
//                     <div class="pellets">
//                         <div>
//                             <a></a>
//                         </div>
//                     </div>
//                     <div class="">
//                         <a href="categoria.html" onclick="seeProduct(${allProduct.id})">
//                             <h5 class="card-title fs-6 cuotas">Art. ${allProduct.id} - ${allProduct.name}</h5>
//                             <span class="price fs-4 cuotas">$${allProduct.price}</span>
//                         </a>
//                     </div>
//                 </li>
//                 </div>
//             </div>
//         </div>`;
//         });
//     } else {
//         content += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos en la busqueda!</div>`;
//     }
//     document.getElementById('productCards').innerHTML = cardContent;
// }

function checkButtonFilter() {
    let allPoducts = getProductsLS();
    let check01 = document.getElementById('check01');
    let check02 = document.getElementById('check02');
    let check03 = document.getElementById('check03');
    let check04 = document.getElementById('check04');
    let check05 = document.getElementById('check05');
    let check06 = document.getElementById('check06');
    let check07 = document.getElementById('check07');
    let check08 = document.getElementById('check08');
    let content = '';

    if (!check01.checked &&
        !check02.checked &&
        !check03.checked &&
        !check04.checked &&
        !check05.checked &&
        !check06.checked &&
        !check07.checked &&
        !check08.checked) {
            displayAllProducts();
            return;
        }
        allPoducts = allPoducts.filter(item =>
            (check01.checked && item.type == check01.value) ||
            (check02.checked && item.type == check02.value) ||
            (check03.checked && item.type == check03.value) ||
            (check04.checked && item.type == check04.value) ||
            (check05.checked && item.type == check05.value) ||
            (check06.checked && item.type == check06.value));
    if (check07.checked || check08.checked) {
        allPoducts = allPoducts.filter(item =>
        (check07.checked && item.gender == check07.value) ||
        (check08.checked && item.gender == check08.value));
    }
    if (allPoducts.length > 0) {
        allPoducts.forEach(allProduct => {
            content += `
        <div class="card-container mt-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <li class="product-card">
                        <a href="categoria.html" onclick="seeProduct(${allProduct.id})">
                            <img src="${allProduct.img[0]}" alt="${allProduct.name}" class="img-fluid mb-2">
                        </a>
                    <div class="pellets">
                    <div>
                        <a></a>
                    </div>
                </div>
                <div class="">
                    <a href="categoria.html" onclick="seeProduct(${allProduct.id})">
                        <h5 class="card-title fs-6 cuotas">Art. ${allProduct.id} - ${allProduct.type} ${allProduct.name}</h5>
                        <span class="price fs-4 cuotas">$${allProduct.price}</span>
                    </a>
                </div>
                    </li>
                </div>
            </div>
        </div>`;
        });
        document.getElementById('productCards').innerHTML = content;
    } else {
        document.getElementById('productCards').innerHTML = `<div class="alert alert-danger text-center mt-5" role="alert">No se encontraron productos</div>`;
    }
}
    function displayAllProducts() {
    let allProducts = getProductsLS();
    let content = '';
    allProducts.forEach(allProduct => {
    content += `
        <div class="card-container mt-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <li class="product-card">
                    <a href="categoria.html" onclick="seeProduct(${allProduct.id})">
                        <img src="${allProduct.img[0]}" alt="${allProduct.name}" class="img-fluid mb-2">
                    </a>
                    <div class="pellets">
                        <div>
                        <a></a>
                        </div>
                    </div>
                    <div class="">
                        <a href="categoria.html" onclick="seeProduct(${allProduct.id})">
                        <h5 class="card-title fs-6 cuotas">Art. ${allProduct.id} - ${allProduct.type} ${allProduct.name}</h5>
                        <span class="price fs-4 cuotas">$${allProduct.price}</span>
                        </a>
                    </div>
                    </li>
                </div>
            </div>
        </div>`;
    });
    document.getElementById('productCards').innerHTML = content;
}