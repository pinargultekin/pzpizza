const Pizzas =[ 
    {
        id:11,
        name: "Cheese Pizza",
        img: "https://x56q142t2ix2x00293jc48ze-wpengine.netdna-ssl.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Cheese-Pizza-589x414-2.jpg",
        ingredients: ["Handtossed Crust, ","Tomato Sauce, ","Pizza Cheese, ", "Mozerella Cheese, ", "Cheddar Cheese"],
        price: ["10.45", "12.45","14.45","16.45"],
        size: ['10"', '12"', '14"', '16"']
    },
    {
        id:12,
        name: "Pepperoni Pizza",
        img: "https://x56q142t2ix2x00293jc48ze-wpengine.netdna-ssl.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Pepperoni-Pizza-589x414-1-300x300.jpg",
        ingredients: ["Handtossed Crust, ","Tomato Sauce, ","Pizza Cheese, ", "Pepperoni"],
        price: ["10.45", "12.45","14.45","16.45"],
        size: ['10"', '12"', '14"', '16"']
    },
    {
        id:13,
        name: "Supreme Pizza",
        img: "https://x56q142t2ix2x00293jc48ze-wpengine.netdna-ssl.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Veggie-Pizza-589x414-1-300x300.jpg",
        ingredients: ["Handtossed Crust, ","Tomato Sauce, ","Pizza Cheese, ", "Pepperoni, ", "Sausage, ", "Onion, ", "Green Bell Papper, ","Olives, ", "Tomato"],
        price: ["10.45", "12.45","14.45","16.45"],
        size: ['10"', '12"', '14"', '16"']
    },
    {
        id:14,
        name: "Create Your Own",
        img: "../../images/cyo-pizza.jpg",
        ingredients: [],
        price: ["10.45", "12.45","14.45","16.45"],
        size: ['10"', '12"', '14"', '16"']
    }
]

const Pastas=[
    {
        id:21,
        name: "Chicken Alfredo Pasta",
        img: "https://www.sixsistersstuff.com/wp-content/uploads/2015/05/One-Pan-Alfredo-2-768x1152.jpg",
        ingredients: ["Plain Pasta, ","Alfredo Sauce, ", "Mozerella Cheese, ", "Chicken"],
        price: ["9.45"],
        size: []
    },
    {
        id:22,
        name: "Meaty Marinara Pasta",
        img: "https://ministryofcurry.com/wp-content/uploads/2017/04/IMG_2600.jpg",
        ingredients: ["Plain Pasta, ", "Marinara Sauce, ", "Sausage, ", "Beef, ", "Parmesan Cheese"],
        price: ["9.45"],
        size: []
    },
    {
        id:23,
        name: "Create Your Own",
        img: "../../images/cyopasta.webp",
        ingredients: [],
        price: ["9.45"],
        size: []
    }
]
const Salads=[
    {
        id:31,
        name: "Mediterranean  Salad",
        img: "https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2018/06/Easy-Mediterranean-Salad-Primavera-Kitchen-1.jpg",
        ingredients: ["Romaine, ", "Spring Mix, ","Carrot, ", "Tomato ,", "Cucumber, ", "Mint, ","Feta Cheese, ", "Italian Dressing"],
        price: ["7.45"],
        size: []
    },
    {
        id:32,
        name: "Chicken Caesar Salad",
        img: "https://www.joyfulhealthyeats.com/wp-content/uploads/2020/04/Easy-Grilled-Chicken-Caesar-Salad-with-Homemade-Dressing-web-6.jpg",
        ingredients: ["Iceberg Lettuce, ", "Romaine, ", "Roasted Chicken, ", "Parmesan Cheese, ", "Caesar Dressing"],
        price: ["7.45"],
        size: []
    },
    {
        id:33,
        name: "Kale Garden Salad",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2018/01/lemon-parmesan-kale-salad-1200-7634.jpg",
        ingredients: ["Kinoa, ", "Kale, ", "Romaine, ", "Red Cabbage, ", "Tomato, ", "Carrot, ", "Red Onion, ", "Corn, ", "Lime Cilantro Dressing"],
        price: ["7.45"],
        size: []
    },
    {
        id:34,
        name: "Create Your Own",
        img: "https://feelgoodfoodie.net/wp-content/uploads/2019/02/Mediterranean-Chopped-Salad-5.jpg",
        ingredients: [],
        price: ["7.45"],
        size: []
    }
]
const Sides=[
    {
        id:41,
        name: "Garlic Bread",
        img: "https://thecozycook.com/wp-content/uploads/2019/05/BEST-Cheesy-Homemade-Garlic-Bread-.jpg",
        ingredients: [],
        price: ["4.95"],
        size: []
    },
    {
        id:42,
        name: "Bread Sticks",
        img: "https://www.papajohns.com/assets/img/company/ingredients/parm-breadsticks.jpg",
        ingredients: [],
        price: ["4.95"],
        size: []
    },
    {
        id:43,
        name: "Cheese Sticks",
        img: "https://i.pinimg.com/736x/e1/0f/08/e10f087ec61f666440aab91071122ca7.jpg",
        ingredients: [],
        price: ["5.95"],
        size: []
    },
    {
        id:44,
        name: "Cheese Stuff Pocket",
        img: "https://emilybites.com/wp-content/uploads/2017/01/Taco-Puff-Pockets-1b-620x930.jpg",
        ingredients: [],
        price: ["6.95"],
        size: []
    },
    {
        id:45,
        name: "Meaty Stuff Pocket",
        img: "https://1.bp.blogspot.com/-j6E4RFSiJUs/TgfWwn0XaxI/AAAAAAAAE2w/q9BKfWMzdxs/s1600/IMG_1320.JPG",
        ingredients: [],
        price: ["6.95"],
        size: []
    },
    {
        id:46,
        name: "Croquettes",
        img: "https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2017/10/22090944/a2-8.jpg",
        ingredients: [],
        price: ["4.95"],
        size: []
    },
    {
        id:47,
        name: "Mozzarella Stick",
        img: "https://eccos-pizza.com/wp-content/uploads/2019/05/mozzarella-sticks.jpg",
        ingredients: [],
        price: ["4.95"],
        size: []
    },
    {
        id:48,
        name: "Jalapeno Poppers",
        img: "https://www.thespruceeats.com/thmb/BTgZv-XgXiqD6WdQ0rzkysffNU8=/2121x1193/smart/filters:no_upscale()/Jalapeno-Poppers-58a727e85f9b58a3c955b1ab.jpg",
        ingredients: [],
        price: ["4.95"],
        size: []
    }
]

