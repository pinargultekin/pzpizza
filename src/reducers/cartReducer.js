
const initState = {
    price: 35,


}
function cartReducer(state = initState, action) {

    switch (action.type) {
        case "ADD_ITEM":
            console.log("ITEMS ARE ADDED");
            console.log(action);
            return {

                price: action.price
            }
        default:
            return { state };
    }
}

export default cartReducer;