const   filterList = document.querySelector(".filter-list"),
        filterSearch = document.querySelector(".filter-search"),
        btnFilterAll = document.querySelector(".filter-list-1"),
        btnFilterCompanyA = document.querySelector(".filter-list-2"),
        btnFilterCompanyB = document.querySelector(".filter-list-3"),
        btnFilterCompanyC = document.querySelector(".filter-list-4"),
        btnFilterCompanyD = document.querySelector(".filter-list-5"),
        volumeFilter = document.querySelector(".filter-price-volume"),
        volumeAmount = document.querySelector(".filter-price-volume-amount"),
        btnVolumeFilter = volumeFilter.firstElementChild,
        btnClearFilter = document.querySelector(".filter-clear-btn");
// 
btnFilterAll.addEventListener("click",filterCompanyName.bind(this,btnFilterAll));
btnFilterCompanyA.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyA));
btnFilterCompanyB.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyB));
btnFilterCompanyC.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyC));
btnFilterCompanyD.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyD));
btnVolumeFilter.addEventListener("change",filterPriceRange.bind(this,volumeAmount));
btnClearFilter.addEventListener("click",clearFilter.bind(this));
filterSearch.addEventListener("keyup",matchLetters.bind(this,filterSearch));
// 
function filterCompanyName (name){
    const   filterName = name.textContent,
            productListChild = productList.children,
            productListChildArray = Array.from(productListChild);

            selectPriceFilter(btnVolumeFilter.value);
            filterPriceRange(btnVolumeFilter.value);
            selectNameFilter(name);

            productListChildArray.forEach(function(article){
                if (!article.classList.contains("hide-product-price")) {
                    if (filterName === "All") {
                        article.classList.remove("hide-product-company");
                    } else {
                        if (!article.classList.contains(filterName)) {
                            article.classList.add("hide-product-company");
                        } else {
                            article.classList.remove("hide-product-company");
                        }
                    }
                }
            });
}

function selectNameFilter (name){
    const filterListArray = Array.from(filterList.children);

    filterListArray.forEach(function(value){
        if (name !== value.textContent)
            if (value.classList.contains("selected")) {
                value.classList.remove("selected");
            }
    })

    name.classList.add("selected");
}

function filterPriceRange (price){
    const   priceRange = selectPriceFilter(price),
            priceRangNum = parseFloat(priceRange.split("$")[1].replace(/,/g, "")),
            productListChild = productList.children,
            productListChildArray = Array.from(productListChild);

            productListChildArray.forEach(function(article){
                const   productPrice = article.lastElementChild.lastElementChild.textContent,
                        productPriceNum = parseFloat(productPrice.replace(/,/g, ""));

                if (priceRangNum === "0") {
                    article.classList.remove("hide-product-price");
                } else {
                    if (priceRangNum > productPriceNum) {
                        article.classList.add("hide-product-price");
                    } else if (priceRangNum <= productPriceNum) {
                        article.classList.remove("hide-product-price");
                    }
                }
            })
}

function selectPriceFilter (price){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const priceRange = formatter.format(btnVolumeFilter.value).replace(/(\.|,)00$/g, "");
    
    price.textContent = `${priceRange}-5,000`;

    return priceRange;
}

function clearFilter (){
    filterSearch.value = "";
    btnVolumeFilter.value = 0;
    volumeAmount.textContent = `$${0}-5,000`;
    filterCompanyName(btnFilterAll);
}

function getProductName(key){
    const   storeLocalStorage = getLocalStorage(key),
            storeArray = Array.from(storeLocalStorage),
            productNameArray = [];

    storeArray.forEach(product => productNameArray.push(product.name));
    
    return productNameArray;
}

function matchLetters(event){
    const   searchInput = event.value,
            allProductName = getProductName("store"),
            productListChild = productList.children,
            productListChildArray = Array.from(productListChild),
            matchedName = allProductName.filter(name => name.toLowerCase().includes(searchInput));
            
    productListChildArray.forEach(function(article){
        const productName = article.lastElementChild.lastElementChild.previousElementSibling.textContent;
        if (matchedName.includes(productName)) {
            article.classList.remove("hide-product-name");
        } else {
            article.classList.add("hide-product-name");
        }
    })
}
