const addProductUseCase = (products, purchase, productId, units) => {
    let productToBeSaved = [];
    let hasProductIdPosition = purchase.products.findIndex(product => product.id === productId);

    if(hasProductIdPosition >= 0) {
        productToBeSaved=[...purchase.products];
        let productToChange = {...productToBeSaved[hasProductIdPosition]};
        productToChange.units = units;
        productToBeSaved[hasProductIdPosition] = productToChange
    }else{
        let newProductadded = products.find(product => product.id === productId);
        newProductadded.units = units;
        productToBeSaved=[...purchase.products, newProductadded]
    }

    return productToBeSaved;
}

export default addProductUseCase
