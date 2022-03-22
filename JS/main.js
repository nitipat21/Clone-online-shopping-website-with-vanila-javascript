const   sideBarCloseBtn = document.querySelector(".sidebar-close"),
        sideBarOverlay = document.querySelector(".sidebar-overlay"),
        navBarToggle = document.querySelector(".nav-bar-toggle"),
        navBarCart = document.querySelector(".nav-bar-cart"),
        cartSideBarCloseBtn = document.querySelectorAll(".sidebar-close")[1],
        cartSideBarOverlay = document.querySelector(".cart-sidebar-overlay"),
        productList = document.querySelector(".products-list"),
        productCartList = document.querySelector(".cart-sidebar-items"),
        removeProductFromCartBtn = document.querySelector(".product-remove-btn"),
        cartCount = document.querySelector(".cart-count"),
        featuredArticles = document.querySelector(".featured-articles"),
        cartTotalPrice = document.querySelector(".cart-sidebar-amount");
// 
navBarToggle.addEventListener("click",toggleClassList.bind(this,sideBarOverlay,"show"));
sideBarCloseBtn.addEventListener("click",toggleClassList.bind(this,sideBarOverlay,"show"));
cartSideBarCloseBtn.addEventListener("click",toggleClassList.bind(this,cartSideBarOverlay,"show"));
navBarCart.addEventListener("click",toggleClassList.bind(this,cartSideBarOverlay,"show"));
// 
function toggleClassList(event,className){
    event.classList.toggle(className);
}

function generateStore(){
    const   storeLocalStorage = getLocalStorage("store"),
            storeArray = Array.from(storeLocalStorage);
    
    for (let index = 0; index < storeArray.length; index++) {
        createProduct(storeArray,index);
    }
}

function createProduct(array,index){
    const   thisProduct = array[index],
            productArticle = `
                <article class="product ${thisProduct.company}" id="${thisProduct.id}">
                        <div class="product-image-container">
                            <img src="${thisProduct.image}" alt="product image" class="product-image">
                        </div>
                        <div class="product-icons">
                            <a href="/HTML/singleProduct.html" target="_blank" class="product-info" onclick="setLocalStorage('singleProduct',${thisProduct.id})">Info</a>
                            <button class="product-cart-btn" onclick="getProductToCart(this)">Cart</button> 
                        </div>
                        <footer class="product-footer">
                            <p class="product-name">${thisProduct.name}</p>
                            <h4 class="product-price">${thisProduct.price}</h4>
                        </footer>
                </article>`;

    productList.innerHTML += productArticle;
}

function getProductToCart(event){
    const   articleID = event.parentElement.parentElement.id,
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
        calculateTotal();

        if (!cartSideBarOverlay.classList.contains("show")){
            toggleClassList(cartSideBarOverlay,"show")
        };
    }
}

function removeProductFromCart(event){
    const   thisProduct = event.parentElement.parentElement,
            thisProductID = event.parentElement.parentElement.id,
            thisProductPrice = event.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent,
            thisProductAmount = event.parentElement.parentElement.lastElementChild.lastElementChild.previousElementSibling.textContent,
            totalProductPrice = parseFloat(thisProductPrice.replace(/,/g, ""))*parseFloat(thisProductAmount),
            totalPriceLocalStorage = getLocalStorage("totalPrice");

    setLocalStorage("totalPrice",(totalPriceLocalStorage - totalProductPrice));
    productCartList.removeChild(thisProduct);
    localStorage.removeItem(thisProductID);
    countCartItems();
    calculateTotal();

    if (!productCartList.childElementCount) {
        toggleClassList(cartSideBarOverlay,"show");
    }
}

