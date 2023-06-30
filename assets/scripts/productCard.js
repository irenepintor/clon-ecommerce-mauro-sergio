function productCards(){
    let allPoducts = getProductsLS();
    //let textSearch = document.getElementById('textSearch').value;
    let cardContent = "";

    //allPoducts = textSearch ? allPoducts.filter(item => item.name.toUpperCase().includes(textSearch.toUpperCase())) : allPoducts;

    //if (allPoducts.lenght > 0){
        allPoducts.forEach(allProduct =>{
        cardContent += `
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
    //} else {
    //    cardContent += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos en la busqueda!</div>`;
    //}
    document.getElementById('productCards').innerHTML = cardContent;
}

function seeProduct(id){
    let allPoducts = getProductsLS();
    let allPoduct = allPoducts.find(item => item.id == id);
    localStorage.setItem('allPoducts', JSON.stringify(allPoduct));
}

productCards();
cartButton();