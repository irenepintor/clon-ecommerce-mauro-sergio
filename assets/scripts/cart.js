function cartCards(){
    let allPoducts = getCartLS();
    let cardContent = `<table class="table text-end">`;
    
    if (totalProductsCart() > 0){
        allPoducts.forEach(allProduct =>{
        cardContent += `
        <tr>
            <td><img src="${allProduct.img[0]}" alt="${allProduct.name}" class="img-fluid img-thumbnail mb-2"></td>
            <td class="fs-6 fw-normal">${allProduct.type} ${allProduct.name}</td>
            <td class="fs-6">${allProduct.amount} x $${allProduct.price}</td>
            <td class="fs-6">$${allProduct.amount * allProduct.price}</td>
            <td></td>
            <td><img src="/static/image/trash.svg" width="20" alt="Eliminar Producto" onclick="deleteProduct(${allProduct.id})"></td>
        </tr>`;
    });
        cardContent += `
        <tr>
            <td colspan="2">Total:</td>
            <td></td>
            <td class="fw-bold">$${fullProductAddition()}</td>
            <td>&nbsp;</td>
            <td><button class="btn btn-danger"><img src="/static/image/trash.svg" width="15" alt="Eliminar Producto" onclick="emptyCart()"></button></td>
        </tr>
        </table>`;
    } else {
        cardContent += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos en el carrito</div>`;
    }
    document.getElementById('cartList').innerHTML = cardContent;
}
cartCards();
cartButton();