function generateCart(){

    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) !== "store" && localStorage.key(index) !== "totalPrice" && localStorage.key(index) !== "singleProduct" ) {
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
                        <button class="product-increase-btn" onclick="increaseCartItems(this)">increase</button>
                        <h4 class="product-amount">${thisProduct.amount}</h4>
                        <button class="product-decrease-btn" onclick="decreaseCartItems(this)">decrease</button>
                    </div>`;
            
            articleNode.innerHTML = productInCart;
            productCartList.appendChild(articleNode);
            countCartItems();
        }
    }
}

function countCartItems(){
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
            itemsAmountIncreased = parseInt(itemsAmount) + 1,
            thisProductID = btn.parentElement.parentElement.id;

            btn.nextElementSibling.textContent = itemsAmountIncreased;
            countCartItems();
            updateAmountOnLocalStorage(thisProductID,itemsAmountIncreased);
            calculateTotal()
}

function decreaseCartItems(btn){
    const   itemsAmount = btn.previousElementSibling.textContent,
            itemsAmountDecreased = parseInt(itemsAmount) - 1,
            thisProductID = btn.parentElement.parentElement.id;;

            btn.previousElementSibling.textContent = itemsAmountDecreased;
            countCartItems();
            updateAmountOnLocalStorage(thisProductID,itemsAmountDecreased);
            calculateTotal()

            if (!itemsAmountDecreased) {
                removeProductFromCart(btn);
            }
}

function updateAmountOnLocalStorage(key,amount){
    const   thisProductLocalStorage = getLocalStorage(key),
            cloneOfThisProduct = cloneObject(thisProductLocalStorage);

    cloneOfThisProduct.amount = JSON.stringify(amount);
    setLocalStorage(key,cloneOfThisProduct);
}

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

function generatePromotedProduct(){
    const   storeLocalStorage = getLocalStorage("store"),
            storeArray = Array.from(storeLocalStorage),
            randomNumberArray = [];

    for (let index = 0; index < 4; index++) {
        const randomNumber = Math.floor(Math.random()*(storeArray.length));

        if (!randomNumberArray.includes(randomNumber)){
            createFeaturedProduct(storeArray,randomNumber);
            randomNumberArray.push(randomNumber);
        } else {
            index--;
        };
    }
}

function createFeaturedProduct(array,index) {
    const   thisProduct = array[index],
            productArticle = `
                <article class="product ${thisProduct.company}" id="${thisProduct.id}">
                        <div class="product-image-container">
                            <img src="${thisProduct.image}" alt="product image" class="product-image">
                            <div class="product-icons">
                            <a href="/HTML/singleProduct.html" target="_blank" class="product-info" onclick="setLocalStorage('singleProduct',${thisProduct.id})">Info</a>                                
                            <button class="product-cart-btn" onclick="getFeaturedProductToCart(this)">Cart</button> 
                            </div>
                        </div>
                        <footer class="product-footer">
                            <p class="product-name">${thisProduct.name}</p>
                            <h4 class="product-price">${thisProduct.price}</h4>
                        </footer>
                </article>`;

    featuredArticles.innerHTML += productArticle;
}

function calculateTotal(){
    const totalPriceArray = [];

    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) !== "store" && localStorage.key(index) !== "totalPrice" && localStorage.key(index) !== "singleProduct" ) {
            const   thisProduct = getLocalStorage(localStorage.key(index)),
                    thisProductPrice = parseFloat(thisProduct.price.replace(/,/g, "")),
                    thisProductAmount = parseFloat(thisProduct.amount),
                    totalProductPrice = thisProductPrice * thisProductAmount;

            totalPriceArray.push(totalProductPrice);

            if (totalPriceArray.length > 1) {
                setLocalStorage("totalPrice",totalPriceArray.reduce((a, b) => a + b));
            } else {
                setLocalStorage("totalPrice",totalProductPrice);
            }
        }
    }
    generateTotalPrice();
}

function generateTotalPrice(){
    const totalCalculatedPrice = getLocalStorage("totalPrice");

    if (totalCalculatedPrice) {
        cartTotalPrice.textContent = formatMoney(totalCalculatedPrice).replace(/(\.|,)00$/g, "");
    } else {
        cartTotalPrice.textContent = "$0";
    }
}

function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

