const addtocart = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection("cartOrders")
            .add({
                ...project,
                // authorId: 12345,
                // createdAt: new Date()
            })
            .then(() => {
                dispatch({ type: "ADD_ITEM" });
            })
            .catch((err) => {
                dispatch({ type: "ADD_ITEM_ERROR" }, err);
            });
    };
};

export default addtocart;