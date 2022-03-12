const   btnFilterAll = document.querySelector(".filter-list-1"),
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

            productListChildArray.forEach(function(article){
                if (filterName === "All") {
                    article.classList.remove("hide-product");
                } else {
                    if (!article.classList.contains(filterName)) {
                        article.classList.add("hide-product");
                    } else {
                        article.classList.remove("hide-product");
                    }
                }
            })
}

function filterPriceRange (price){
    price.textContent = `$${btnVolumeFilter.value}-5,000`;
}