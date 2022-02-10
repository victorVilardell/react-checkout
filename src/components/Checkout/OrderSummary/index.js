import ProductsSummary from "../ProductsSummary";

const OrderSummary = (props)=> <section>
    {props.products.map(product =><ProductsSummary key={product.id} product={product} onAddProduct={props.onAddProduct} onRemoveProduct={props.onRemoveProduct}/>)}
</section>

export default OrderSummary;