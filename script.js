// script.js

// Item Array

var items = [
  {
    name: "Burger",
    location: "McDonalds",
    image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg?$Product_Desktop$",
  },
  {
    name: "Fries",
    location: "McDonalds",
    image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-French-Fries-Small.jpg?$Product_Desktop$",
  },
  {
    name: "Chicken Nuggets",
    location: "McDonalds",
    image: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-4-piece-Chicken-McNuggets.jpg?$Product_Desktop$",
  },{
    name: "Burger",
    location: "Burger King",
    image: "https://www.bk.com/sites/default/files/03286-3-4-2-Whopper-Small.png",
  }
];

function itemsDisplay() {
  var itemContainer = document.getElementById("itemContainer");
  itemContainer.innerHTML = "";
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
    <div class="Item">
      <img class="item-image" src="${item.image}">
      <div class="item-info">
          <h3 class="item-head">${item.name}</h3>
          <p class="item-Location"> ${item.location}</p>
          <button class="item-button">Claim</button>
      </div>
    </div>
    `;
    itemContainer.appendChild(itemDiv);
  }
}

// Login Functions
 
function showLoginBox() {
  var loginOverlay = document.getElementById("loginOverlay");
  loginOverlay.style.display = "flex";
}

function closeLoginBox() {
  var loginOverlay = document.getElementById("loginOverlay");
  loginOverlay.style.display = "none";
}


// Register Functions

function showRegisterBox() {
  var registerOverlay = document.getElementById("registerOverlay");
  registerOverlay.style.display = "flex";
}

function closeRegisterBox() {
  var registerOverlay = document.getElementById("registerOverlay");
  registerOverlay.style.display = "none";
}


// function Signup

function loginToSignUp(){
  closeLoginBox();
  showRegisterBox();
}

// function Login

function signUpToLogin(){
  closeRegisterBox();
  showLoginBox();
}
// ... your other functions ...
