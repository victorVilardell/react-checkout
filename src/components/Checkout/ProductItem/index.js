import './ProductItem.css'

const ProductItem = ({onAddProduct, product}) => {
    return <article className={`ProductItem ${product.category}`}>
        <h2>{product.name}</h2>
        <img width="120px" src={product.imgUrl} alt={product.name}/>
        <button onClick={() => onAddProduct(product.id)}>Add product</button>
    </article>
}

export default ProductItem