const getDiscountValueUseCase = (discoutnCode) => {
    switch(discoutnCode){
        case 'SAVE10':
            return {state: true, value:10}
        default:
            return {state: false}
    }
}

export default getDiscountValueUseCase