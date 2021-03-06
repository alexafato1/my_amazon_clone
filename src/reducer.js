export const getBasketTotal =(basket) =>
 basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
        case'ADD_TO_BASKET':
        //login for adding item to basket
        return {
            ...state,
            basket: [...state.basket, action.item] 
        };
        break;
        case'REMOVE_FROM_BASKET':
        //login for removing item to basket
        let newBasket = [...state.basket]
        const index = state.basket.findIndex((basketItem) =>  basketItem.id=== action.id)

        if(index >=0 ) {
          newBasket.splice(index, 1);
        } else {
            console.warn(
                `Cant remove product (id: ${action.id} as its not defiened`
            )
        }
        return {...state, basket: newBasket};
        break;
      default:
          return state;
    }
}

export  default reducer;