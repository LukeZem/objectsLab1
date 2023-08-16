//Problem 1
const carThree = {
    wheels: 4,
    owner: "Dom",
    isBroken: false,
    color: "Black"
};

carThree.price = 100000;
carThree['year'] = 1979;
carThree.isBroken = true;
console.log(carThree.owner);
let clientIsInterested;
if (carThree.color === "Blue") {
    clientIsInterested = true;
} else {
    clientIsInterested = false
};
delete carThree.owner;
console.log(carThree);



//problem 2
const store = {
    profit: 100000,
    manager: "Bob",
    isOpenNow: true,
    isVeryExpensive: true
};
store.location = "Seattle";
store['storeType'] = "Music";
store.isOpenNow = false;
console.log(store.isVeryExpensive);
let canShopHere;
if (store.isOpenNow && !store.isVeryExpensive) {
    canShopHere = true;
} else {
    canShopHere = false;
};
delete store.profit;
console.log(store);



//problem 3
const home = {
    rooms: 2,
    bathrooms: 2,
    isForSale: false,
    isInGoodLocation: true
};
home.price = 10;
home['year'] = 2010;
home.isForSale = true;
console.log(home.bathrooms);
let buyHouse;
if(home.isForSale && home.isInGoodLocation) {
    buyHouse = true;
} else {
    buyHouse = false;
};
delete home.isForSale;
console.log(home);



//problem 4, 5
const user = {
    userName: "Luke",
    age: 31,
    city: "Kirkland",
    state: "WA"
};
user.country = "US";
user["email"] = "person@fakedomain.com";
user.city = "Bellevue";
console.log(user.age);
let canDrink;
if (user.age >= 21) {
    canDrink = true;
} else {
    canDrink = false;
}
delete user.age;
console.log(user);