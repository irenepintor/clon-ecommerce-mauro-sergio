function seeProductCards() {
    let allPoducts = JSON.parse(localStorage.getItem("allPoducts"))
    let cardContent = `
            <div class="col-8">
                <div class="row">
                    <div class="col mb-2">
                        <a href="">
                            <img src="${allPoducts.img[0]}" alt="${allPoducts.name}">
                        </a>
                    </div>
                    <div class="col mt-2">
                        <a href="">
                            <img src="${allPoducts.img[1]}" alt="${allPoducts.name}">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <h1>${allPoducts.type} ${allPoducts.name}</h1>
                <div>
                    <p class="fs-2">
                        <span>$${allPoducts.price}</span>
                    </p>
                    <span>Artículo: 
                        <span>${allPoducts.id}</span>
                    </span>
                </div>
                <div>
                    <p>
                        <span>${allPoducts.info}</span>
                    </p>
                </div>
                <button type="submit" class="btn btn-lg btn-outline-secondary mt-2" onclick="addProduct(${allPoducts.id})">Añadir al Carrito</button>
            </div>`;
        document.getElementById('productCard').innerHTML = cardContent;
}
seeProductCards()
cartButton();
