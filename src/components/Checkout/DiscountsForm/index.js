import React from "react";
import getDiscountValueUseCase from '../Utils/getDiscountValueUseCase';
import './DiscountsForm.css';

class DiscountsForm extends React.Component{
    
    state = {
        discountValue:'',
        validDiscount:''
    }

    componentDidMount() {
        if(this.props.discount.code !== this.state.discountValue) {
            this.setState({discountValue: this.props.discount.code, validDiscount: getDiscountValueUseCase(this.props.discount.code).state && 'valid'})
        }
    }


    handleDiscountChange = (event) =>{
        this.setState({discountValue: event.currentTarget.value});
    }

    isValidDiscount = (callback) => {
        const checkValidDiscount = getDiscountValueUseCase(this.state.discountValue.trim());

        if(checkValidDiscount.state){
            callback({code: this.state.discountValue, value:checkValidDiscount.value});
            this.setState({validDiscount: 'valid'});
            return
        }

        this.setState({validDiscount:'error'})
    }

    render() {
        return<div className="DiscountsForm">
            <input className={this.state.validDiscount} value={this.state.discountValue} onChange={this.handleDiscountChange} placeholder="Inserto your promotional code" type="text"/>
            <button disabled={this.state.discountValue.trim().length <= 0} onClick={() =>this.isValidDiscount(this.props.applyDiscount)}>Validate</button>
        </div>
    }
}

export default DiscountsForm