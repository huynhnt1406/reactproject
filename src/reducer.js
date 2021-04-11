export const initialState = {
    basket:[]
}
//selector

function reducer(state, action){
    switch (action.type){
        case 'ADD_TO_BASKET':
        return{
            ...state,
            basket: [...state.basket,action.item],
        }
        case 'REMOVE_FROM_BASKET':
        const index = state.basket.findIndex(basketItem => (basketItem.id === action.id));
        let newBasket =  [...state.basket];
        if(index >= 0){
            newBasket.splice(index,1);
        }else{
            console.log("We dont find this product's id");
        }
        return{
            ...state,
            basket: newBasket,
        }

        default:
            return{
                state
            }
            
    }
}

export default reducer;

