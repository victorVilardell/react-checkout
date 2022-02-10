const removeProductUseCase = (productList, productId) => productList.filter(product => product.id !== productId)

export default removeProductUseCase