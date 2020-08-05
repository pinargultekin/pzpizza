
const initState = {
    price: 35,


}
function cartReducer(state = initState, action) {

    switch (action.type) {
        case "ADD_ITEM":
            console.log("ITEMS ARE ADDED");

            return {
                ...state,
                price: action.price
            }
        default:
            return state;
    }
}

export default cartReducer;