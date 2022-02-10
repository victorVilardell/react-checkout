import './PurchaseArea.css'
import OrderSummary from '../OrderSummary'
import PurchaseTotal from '../PurchaseTotal'
import DiscountsForm from '../DiscountsForm'

const PurchaseArea = (props) => <section className='PurchaseArea'>
    <OrderSummary products={props.purchase.products} onRemoveProduct={props.onRemoveProduct} onAddProduct={props.onAddProduct}/>
    { props.purchase.products.length && <DiscountsForm applyDiscount={props.applyDiscount} discount={props.purchase.discount}/>}
    { props.purchase.products.length && <PurchaseTotal purchase={props.purchase}/>}
</section>

export default PurchaseArea