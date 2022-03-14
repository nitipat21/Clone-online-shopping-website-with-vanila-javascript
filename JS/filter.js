const   filterList = document.querySelector(".filter-list"),
        btnFilterAll = document.querySelector(".filter-list-1"),
        btnFilterCompanyA = document.querySelector(".filter-list-2"),
        btnFilterCompanyB = document.querySelector(".filter-list-3"),
        btnFilterCompanyC = document.querySelector(".filter-list-4"),
        btnFilterCompanyD = document.querySelector(".filter-list-5"),
        volumeFilter = document.querySelector(".filter-price-volume"),
        volumeAmount = document.querySelector(".filter-price-volume-amount"),
        btnVolumeFilter = volumeFilter.firstElementChild;
// 
btnFilterAll.addEventListener("click",filterCompanyName.bind(this,btnFilterAll));
btnFilterCompanyA.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyA));
btnFilterCompanyB.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyB));
btnFilterCompanyC.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyC));
btnFilterCompanyD.addEventListener("click",filterCompanyName.bind(this,btnFilterCompanyD));
btnVolumeFilter.addEventListener("change",filterPriceRange.bind(this,volumeAmount));
// 
function filterCompanyName (name) {
    const   filterName = name.textContent,
            productListChild = productList.children,
            productListChildArray = Array.from(productListChild);
            filterPriceRange(btnVolumeFilter.value);
            selectNameFilter(name);
            
            productListChildArray.forEach(function(article){
                if (!article.classList.contains("hide-product")) {
                    if (filterName === "All") {
                        article.classList.remove("hide-product");
                    } else {
                        if (!article.classList.contains(filterName)) {
                            article.classList.add("hide-product");
                        } else {
                            article.classList.remove("hide-product");
                        }
                    }
                }
            });
}

function filterPriceRange (price) {
    const   priceRange = activePriceFilter(price),
            priceRangNum = parseFloat(priceRange.split("$")[1].replace(/,/g, "")),
            productListChild = productList.children,
            productListChildArray = Array.from(productListChild);
            
            productListChildArray.forEach(function(article){
                const   productPrice = article.lastElementChild.lastElementChild.textContent,
                        productPriceNum = parseFloat(productPrice.replace(/,/g, ""));

                if (priceRangNum === "0") {
                    article.classList.remove("hide-product");
                } else {
                    if (priceRangNum > productPriceNum) {
                        article.classList.add("hide-product");
                    } else if (priceRangNum <= productPriceNum) {
                        article.classList.remove("hide-product");
                    }
                }
            })
}

function activePriceFilter (price){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const priceRange = formatter.format(btnVolumeFilter.value).replace(/(\.|,)00$/g, "");
    
    price.textContent = `${priceRange}-5,000`;

    return priceRange;
}

function selectNameFilter (name) {
    const filterListArray = Array.from(filterList.children);

    filterListArray.forEach(function(value){
        if (name !== value.textContent)
            if (value.classList.contains("selected")) {
                value.classList.remove("selected");
            }
    })

    name.classList.add("selected");
}