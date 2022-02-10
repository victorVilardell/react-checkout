import './PurchaseTotal.css';
import getTotalPrice from '../Utils/getTotalPrice';

const PurchaseTotal = ({purchase}) => {
    if(purchase.products.length){        
        const summary = getTotalPrice(purchase);

        return <ul className='PurchaseTotal'>
                    <li>Subtotal <span>{summary.subTotal.toFixed(2)}{purchase.currency}</span></li>
                    {purchase.discount.value > 0 && <li>Discounted {purchase.discount.value}% <span>{summary.discounted.toFixed(2)}{purchase.currency}</span></li>}
                    <li>Total <span>{summary.total.toFixed(2)}{purchase.currency}</span></li>
                </ul>
    }else{
        return <span>Calculando...</span>
    }
}

export default PurchaseTotal;