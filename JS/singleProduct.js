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
            titleText = document.querySelector(".title-text"),
            thisProductInfo = storeArray[thisProductID-1],
            thisProductPage = ` <div class="single-product-image">
                                    <img src="${thisProductInfo.image}" loading="lazy" alt="${thisProductInfo.name} img" srcset="">
                                </div>
                                <div class="single-product-info">
                                <h1 class="single-product-name">${thisProductInfo.name}</h1>
                                <h3 class="single-product-company">${thisProductInfo.company}</p>
                                <h3 class="single-product-price">$ ${formatMoney(thisProductInfo.price)}</h3>
                                <div class="single-product-color-box">
                                    <div class="color-box" style="background-color:${thisProductInfo.color[0]};"></div>
                                    <div class="color-box" style="background-color:${thisProductInfo.color[1]};"></div>
                                </div>
                                <p class="single-product-descriptions">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit libero consequuntur, quia commodi accusantium impedit a molestiae, inventore laborum saepe alias? Similique aliquam minima debitis et quo pariatur, delectus expedita!</p>
                                <button class="product-cart-btn" onclick="getSingleProductToCart(this)">Cart</button>
                                </div>`;

            document.title = `${thisProductInfo.name} | Simple`;
            titleText.textContent = `Home / ${thisProductInfo.name}`
            productPageContainer.innerHTML += thisProductPage;
}

function getSingleProductToCart(event){
    const   articleName = event.parentElement.firstElementChild.textContent,
            storeLocalStorage = getLocalStorage("store"),
            storeArray = Array.from(storeLocalStorage),
            storeArrayFiltered = storeArray.filter(value => value.name === articleName),
            articleID = storeArrayFiltered[0].id,
            thisProduct = storeArray[articleID-1],
            articleNode = document.createElement("article");
            articleNode.setAttribute("id",thisProduct.id);
            articleNode.setAttribute("class","product-cart");

    if  (!localStorage.getItem(thisProduct.id)) {
        const   productInCart = `
                    <div class="product-image-container-cart">
                        <img src="${thisProduct.image}" loading="lazy" salt="product image" class="product-image-cart">
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


            
            