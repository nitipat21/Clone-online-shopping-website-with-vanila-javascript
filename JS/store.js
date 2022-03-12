const setLocalStorage = function(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
}
const getLocalStorage = function(key) {
    const dataLocalStorage = JSON.parse(localStorage.getItem(key));
    return dataLocalStorage;
}
const data = [
    {
        "id": "1",
        "name": "Product1",
        "company": "CompanyA",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "0",
        "amount": "1"
    },{
        "id": "2",
        "name": "Product2",
        "company": "CompanyB",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "750",
        "amount": "1"
    },{
        "id": "3",
        "name": "Product3",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "1,500",
        "amount": "1"
    },{
        "id": "4",
        "name": "Product4",
        "company": "CompanyD",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "1,800",
        "amount": "1"
    },{
        "id": "5",
        "name": "Product5",
        "company": "CompanyA",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "2,000",
        "amount": "1"
    },{
        "id": "6",
        "name": "Product6",
        "company": "CompanyB",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "2,500",
        "amount": "1"
    },{
        "id": "7",
        "name": "Product7",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "3,000",
        "amount": "1"
    },{
        "id": "8",
        "name": "Product8",
        "company": "CompanyD",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "3,250",
        "amount": "1"
    },{
        "id": "9",
        "name": "Product9",
        "company": "CompanyA",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,000",
        "amount": "1"
    },{
        "id": "10",
        "name": "Product10",
        "company": "CompanyB",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,250",
        "amount": "1"
    },{
        "id": "11",
        "name": "Product11",
        "company": "CompanyC",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,500",
        "amount": "1"
    },{
        "id": "12",
        "name": "Product12",
        "company": "CompanyD",
        "color": "color",
        "image": "/\IMG/\house.png",
        "price": "4,750",
        "amount": "1"
    }
];





