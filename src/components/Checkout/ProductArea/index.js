import ProductItem from "../ProductItem"
import './ProductArea.css'


const ProductsArea = ({onAddProduct, products = [], purchase}) => {
    const productsIdInPurchase = purchase.products.map(product => product.id);
    const productsWithoutPurchases = products.filter(product => !productsIdInPurchase.includes(product.id));

    if(!products.length && purchase.product.length){ 
        return <p className="emptyArea">Did you buy all products?</p>
    }

    if(!products.length){
        return <p className="emptyArea">Now we don't have stock. Try again</p>
    }

    return <section className="ProductsList">{productsWithoutPurchases.map(product => <ProductItem key={product.id} onAddProduct={onAddProduct} product={product}/>)}</section>
}

export default ProductsArea