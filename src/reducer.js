export const initialState = {
    basket: [{
        id: '5456789909',
        title: '1000 places to see before you die' ,
        image: 'https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg',
        price: 5,
        rating: 5,
    },
    {
        id: '5456789909',
        title: '1000 places to see before you die' ,
        image: 'https://www.bigw.com.au/medias/sys_master/images/images/h84/hde/14666415538206.jpg',
        price: 5,
        rating: 5,
    },],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case'ADD_TO_BASKET':
        //login for adding item to basket
        return {
            ...state,
            basket: [...state.basket, action.item] 
        };
        break;
        case'REMOVE_TO_BASKET':
        //login for removing item to basket
        return {
            ...state};
        break;
      default:
          return state;
    }
}

export  default reducer;