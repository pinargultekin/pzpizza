const menu = [
    {
        id : 1,
        itemName : "Pizza",
        itemImg : "https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg",
        itemMenu : ["Cheese Pizza", "Pepperoni Pizza", "Supreme Pizza", "Create Your Own"],
        itemType : ["Thin Crust", "Handtossed Crust", "Pan Crust", "Gluten-Free Crust", "Stuffed Crust"],
        itemSize : [`10"`,`12"`,`14"`,`16"`,],
        itemSauce : ["No Sauce", "Tomato", "BBQ", "Garlic", "Alfredo", "Pesto", "Buffalo Sauce"],
        itemMeatTop : ["Sausage","Pepperoni","Ham", "Bacon", "Beef", "Pork", "Chicken", "Steak"],
        itemVegieTop : ["Mushroom", "Olives", "Tomato", "Spinach", "Onion", "Green Bell Pepper", "Banana Pepper", "Pineapple", "Jalapeno Peppers","Feta Cheese", "Roasted Red Pepper"]
    },
    {
        id : 2,
        itemName : "Pasta",
        itemImg : "https://image.freepik.com/free-photo/penne-pasta_1339-934.jpg",
        itemMenu : ["Chicken Alfredo Pasta", "Meaty Marinara Pasta", "Create Your Own"],
        itemType : ["Gluten-Free", "Lentil Pasta","Black Bean Pasta", "Plain Pasta"],
        itemSize : [],
        itemSauce : ["No Sauce", "Tomato", "Marinara", "Pesto", "Alfredo"],
        itemMeatTop : ["Sausage", "Shrimp", "Chicken", "Beef", "Steak", "Pork", "Bacon", "Ham"],
        itemVegieTop : ["Mushroom", "Olives", "Tomato", "Onion", "Green Bell Pepper", "Banana Pepper", "Jalapeno Peppers","Feta Cheese", "Parmesan Cheese"]
    
    },
    {
        id : 3,
        itemName : "Salad",
        itemImg : "https://image.freepik.com/free-photo/flat-lay-composition-healthy-vegetables_23-2148190188.jpg",
        itemMenu : ["Mediterranian Salad", "Chicken Caesar Salad", "Kale Garden Salad", "Create Your Own"],
        itemType : ["Kinoa", "Brown Rice", "Wild Rice", "Cauliflower Rice", "No Base"],
        itemSize : [],
        itemSauce : ["No Dressing", "Tahini Dressing", "Tzaziki Dressing", "Cashew Pesto Dressing", "Thousand Island Dressing", "Caeser Dressing", "Ranch Dressing", "Balsamic Vinaigrettes", "Italian Dressing", "Lime Cilantro Dressing"],
        itemMeatTop : ["Chicken", "Shrimp", "Steak"],
        itemVegieTop : ["Cilantro", "Kale", "Romaine", "Spinach", "Spring Mix", "Carrot", "Beet", "Red Cabbage", "Broccoli", "Red Onion", "Tomato", "Cucumber", "Chickpeas", "Corn", "Black Beans", "Basil", "Mint", "Parsley", "Feta Cheese", "Parmesan Cheese", "Goat Cheese", "Blue Cheese", "Dried Tomato"]
    
    },
    {
        id : 4,
        itemName : "Sides",
        itemImg : "https://image.freepik.com/free-photo/side-view-fried-breaded-cheese-ball-cardboard-bag-wooden-table_140725-11942.jpg",
        itemMenu : ["Garlic Bread", "Bread Sticks", "Cheese Sticks", "Cheese Stuff Pocket", "Meaty Stuff Pocket", "Croquettes", "Mozzarella Stick", "Jalapeno Poppers"],
        itemType : [],
        itemSize : [],
        itemSauce : [],
        itemMeatTop : [],
        itemVegieTop : []
    },
    {
        id : 5,
        itemName : "Dessert",
        itemImg : "https://image.freepik.com/free-photo/chocolate-syrup-poured-tower-chocolate-nut-brownies-tray_23-2148357776.jpg",
        itemMenu : ["Apple Pie", "Brownie", "Chocolate Chips Cookie","Cinnamon Rolls"],
        itemType : [],
        itemSize : [],
        itemSauce : [],
        itemMeatTop : [],
        itemVegieTop : []
    },
    {
        id : 6,
        itemName : "Drink",
        itemImg: "https://image.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-32239.jpg",
        itemMenu : ["Water", "Cocca Cola", "Cocca Cola Diet", "Cocca Cola Zero", "Sprite" , "Fanta"],
        itemType : [],
        itemSize : ["20oz", "1 Liter", "2 Liter"],
        itemSauce : [],
        itemMeatTop : [],
        itemVegieTop : []
    }
]
// const pizza = [
//     {
//         id : 1,
//         itemName : "Pizza",
//         itemImg : "https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg",
//         pizzaMenu : ["Cheese Pizza", "Pepperoni Pizza", "Supreme Pizza", "Create Your Own"],
//         crustType : ["Thin Crust", "Handtossed Crust", "Pan Crust", "Gluten-Free Crust", "Stuffed Crust"],
//         pizzaSize : [`10"`,`12"`,`14"`,`16"`,],
//         pizzaSauce : ["No Sauce", "Tomato", "BBQ", "Garlic", "Alfredo", "Pesto", "Buffalo Sauce"],
//         pizzaMeatTop : ["Sausage","Pepperoni","Ham", "Bacon", "Beef", "Pork", "Chicken", "Steak"],
//         pizzaVegieTop : ["Mushroom", "Olives", "Tomato", "Spinach", "Onion", "Green Bell Pepper", "Banana Pepper", "Pineapple", "Jalapeno Peppers","Feta Cheese", "Roasted Red Pepper"]
//     }];
// const pasta = [
//     {
//         id : 2,
//         itemName : "Pasta",
//         itemImg : "https://image.freepik.com/free-photo/penne-pasta_1339-934.jpg",
//         pastaMenu : ["Chicken Alfredo Pasta", "Meaty Marinara Pasta", "Create Your Own"],
//         pastaType : ["Gluten-Free", "Lentil Pasta","Black Bean Pasta", "Plain Pasta"],
//         pastaSauce : ["No Sauce", "Tomato", "Marinara", "Pesto", "Alfredo"],
//         pastaMeatTop : ["Sausage", "Shrimp", "Chicken", "Beef", "Steak", "Pork", "Bacon", "Ham"],
//         pastaVegieTop : ["Mushroom", "Olives", "Tomato", "Onion", "Green Bell Pepper", "Banana Pepper", "Jalapeno Peppers","Feta Cheese", "Parmesan Cheese"]
//     }];
// const salad = [
//     {
//         id : 3,
//         itemName : "Salad",
//         itemImg : "https://image.freepik.com/free-photo/flat-lay-composition-healthy-vegetables_23-2148190188.jpg",
//         saladMenu : ["Mediterranian Salad", "Chicken Caesar Salad", "Kale Garden Salad", "Create Your Own"],
//         saladBase : ["Kinoa", "Brown Rice", "Wild Rice", "Cauliflower Rice", "No Base"],
//         saladSauce : ["No Dressing", "Tahini Dressing", "Tzaziki Dressing", "Cashew Pesto Dressing", "Thousand Island Dressing", "Caeser Dressing", "Ranch Dressing", "Balsamic Vinaigrettes", "Italian Dressing", "Lime Cilantro Dressing"],
//         saladMeatTop : ["Chicken", "Shrimp", "Steak"],
//         saladVegieTop : ["Cilantro", "Kale", "Romaine", "Spinach", "Spring Mix", "Carrot", "Beet", "Red Cabbage", "Broccoli", "Red Onion", "Tomato", "Cucumber", "Chickpeas", "Corn", "Black Beans", "Basil", "Mint", "Parsley", "Feta Cheese", "Parmesan Cheese", "Goat Cheese", "Blue Cheese", "Dried Tomato"]
//     }];
// const sides = [
//     {
//         id : 4,
//         itemName : "Sides",
//         itemImg : "https://image.freepik.com/free-photo/side-view-fried-breaded-cheese-ball-cardboard-bag-wooden-table_140725-11942.jpg",
//         sideType : ["Garlic Bread", "Bread Sticks", "Cheese Sticks", "Cheese Stuff Pocket", "Meaty Stuff Pocket", "Croquettes", "Mozzarella Stick", "Jalapeno Poppers"],
//     }];
// const dessert = [
//     {
//         id : 5,
//         itemName : "Dessert",
//         itemImg : "https://image.freepik.com/free-photo/chocolate-syrup-poured-tower-chocolate-nut-brownies-tray_23-2148357776.jpg",
//         dessertType : ["Apple Pie", "Brownie", "Chocolate Chips Cookie","Cinnamon Rolls"]
//     }];
// const drink = [
//     {
//         id : 6,
//         itemName : "Drink",
//         itemImg: "https://image.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-32239.jpg",
//         drinkType : ["Water", "Cocca Cola", "Cocca Cola Diet", "Cocca Cola Zero", "Sprite" , "Fanta"],
//         drinkSize : ["20oz", "1 Liter", "2 Liter"]
//     }]

export default menu;
// export {pasta,salad,dessert,sides,drink};
