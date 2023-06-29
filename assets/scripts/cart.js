function cartCards(){
    let allPoducts = getCartLS();
    let cardContent = `<table class="table">`

    allPoducts.forEach(allProduct =>{
        cardContent += `
        <tr>
            <td><img src="${allProduct.img[0]}" alt="${allProduct.name}" class="img-fluid img-thumbnail mb-2"></td>
            <td>${allProduct.type} ${allProduct.name}</td>
            
            <td>$${allProduct.price}</td>
            <td></td>
            <td><img src="/static/image/trash.svg" width="70" alt="Eliminar Producto" class="btn btn-danger img-fluid mb-2"></td>
        </tr>`;
    });
        cardContent += `
        <tr>
            <td>Saldo Total: $</td>
            <td>${"valor"}</td>
            <td>&nbsp;</td>
        </tr>
        </table>`;
    document.getElementById('cartList').innerHTML = cardContent;
}

cartCards();