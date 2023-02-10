const hats = [
    {
        hatUrl:"https://www.bon-clic-bon-genre.eu/vignette2/px7835cirillo-bordeaux-1_20211102164854.jpg",
        title: "Fedora Classic",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 340,
        category: "man",
        quantity: 27,
    },
    {
        hatUrl:"https://cdn.shopify.com/s/files/1/0397/0396/9949/products/stafford_escorial_navy_a_1600x.jpg?v=1640025332",
        title: "Fedora Jazz",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 127,
        category: "man",
        quantity: 76,
    },
    {
        hatUrl:"https://cdn.shopify.com/s/files/1/0274/9962/6553/products/135004Z_ec496905-cc35-46ec-9758-251b521dcf50.jpg?v=1650024993&width=533",
        title: "Cowboy",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "woman",
        quantity: 15,
    },
    {
        hatUrl:"https://www.cappellieborse.gr/images/cached/700x700-photo1810.jpg",
        title: "Fedora",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "woman",
        quantity: 19,
    },
    {
        hatUrl:"https://fwrd.co.za/wp-content/uploads/sites/2/2020/11/Fedora-Black-Black-Soc-600x600.jpg",
        title: "Fedora Classic",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "woman",
        quantity: 37,
    },
    {
        hatUrl:"https://www.headtohat.com/wp-content/uploads/2022/02/Bermuda-back-300x300.jpg",
        title: "Fedora J",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 78,
        category: "man",
        quantity: 56,
    },
    {
        hatUrl:"https://candyscostumeshop.com/wp-content/uploads/2022/10/SK430-1.jpg",
        title: "Fedora J",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 34,
        category: "woman",
        quantity: 3,
    },
    {
        hatUrl:"https://media.takealot.com/covers_images/55c50a42183149bf8ae647126e36b76a/s-zoom.file",
        title: "Fedora J",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "children",
        quantity: 17,
    },
    {
        hatUrl:"https://kmartau.mo.cloudinary.net/f4e8b6d8-57ac-412c-aa2c-6396ef115161.jpg?tx=w_300,h_300,c_pad",
        title: "Fedora J",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "woman",
        quantity: 8,
    },
    {
        hatUrl:"https://cdn.shopify.com/s/files/1/0397/0396/9949/products/chelsea-fedora-05.14_300x.jpg?v=1604581093",
        title: "Fedora J",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "children",
        quantity: 5,
    },
    {
        hatUrl:"https://i.ebayimg.com/images/g/9oYAAOSwll1WvfuB/s-l500.jpg",
        title: "Fedora J",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 89,
        category: "children",
        quantity: 3,
    }
];
  
const card = document.getElementById("card-container"); 
const orderBtn = document.getElementById("order");
const cartBtn = document.getElementById("cartBtn");
const cartContainer = document.getElementById("cart-container");
const addToCart = document.getElementById("add-to-cart");
const emptyTxt = document.getElementById("empty-txt");
const manBtn = document.getElementById("man");
const womanBtn = document.getElementById("woman");
const childrenBtn = document.getElementById("children");
const threeBtn = document.querySelectorAll(`#man, #woman, #children`);



const cardsToRender = hats.map((hats) => {
    return `<div class="card">
    <img src=${hats.hatUrl} id="image" alt="some image">

    <p id="title" style="color: #b12b6b;">${hats.title}</p>
    <div id="subTitle">${hats.subTitle}</div>

    <div id="quantity"><p>Quantity: ${hats.quantity}</p></div>
    <div id="price" class="pink"><p>${hats.price}$</p></div>

    <button id="add-to-cart" style="color: #fbfbfb;">Add To Cart</button>
</div>`
});
card.innerHTML = cardsToRender;


/* 
let mansCategory = [];
let womansCategory = [];
let childrenCategory = [];



threeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        hats.map(function(hat) {
            if( hat.category === "man") {
                mansCategory.push(hat)
            }
            else if(hat.category === "woman") {
                womansCategory.push(hat)
            }
            else {
                childrenCategory.push(hat)
            }
        });
    });
});
 */


  
  