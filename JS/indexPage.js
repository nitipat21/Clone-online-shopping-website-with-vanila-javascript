window.addEventListener("load",init);

function init () {
    generateCart();
    generatePromotedProduct ();
    generateTotalPrice();
}

function getFeaturedProductToCart(event){
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
                        <img src="${thisProduct.image}" loading="lazy" alt="product image" class="product-image-cart">
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
