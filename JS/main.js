// declare value
const   sideBarCloseBtn = document.querySelector(".sidebar-close"),
        sideBarOverlay = document.querySelector(".sidebar-overlay"),
        navBarToggle = document.querySelector(".nav-bar-toggle"),
        navBarCart = document.querySelector(".nav-bar-cart"),
        cartSideBarCloseBtn = document.querySelectorAll(".sidebar-close")[1],
        cartSideBarOverlay = document.querySelector(".cart-sidebar-overlay"),
        productList = document.querySelector(".products-list"),
        productCartList = document.querySelector(".cart-sidebar-items"),
        removeProductFromCartBtn = document.querySelector(".product-remove-btn"),
        cartCount = document.querySelector(".cart-count");

// event listener

window.addEventListener("load",init);
navBarToggle.addEventListener("click",toggleClassList.bind(this,sideBarOverlay,"show"));
sideBarCloseBtn.addEventListener("click",toggleClassList.bind(this,sideBarOverlay,"show"));
cartSideBarCloseBtn.addEventListener("click",toggleClassList.bind(this,cartSideBarOverlay,"show"));
navBarCart.addEventListener("click",toggleClassList.bind(this,cartSideBarOverlay,"show"));

// function

function toggleClassList (event,className) {
    event.classList.toggle(className);
}

function init () {
    setLocalStorage("store",data);
    generateStore();
    generateCart();
}

function generateStore () {
    const   storeLocalStorage = getLocalStorage("store"),
            storeArray = Array.from(storeLocalStorage);
    
    for (let index = 0; index < storeArray.length; index++) {
        createProduct(storeArray,index);
    }
}

function createProduct (array,index) {
    const   thisProduct = array[index],
            productArticle = `
                <article class="product" id="${thisProduct.id}">
                        <div class="product-image-container">
                            <img src="${thisProduct.image}" alt="product image" class="product-image">
                            <div class="product-icons">
                                <a href="http://" class="product-icon">
                                    <i class="fas fa-search">search</i>
                                </a>
                                <button class="product-cart-btn" onclick="getProductToCart(this)">
                                    <i class="fas fa-shopping-cart">cart</i>
                                </button> 
                            </div>
                        </div>
                        <footer>
                            <p class="product-name">${thisProduct.name}</p>
                            <h4 class="product-price">${thisProduct.price}</h4>
                        </footer>
                </article>`;

    productList.innerHTML += productArticle;
}

function getProductToCart (event) {
    const   articleID = event.parentElement.parentElement.parentElement.id,
            storeLocalStorage = getLocalStorage("store"),
            storeArray = Array.from(storeLocalStorage),
            thisProduct = storeArray[articleID-1],
            articleNode = document.createElement("article");
            articleNode.setAttribute("id",thisProduct.id);
            articleNode.setAttribute("class","product-cart");

    if  (!localStorage.getItem(thisProduct.id)) {
        const   productInCart = `
                    <div class="product-image-container-cart">
                        <img src="${thisProduct.image}" alt="product image" class="product-image-cart">
                    </div>
                    <div class="name-price-removeBtn">
                        <h4 class="product-name-cart">${thisProduct.name}</h4>
                        <p class="product-price-cart">${thisProduct.price}</p>
                        <button class="product-remove-btn" onclick="removeProductFromCart(this)">remove</button> 
                    </div>
                    <div class="product-amount-adjust">
                        <button class="product-increase-btn" onclick="increaseCartItems(this)">increase</button>
                        <h4 class="product-amount">${thisProduct.amount}</h4>
                        <button class="product-decrease-btn" onclick="decreaseCartItems(this)">decrease</button>
                    </div>`;

        articleNode.innerHTML = productInCart;
        productCartList.appendChild(articleNode);
        setLocalStorage(thisProduct.id,thisProduct);
        countCartItems();

        if (!cartSideBarOverlay.classList.contains("show")){
            toggleClassList(cartSideBarOverlay,"show")
        };
    }
}

function removeProductFromCart (event) {
    const   thisProduct = event.parentElement.parentElement,
            thisProductID = event.parentElement.parentElement.id;

    productCartList.removeChild(thisProduct);
    localStorage.removeItem(thisProductID);
    countCartItems();

    if (!productCartList.childElementCount) {
        toggleClassList(cartSideBarOverlay,"show");
    }
}

function generateCart () {

    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) !== "store") {
            const   thisProduct = getLocalStorage(localStorage.key(index)),
                    articleNode = document.createElement("article");
                    
            articleNode.setAttribute("id",thisProduct.id);
            articleNode.setAttribute("class","product-cart");

            const   productInCart = `
                    <div class="product-image-container-cart">
                        <img src="${thisProduct.image}" alt="product image" class="product-image-cart">
                    </div>
                    <div class="name-price-removeBtn">
                        <h4 class="product-name-cart">${thisProduct.name}</h4>
                        <p class="product-price-cart">${thisProduct.price}</p>
                        <button class="product-remove-btn" onclick="removeProductFromCart(this)">remove</button> 
                    </div>
                    <div class="product-amount-adjust">
                        <button class="product-increase-btn" onclick="console.log("increase")">increase</button>
                        <h4 class="product-amount">${thisProduct.amount}</h4>
                        <button class="product-decrease-btn" onclick="console.log("decrease")">decrease</button>
                    </div>`;
            
            articleNode.innerHTML = productInCart;
            productCartList.appendChild(articleNode);
            countCartItems ()
        }
    }
}

function countCartItems () {
    const   childNodeArray = Array.from(productCartList.children);
    let     startAmount = 0;

    childNodeArray.forEach(function(articleNode){
        const   itemsAmount = articleNode.lastElementChild.firstElementChild.nextElementSibling.textContent;
        startAmount += parseInt(itemsAmount);
    });

    cartCount.textContent = startAmount;
}

function increaseCartItems(btn) {
    const   itemsAmount = btn.nextElementSibling.textContent,
            itemsAmountIncreased = parseInt(itemsAmount) + 1;

            btn.nextElementSibling.textContent = itemsAmountIncreased;
            countCartItems();
}

function decreaseCartItems(btn) {
    const   itemsAmount = btn.previousElementSibling.textContent,
            itemsAmountDecreased = parseInt(itemsAmount) - 1;

            if (!itemsAmountDecreased) {
                removeProductFromCart(btn);
            }

            btn.previousElementSibling.textContent = itemsAmountDecreased;
            countCartItems();
}