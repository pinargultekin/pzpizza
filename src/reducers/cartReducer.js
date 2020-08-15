
const initState = {
    price: 35
}
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log("create project success");
            return state;
        case "ADD_ITEM_ERROR":
            console.log("create project error");
            return state;
        default:
            return state;
    }
};


export default cartReducer;