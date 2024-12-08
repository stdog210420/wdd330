const productCards = document.querySelector('.bag-cards');
const h2title = document.querySelector('.h2-title');


let products = [];
const getProducts = async () => {
    const response = await fetch("https://stdog210420.github.io/wdd131/project/scripts/products.json");
    if (response.ok) {
        products = await response.json();
        creatProductCard(products);
        console.log(products)
    }
}
getProducts();


//Home - displays all the temples stored in the array.

let wholeLink = document.querySelector(".whole");
wholeLink.addEventListener("click", () => {
    creatProductCard(products);
    h2title.innerHTML = "Whole";
})

let wristletLink = document.querySelector(".wristlet-bags");
wristletLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.category == "Wristlet"));
    h2title.innerHTML = "Wristlet";
})


let shoulderLink = document.querySelector(".shoulder-bags");
shoulderLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.category == "Shoulder Bag"));
    h2title.innerHTML = "Shoulder Bag";
})

let drawstringLink = document.querySelector(".drawstring-bags");
drawstringLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.category == "Drawstring"));
    h2title.innerHTML = "Drawstring Bag";
})


let toteLink = document.querySelector(".tote-bags");
toteLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.category == "Tote Bag"));
    h2title.innerHTML = "Tote Bag";
})

let bagsLink = document.querySelector(".bags-type");
bagsLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.type == "Bag"));
    h2title.innerHTML = "Bags";
})

let othersLink = document.querySelector(".others");
othersLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.type == "Others"));
    h2title.innerHTML = "Others";
})

let pillowLink = document.querySelector("#pillow");
pillowLink.addEventListener("click", () => {
    creatProductCard(products.filter(product => product.category == "Pillow"));
    h2title.innerHTML = "Pillow";
})




function creatProductCard(filteredProducts) {
    productCards.innerHTML = "";
    filteredProducts.forEach(product => {
        // Create a figure element for each temple
        let figure = document.createElement("figure");
        // Create elements for each templeCards
        let figcaption = document.createElement("figcaption");
        let productName = document.createElement("h4");
        let category = document.createElement("p");
        let price = document.createElement("p");
        let amount = document.createElement("p");
        let img = document.createElement("img");
        const button = document.createElement("button");

        // Set the content of the elements
        productName.innerHTML = `${product.Name}`;
        category.innerHTML = `Category: <span class="span-temple">${product.category}</span>`;
        price.innerHTML = `Price:$ <span class="span-temple">${product.price}</span>`;
        amount.innerHTML = `Quantity: <span class="span-temple">${product.quantity}</span>`;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.Name} Bags image`);
        img.setAttribute("loading", "lazy", width = "1045", height = "1420");
        button.innerHTML = "Add to Cart";
        // Trigger the addToCart function with the respective product as a parameter in the button's click event listener
        button.addEventListener("click", function () {
            console.log("Button clicked with productId: " + product.Id);
            console.log("Button clicked with productQuantity: " + product.quantity);
            product.quantity = 0;
            addToCart(product.Id);
        });
        // Append the temple details to the figcaption
        figcaption.appendChild(productName);
        figcaption.appendChild(category);
        figcaption.appendChild(price);
        figcaption.appendChild(amount);
        // Append the image and the figcaption to the figure
        figure.appendChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(button);
        //add class to p1 & figure
        figure.classList.add('products');
        // Finally, append the figure to the document 
        productCards.appendChild(figure);
    });
}

const addToCartButton = document.getElementById("addToCart");
const cartItems = document.getElementById("cart-items");
const totalQuantity = document.getElementById("quantity");
const totalCost = document.getElementById("total");
let cart = [];
let totalPrice = 0;
let sum = 0;

function addToCart(Id) {
    const product = products.find((item) => item.Id === Id);
    console.log(product)

    if (product) {
        cart.push(product);
        product.quantity++;

        // Create a new list element
        const listItem = document.createElement("p");
        listItem.textContent = `Name: ${product.Name}, Price: $${product.price}, Amount: ${product.quantity}`;
        // add listItem to the shopping cart
        cartItems.appendChild(listItem);

        //update total number
        sum += product.quantity;
        console.log(totalQuantity)
        console.log(product.quantity)
        // update total price
        totalPrice += product.price * product.quantity;
        totalQuantity.textContent = `Sum: ${sum}`;
        totalCost.textContent = `Total: $${totalPrice}`;
    } else {
        // Handle the case where the product is not found
        console.log("Product not found.");
    }
}
const clearCartButton = document.getElementById("clearCart");

clearCartButton.addEventListener("click", () => {
    cart = [];
    sum = 0;
    totalPrice = 0;
    cartItems.innerHTML = "";
    // Update the total cost and total quantity displays
    totalCost.textContent = "Total: $0";
    totalQuantity.textContent = "Sum: 0"; // Make sure to use the correct element

    // You can also add additional logic as needed, like showing a message or resetting other parts of your application.
});


