const getTotalPrice = ({products, discount}) => {
    const subTotal = products.reduce((total, product)=>{return total + (product.price * product.units)}, 0);
    const discounted = subTotal * discount.value / 100;
    const total = subTotal - discounted;

    return {subTotal, discounted, total}
}

export default getTotalPrice