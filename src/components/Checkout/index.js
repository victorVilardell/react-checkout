import React from 'react';
import PurchaseArea from './PurchaseArea';
import ProductsArea from './ProductArea';
import './Checkout.css'
import setLocalStorageUseCase from './Utils/setLocalStorageUseCase';
import getLocalStorageUseCase from './Utils/getLocalStorageUseCase';
import removeProductUseCase from './Utils/removeProductUseCase';
import addProductUseCase from './Utils/addProductUseCase';
import productsConstants from './products.constants'
class Checkout extends React.Component {
    state={
        purchase:{
            discount: {
                code:'',
                value:''
            },
            currency: '€',
            products:[],
        }
    }

    async componentDidMount() {
        const purchase = await this.GetLocalStorage();
        
        if (purchase){
            const purchaseRecovered = JSON.parse(purchase)
            this.setState({
                purchase: {
                    discount: purchaseRecovered.discount,
                    currency: purchaseRecovered.currency,
                    products: purchaseRecovered.products
                }
            })
        }
    }

    componentDidUpdate() {
        this.SetLocalStorage()
    }

    AddProduct = (productId, units = 1) =>{
        if(units <= 0) {
            return this.RemoveProduct(productId);
        }
        
        this.setState(state =>({
            purchase:{
                discount: state.purchase.discount,
                currency: state.purchase.currency,
                products: addProductUseCase(productsConstants, state.purchase, productId, units)
            }
        }))
    }

    RemoveProduct = (productId) => {

        this.setState(state => ({
            purchase:{
                discount: state.purchase.discount,
                currency: state.purchase.currency,
                products: removeProductUseCase(state.purchase.products, productId)
            }
        }))

    }

    GetLocalStorage = () => {
        return getLocalStorageUseCase('purchase')
    }

    SetLocalStorage = () => {
        setLocalStorageUseCase('purchase', this.state.purchase)
    }

    handleApplyDiscount= ({code, value}) => {
        this.setState(state => (
            {purchase:
                {
                    discount:{code:code, value:value},
                    currency: state.purchase.currency,
                    products: this.state.purchase.products
                }
            }
        ), this.SetLocalStorage)
    }

    render() {
        return<section className="Checkout">
        <ProductsArea onAddProduct={this.AddProduct} purchase={this.state.purchase} products={productsConstants}/>
        <PurchaseArea purchase={this.state.purchase} onRemoveProduct={this.RemoveProduct} onAddProduct={this.AddProduct} applyDiscount={this.handleApplyDiscount}/>
        </section>
    }
}

export default Checkout
