import { cart } from "./Add_To_Cart"

export const initialState = {
    cart : [],
    user:null
}

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART" : 
            return{
                ...state,
                cart : [...state.cart,{...action.item}],
            };
        case "REMOVE_FROM_CART" :
            return {
                ...state,
                cart: state.cart.filter(item=> item !== action.product)
            };
            
        case "SET_USER" :
            return {
                ...state,
                user:action.user
            };

        default :
            return state;
    }
}

export default reducer;