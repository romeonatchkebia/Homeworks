const hats = [
    {
        hatUrl:"https://www.bon-clic-bon-genre.eu/vignette2/px7835cirillo-bordeaux-1_20211102164854.jpg",
        title: "Panama",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 340,
        category: "man",
        quantity: 27,
    },
    {
        hatUrl:"https://cdn.shopify.com/s/files/1/0397/0396/9949/products/stafford_escorial_navy_a_1600x.jpg?v=1640025332",
        title: "Homburg",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 127,
        category: "man",
        quantity: 76,
    },
    {
        hatUrl:"https://cdn.shopify.com/s/files/1/0274/9962/6553/products/135004Z_ec496905-cc35-46ec-9758-251b521dcf50.jpg?v=1650024993&width=533",
        title: "Cowboy",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 128,
        category: "woman",
        quantity: 15,
    },
    {
        hatUrl:"https://www.cappellieborse.gr/images/cached/700x700-photo1810.jpg",
        title: "Tryolean",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 620,
        category: "woman",
        quantity: 19,
    },
    {
        hatUrl:"https://fwrd.co.za/wp-content/uploads/sites/2/2020/11/Fedora-Black-Black-Soc-600x600.jpg",
        title: "Fedora classic",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 762,
        category: "woman",
        quantity: 37,
    },
    {
        hatUrl:"https://www.headtohat.com/wp-content/uploads/2022/02/Bermuda-back-300x300.jpg",
        title: "Ben Hogan",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 390,
        category: "man",
        quantity: 56,
    },
    {
        hatUrl:"https://candyscostumeshop.com/wp-content/uploads/2022/10/SK430-1.jpg",
        title: "Homburg",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 328,
        category: "woman",
        quantity: 3,
    },
    {
        hatUrl:"https://media.takealot.com/covers_images/55c50a42183149bf8ae647126e36b76a/s-zoom.file",
        title: "Porkpie",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 825,
        category: "man",
        quantity: 17,
    },
    {
        hatUrl:"https://kmartau.mo.cloudinary.net/f4e8b6d8-57ac-412c-aa2c-6396ef115161.jpg?tx=w_300,h_300,c_pad",
        title: "Poor-Boy",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 475,
        category: "woman",
        quantity: 8,
    },
    {
        hatUrl:"https://cdn.shopify.com/s/files/1/0397/0396/9949/products/chelsea-fedora-05.14_300x.jpg?v=1604581093",
        title: "Tophat",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 666,
        category: "children",
        quantity: 5,
    },
    {
        hatUrl:"https://i.ebayimg.com/images/g/9oYAAOSwll1WvfuB/s-l500.jpg",
        title: "Derby a.k.a Bowler",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 178,
        category: "children",
        quantity: 3,
    }
];
  



// cards rendering function
const cardsRenderer = (item) => {
    return `<div class="card">
    <img src=${item.hatUrl} id="image" alt="some image">

    <p id="title" style="color: #b12b6b;">${item.title}</p>
    <div id="subTitle">${item.subTitle}</div>

    <div id="quantity"><p>Quantity: ${item.quantity}</p></div>
    <div id="price" class="pink"><p>${item.price}$</p></div>

    <button id="add-to-cart" style="color: #fbfbfb;">Add To Cart</button>
</div>`
};

const cardContainer = document.getElementById("card-container"); 

cardContainer.innerHTML = hats.map((hat) => cardsRenderer(hat));

const categoryBtn = document.querySelectorAll(`#man, #woman, #children, #all`);

const categoryBtns = [...categoryBtn];





// cstegorization function
categoryBtns.forEach((categoryBtn) => {
    categoryBtn.addEventListener("click", () => {
        if(categoryBtn.textContent === "all") {
            cardContainer.innerHTML = hats.map((item) => cardsRenderer(item));
            return;
        }

        let filtered = hats.filter((hat) => hat.category === categoryBtn.textContent);
        cardContainer.innerHTML = filtered.map((item) => cardsRenderer(item));
    });
});



// search function
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("input");


searchBtn.addEventListener("click", () => {
    let x = searchInput.value.trim().toLowerCase();
    hats.forEach((hat) => {
        if (x === hat.title.trim().toLowerCase()) {
            cardContainer.innerHTML = cardsRenderer(hat)
        }
    })
});
