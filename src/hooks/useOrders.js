import { useState } from "react";


function useOrders() {
    const [orders, setOrders] = useState([]);

    return (
        orders,
        setOrders
    )
}

export default useOrders;