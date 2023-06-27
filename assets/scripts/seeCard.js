function seeProductCards() {
    const product = JSON.parse(localStorage.getItem("product"))
    let contents = `
        <div class="row me-3 ms-3">
            <div class="row">
                <div class="col-md-6">
                    <a href="">
                        <img src="${product.img[0]}" alt="">
                    </a>
                </div>
                <div class="col-md-6">
                    <a href="">
                        <img src="${product.img[1]}" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <h1>${product.type} ${product.name}</h1>
            <div>
                <p class="fs-2">
                    <span>$${product.price}</span>
                </p>
                <span>Artículo: 
                    <span>${product.id}</span>
                </span>
            </div>
            <div>
                <p>
                    <span>${product.info}</span>
                </p>
            </div>
            <button type="submit" class="btn btn-secondary">Añadir al Carrito</button>
        </div>`;
        document.getElementById('productCard').innerHTML = contents;
}
seeProductCards()