const Desserts = [
    {
        id:51,
        name: "Apple Pie",
        img: "https://d31hvdqcl59nv6.cloudfront.net/wp-content/uploads/2020/06/Freebies_PopeyesApple.jpg",
        ingredients: [],
        price: ["3.95"],
        size: []
    },
    {
        id:52,
        name: "Brownie",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdb6ROJG1qh68WT1ry7o8SIyrtK7Y2cyLHrvFm3ftQQJy8MfDT&usqp=CAU",
        ingredients: [],
        price: ["3.95"],
        size: []
    },
    {
        id:53,
        name: "Chocolate Chips Cookie",
        img: "https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2018/11/worst-chocolate-chip-cookie-recipe-1-of-1-3-500x500.jpg",
        ingredients: [],
        price: ["3.95"],
        size: []
    },
    {
        id:54,
        name: "Cinnamon Rolls",
        img: "https://laurenslatest.com/wp-content/uploads/2019/07/Chewy-Soft-Cinnamon-Rolls-13.jpg",
        ingredients: [],
        price: ["3.95"],
        size: []
    }
]

const Drinks = [
    {
        id:61,
        name: "Mtn Dew",
        // img: "https://cdn.shopify.com/s/files/1/0234/7341/products/1liter-cap-right_1024x1024.jpg?v=1583781171",
        img: "https://cdn.shopify.com/s/files/1/0269/2121/products/Glass_Bottle_Mountain_Dew.jpg?v=1568703424",
        ingredients: [],
        size: ["330ml", "2 Liter"],
        price: ["1.95", "2.95"]
    },
    {
        id:62,
        name: "Cocca Cola",
        img: "https://i5.walmartimages.com/asr/e03de7a8-c0a3-48ed-a107-6eec5ebddfaa_1.920a6b4429182a0c2a9291ff5824464f.jpeg",
        ingredients: [],
        size: ["330ml", "2 Liter"],
        price: ["1.95", "2.95"]
    },
    {
        id:63,
        name: "Cocca Cola Diet",
        img: "https://images-na.ssl-images-amazon.com/images/I/41kldHrc0kL.jpg",
        ingredients: [],
        size: ["330ml", "2 Liter"],
        price: ["1.95", "2.95"]
    },
    {
        id:64,
        name: "Cocca Cola Zero",
        img: "https://images-na.ssl-images-amazon.com/images/I/41naDwaDFyL.jpg",
        ingredients: [],
        size: ["330ml", "2 Liter"],
        price: ["1.95", "2.95"]
    },
    {
        id:65,
        name: "Sprite",
        img: "https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/0/0/00049000047820_main.jpg",
        ingredients: [],
        size: ["330ml", "2 Liter"],
        price: ["1.95", "2.95"]
    },
    {
        id:66,
        name: "Fanta",
        img: "https://s3.envato.com/files/258098558/fanta.jpg",
        ingredients: [],
        size: ["330ml", "2 Liter"],
        price: ["1.95", "2.95"]
    }
]

export {Pizzas, Pastas, Salads, Sides, Desserts, Drinks};