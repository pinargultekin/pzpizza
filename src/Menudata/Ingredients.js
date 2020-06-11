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
        img: "https://lh3.googleusercontent.com/proxy/jqHnm2TunBsYkTNlxFSIMd7JXv3vuuY_Xz6BiGOtNjeGW_UKgjoy4jgWKnKrPHEKQ-Zh7hGPmWzofqGOBxzO7UqrgzG45LRbLQZVGchD7BSU1YL2lEhzk6YR7j2wdjtD7vV3vB74ZehVduSqAA",
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
const Salads=[
    {
        id:31,
        name: "Mediterranean  Salad",
        img: "https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2018/06/Easy-Mediterranean-Salad-Primavera-Kitchen-1.jpg",
        ingredients: ["Romaine, ", "Spring Mix, ","Carrot, ", "Tomato ,", "Cucumber, ", "Mint, ","Feta Cheese, ", "Italian Dressing"]
    },
    {
        id:32,
        name: "Chicken Caesar Salad",
        img: "https://www.joyfulhealthyeats.com/wp-content/uploads/2020/04/Easy-Grilled-Chicken-Caesar-Salad-with-Homemade-Dressing-web-6.jpg",
        ingredients: ["Iceberg Lettuce, ", "Romaine, ", "Roasted Chicken, ", "Parmesan Cheese, ", "Caesar Dressing"]
    },
    {
        id:33,
        name: "Kale Garden Salad",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2018/01/lemon-parmesan-kale-salad-1200-7634.jpg",
        ingredients: ["Kinoa, ", "Kale, ", "Romaine, ", "Red Cabbage, ", "Tomato, ", "Carrot, ", "Red Onion, ", "Corn, ", "Lime Cilantro Dressing"]
    },
    {
        id:34,
        name: "Create Your Own",
        img: "https://feelgoodfoodie.net/wp-content/uploads/2019/02/Mediterranean-Chopped-Salad-5.jpg",
        ingredients: []
    }
]
const Sides=[
    {
        id:41,
        name: "Garlic Bread",
        img: "https://thecozycook.com/wp-content/uploads/2019/05/BEST-Cheesy-Homemade-Garlic-Bread-.jpg",
        ingredients: []
    },
    {
        id:42,
        name: "Bread Sticks",
        img: "https://www.papajohns.com/assets/img/company/ingredients/parm-breadsticks.jpg",
        ingredients: []
    },
    {
        id:43,
        name: "Cheese Sticks",
        img: "https://i.pinimg.com/736x/e1/0f/08/e10f087ec61f666440aab91071122ca7.jpg",
        ingredients: []
    },
    {
        id:44,
        name: "Cheese Stuff Pocket",
        img: "https://emilybites.com/wp-content/uploads/2017/01/Taco-Puff-Pockets-1b-620x930.jpg",
        ingredients: ["Mozerella Cheese, ", "Cheddar Cheese"]
    },
    {
        id:45,
        name: "Meaty Stuff Pocket",
        img: "https://1.bp.blogspot.com/-j6E4RFSiJUs/TgfWwn0XaxI/AAAAAAAAE2w/q9BKfWMzdxs/s1600/IMG_1320.JPG",
        ingredients: ["Mozerella Cheese, ", "Shaved Steak, ", "Bacon"]
    },
    {
        id:46,
        name: "Croquettes",
        img: "https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2017/10/22090944/a2-8.jpg",
        ingredients: []
    },
    {
        id:47,
        name: "Mozzarella Stick",
        img: "https://eccos-pizza.com/wp-content/uploads/2019/05/mozzarella-sticks.jpg",
        ingredients: []
    },
    {
        id:48,
        name: "Jalapeno Poppers",
        img: "https://www.thespruceeats.com/thmb/BTgZv-XgXiqD6WdQ0rzkysffNU8=/2121x1193/smart/filters:no_upscale()/Jalapeno-Poppers-58a727e85f9b58a3c955b1ab.jpg",
        ingredients: []
    }
]

const Desserts = [
    {
        id:51,
        name: "Apple Pie",
        img: "https://d31hvdqcl59nv6.cloudfront.net/wp-content/uploads/2020/06/Freebies_PopeyesApple.jpg",
        ingredients: []
    },
    {
        id:52,
        name: "Brownie",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdb6ROJG1qh68WT1ry7o8SIyrtK7Y2cyLHrvFm3ftQQJy8MfDT&usqp=CAU",
        ingredients: []
    },
    {
        id:53,
        name: "Chocolate Chips Cookie",
        img: "https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2018/11/worst-chocolate-chip-cookie-recipe-1-of-1-3-500x500.jpg",
        ingredients: []
    },
    {
        id:54,
        name: "Cinnamon Rolls",
        img: "https://laurenslatest.com/wp-content/uploads/2019/07/Chewy-Soft-Cinnamon-Rolls-13.jpg",
        ingredients: []
    }
]

const Drinks = [
    {
        id:61,
        name: "Water",
        img: "https://cdn.shopify.com/s/files/1/0234/7341/products/1liter-cap-right_1024x1024.jpg?v=1583781171",
        ingredients: ["500ml"]
    },
    {
        id:62,
        name: "Cocca Cola",
        img: "https://i5.walmartimages.com/asr/e03de7a8-c0a3-48ed-a107-6eec5ebddfaa_1.920a6b4429182a0c2a9291ff5824464f.jpeg",
        ingredients: ["330ml", "1 Liter", "2 Liter"]
    },
    {
        id:63,
        name: "Cocca Cola Diet",
        img: "https://images-na.ssl-images-amazon.com/images/I/41kldHrc0kL.jpg",
        ingredients: ["330ml", "1 Liter", "2 Liter"]
    },
    {
        id:64,
        name: "Cocca Cola Zero",
        img: "https://images-na.ssl-images-amazon.com/images/I/41naDwaDFyL.jpg",
        ingredients: ["330ml", "1 Liter", "2 Liter"]
    },
    {
        id:65,
        name: "Sprite",
        img: "https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/0/0/00049000047820_main.jpg",
        ingredients: ["330ml", "1 Liter", "2 Liter"]
    },
    {
        id:66,
        name: "Fanta",
        img: "https://s3.envato.com/files/258098558/fanta.jpg",
        ingredients: ["330ml", "1 Liter", "2 Liter"]
    }
]

// export default Pizzas; 
export {Pizzas, Pastas, Salads, Sides, Desserts, Drinks};