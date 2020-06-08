const Pizzas =[ 
    {
        id:11,
        name: "Cheese Pizza",
        img: "https://x56q142t2ix2x00293jc48ze-wpengine.netdna-ssl.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Cheese-Pizza-589x414-2.jpg",
        ingredients: ["Handtossed Crust ","Tomato Sauce ","Pizza Cheese ", "Mozerella Cheese ", "Cheddar Cheese"]
    },
    {
        id:12,
        name: "Pepperoni Pizza",
        img: "https://x56q142t2ix2x00293jc48ze-wpengine.netdna-ssl.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Pepperoni-Pizza-589x414-1-300x300.jpg",
        ingredients: ["Handtossed Crust ","Tomato Sauce ","Pizza Cheese ", "Pepperoni"]
    },
    {
        id:13,
        name: "Supreme Pizza",
        img: "https://x56q142t2ix2x00293jc48ze-wpengine.netdna-ssl.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Veggie-Pizza-589x414-1-300x300.jpg",
        ingredients: ["Handtossed Crust ","Tomato Sauce ","Pizza Cheese ", "Pepperoni ", "Sausage ", "Onion ", "Green Bell Papper ","Olives ", "Tomato"]
    },
    {
        id:14,
        name: "Create Your Own",
        img: "https://lh3.googleusercontent.com/proxy/XUimOfs7yiwOS__UbKn1IU0Tzxq0RlzDyTg4zmRJgRZOciSnHYCjIV2uSVltPCntBdlP0vzNXg7GzlQ8p4ggadfrNV8AEyAFw7Ur_Y4j-2rmDhM6ij6QzJ90rpQp5KOGmBiXkoZIKP_vKh_8Dg",
        ingredients: []
    }
]

const Pastas=[
    {
        id:21,
        name: "Chicken Alfredo Pasta",
        img: "https://www.sixsistersstuff.com/wp-content/uploads/2015/05/One-Pan-Alfredo-2-768x1152.jpg",
        ingredients: ["Plain Pasta, ","Alfredo Sauce, ", "Mozerella Cheese, ", "Chicken"]
    },
    {
        id:22,
        name: "Meaty Marinara Pasta",
        img: "https://ministryofcurry.com/wp-content/uploads/2017/04/IMG_2600.jpg",
        ingredients: ["Plain Pasta, ", "Marinara Sauce, ", "Sausage, ", "Beef, ", "Parmesan Cheese"]
    },
    {
        id:23,
        name: "Create Your Own",
        img: "../../images/cyopasta.webp",
        ingredients: []
    }
]
const Salad=[
    {
        id:31,
        name: "Mediterranian Salad",
        ingredients: ["No Base","Italian Dressing", "Romaine", "Spring Mix","Carrot", "Tomato", "Cucumber", "Mint","Feta Cheese"]
    },
    {
        id:32,
        name: "Chicken Caesar Salad",
        ingredients: ["No Base", "Iceberg Lettuce", "Romaine", "Roasted Chicken", "Parmesan Cheese", "Caesar Dressing"]
    },
    {
        id:33,
        name: "Kale Garden Salad",
        ingredients: ["Kinoa", "Kale", "Romaine", "Red Cabbage", "Tomato", "Carrot", "Red Onion", "Corn", "Lime Cilantro Dressing"]
    },
    {
        id:34,
        name: "Create Your Own",
        ingredients: []
    }
]
const Sides=[
    {
        id:41,
        name: "Garlic Bread",
        ingredients: []
    },
    {
        id:42,
        name: "Bread Sticks",
        ingredients: []
    },
    {
        id:43,
        name: "Cheese Sticks",
        ingredients: []
    },
    {
        id:44,
        name: "Cheese Stuff Pocket",
        ingredients: ["Mozerella Cheese", "Cheddar Cheese"]
    },
    {
        id:45,
        name: "Meaty Stuff Pocket",
        ingredients: ["Mozerella Cheese", "Shaved Steak", "Bacon"]
    },
    {
        id:46,
        name: "Croquettes",
        ingredients: []
    },
    {
        id:47,
        name: "Mozerella Stick",
        ingredients: []
    },
    {
        id:48,
        name: "Jalapeno Poppers",
        ingredients: []
    }
]

const Dessert = [
    {
        id:51,
        name: "Apple Pie",
        ingredients: []
    },
    {
        id:52,
        name: "Brownie",
        ingredients: []
    },
    {
        id:53,
        name: "Chocolate Chips Cookie",
        ingredients: []
    },
    {
        id:54,
        name: "Cinnamon Rolls",
        ingredients: []
    }
]

const Drink = [
    {
        id:61,
        name: "Water",
        ingredients: ["20oz"]
    },
    {
        id:62,
        name: "Cocca Cola",
        ingredients: ["20oz", "1 Liter", "2 Liter"]
    },
    {
        id:63,
        name: "Cocca Cola Diet",
        ingredients: ["20oz", "1 Liter", "2 Liter"]
    },
    {
        id:64,
        name: "Cocca Cola Zero",
        ingredients: ["20oz", "1 Liter", "2 Liter"]
    },
    {
        id:65,
        name: "Sprite",
        ingredients: ["20oz", "1 Liter", "2 Liter"]
    },
    {
        id:66,
        name: "Fanta",
        ingredients: ["20oz", "1 Liter", "2 Liter"]
    }
]

// export default Pizzas; 
export {Pizzas, Pastas, Salad, Sides, Dessert, Drink};