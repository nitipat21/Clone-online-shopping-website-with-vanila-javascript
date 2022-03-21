const setLocalStorage = function(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
};
const getLocalStorage = function(key) {
    const dataLocalStorage = JSON.parse(localStorage.getItem(key));
    return dataLocalStorage;
};
const data = [
    {
        "id": "1",
        "name": "Apple1",
        "company": "CompanyA",
        "color": ["#3cb371","#ee82ee"],
        "image": "/\IMG/\Products/apple.jpg",
        "price": "0",
        "amount": "1"
    },{
        "id": "2",
        "name": "Banana2",
        "company": "CompanyC",
        "color": ["#ff0000","#0000ff"],
        "image": "/\IMG/\Products/banana.jpg",
        "price": "750",
        "amount": "1"
    },{
        "id": "3",
        "name": "Cat3",
        "company": "CompanyC",
        "color": ["#18b2e8","#54327c"],
        "image": "/\IMG/\Products/cat.jpg",
        "price": "1,500",
        "amount": "1"
    },{
        "id": "4",
        "name": "Dog4",
        "company": "CompanyD",
        "color": ["#7b6b32","#ca80ca"],
        "image": "/\IMG/\Products/dog.jpg",
        "price": "1,800",
        "amount": "1"
    },{
        "id": "5",
        "name": "Eggs5",
        "company": "CompanyE",
        "color": ["#af7cc7","#753def"],
        "image": "/\IMG/\Products/eggs.jpg",
        "price": "2,000",
        "amount": "1"
    },{
        "id": "6",
        "name": "Fruitcake6",
        "company": "CompanyF",
        "color": ["#b72da0","#12976c"],
        "image": "/\IMG/\Products/fruitcake.jpg",
        "price": "2,500",
        "amount": "1"
    },{
        "id": "7",
        "name": "Gun7",
        "company": "CompanyC",
        "color": ["#4f09a3","#c0a922"],
        "image": "/\IMG/\Products/gun.jpg",
        "price": "3,000",
        "amount": "1"
    },{
        "id": "8",
        "name": "Herb8",
        "company": "CompanyD",
        "color": ["#555e90","#f149b6"],
        "image": "/\IMG/\Products/herb.jpg",
        "price": "3,250",
        "amount": "1"
    },{
        "id": "9",
        "name": "Ice cream",
        "company": "CompanyA",
        "color": ["#d54f57","#fe8068"],
        "image": "/\IMG/\Products/icecream.jpg",
        "price": "4,000",
        "amount": "1"
    },{
        "id": "10",
        "name": "Jar10",
        "company": "CompanyB",
        "color": ["#106e8d","#29ff9e"],
        "image": "/\IMG/\Products/jar.jpg",
        "price": "4,250",
        "amount": "1"
    },{
        "id": "11",
        "name": "Kale11",
        "company": "CompanyC",
        "color": ["#11f0bb","#e05b9e"],
        "image": "/\IMG/\Products/kale.jpg",
        "price": "4,500",
        "amount": "1"
    },{
        "id": "12",
        "name": "Lemon12",
        "company": "CompanyD",
        "color": ["#1aca8f","#9d369f"],
        "image": "/\IMG/\Products/lemon.jpg",
        "price": "5,000",
        "amount": "1"
    }
];





