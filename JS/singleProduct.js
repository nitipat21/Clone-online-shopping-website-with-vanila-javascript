window.addEventListener("load",init);

function init (){
    generateCart();
    generateTotalPrice();
    createSingleProductInfo();
}

function createSingleProductInfo (){
    const   thisProductID = getLocalStorage("singleProduct"),
            storeLocalStorage = getLocalStorage("store"),
            storeArray = Array.from(storeLocalStorage),
            productPageContainer = document.querySelector(".single-product-container"),
            thisProductInfo = storeArray[thisProductID-1],
            thisProductPage = ` <div class="single-product-image">
                                    <img src="${thisProductInfo.image}" alt="${thisProductInfo.name} img" srcset="">
                                </div>
                                <div class="single-product-info">
                                <h1 class="single-product-name">${thisProductInfo.name}</h1>
                                <h3 class="single-product-company">${thisProductInfo.company}</p>
                                <h3 class="single-product-price">$ ${formatMoney(thisProductInfo.price)}</h3>
                                <div class="single-product-color-box">
                                    <div class="color-box ${thisProductInfo.color[0]}"></div>
                                    <div class="color-box ${thisProductInfo.color[1]}"></div>
                                </div>
                                <p class="single-product-descriptions">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit libero consequuntur, quia commodi accusantium impedit a molestiae, inventore laborum saepe alias? Similique aliquam minima debitis et quo pariatur, delectus expedita!</p>
                                <button class="product-cart-btn" onclick="getProductToCart(this)">Cart</button>
                                </div>`;

            productPageContainer.innerHTML += thisProductPage;
}
