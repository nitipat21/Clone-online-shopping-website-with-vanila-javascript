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
        "color": ["red","green"],
        "image": "/\IMG/\house.png",
        "price": "0",
        "amount": "1"
    },{
        "id": "2",
        "name": "Banana2",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "750",
        "amount": "1"
    },{
        "id": "3",
        "name": "Cat3",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "1,500",
        "amount": "1"
    },{
        "id": "4",
        "name": "Dog4",
        "company": "CompanyD",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "1,800",
        "amount": "1"
    },{
        "id": "5",
        "name": "Eggs5",
        "company": "CompanyE",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "2,000",
        "amount": "1"
    },{
        "id": "6",
        "name": "Fruits6",
        "company": "CompanyF",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "2,500",
        "amount": "1"
    },{
        "id": "7",
        "name": "Gun7",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "3,000",
        "amount": "1"
    },{
        "id": "8",
        "name": "Herb8",
        "company": "CompanyD",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "3,250",
        "amount": "1"
    },{
        "id": "9",
        "name": "Ink9",
        "company": "CompanyA",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,000",
        "amount": "1"
    },{
        "id": "10",
        "name": "Jar10",
        "company": "CompanyB",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,250",
        "amount": "1"
    },{
        "id": "11",
        "name": "Kale11",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,500",
        "amount": "1"
    },{
        "id": "12",
        "name": "Lemon12",
        "company": "CompanyD",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "5,000",
        "amount": "1"
    }
];





