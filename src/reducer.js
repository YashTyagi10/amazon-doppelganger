export const initialState = {
    basket: [],
    user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
  // reduce: we can say it is a modern way of using for loop

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
    return {
        ...state,
        basket: [...state.basket, action.item],
    };

    case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id) // Finds only the first matched item
        let newBasket = [...state.basket];
        console.log(index);

        if (index >= 0) {
            newBasket.splice(index, 1); // Goes to the point where the basket is and cuts it by one

        } else {
            console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
        }
        return {
            ...state,
            // basket: state.basket.filter(item=>item.id !== action.id) 
            // downfall of using this snippet: if you select(Add to basket) multiple same items and then remove one item then instead of removing one item, all the items that are of same id will be removed
            basket: newBasket
        }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "EMPTY__BASKET":
            return{
                ...state,
                basket: []
            }    
        default:
            return state;
    }
};

export default reducer;