window.addEventListener("load",init);

function init () {
    setLocalStorage("store",data);
    generateStore();
    generateCart();
    createFilterList("store");
}

