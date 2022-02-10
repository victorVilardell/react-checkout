import './ProductsSummary.css'

const ProductsSummary = ({product, onAddProduct, onRemoveProduct}) => <article className="ProductsSummary">
    <p className='productTitle'><span>{product.name}</span><a role="button" onClick={() => onRemoveProduct(product.id)}>Delete product</a></p>
    <p className='breakdown'>
        <span>
            <input type="number" onChange={(e)=>onAddProduct(product.id, e.currentTarget.value)} value={product.units}/> 
            units for {product.price}{product.currency}
        </span> 
        <strong>
            {product.units * product.price}{product.currency}
        </strong>
    </p>
</article>

export default ProductsSummary