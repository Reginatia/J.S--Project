//We are building a cash register machine and this everything that we will be in need of.
//Step 1: Create the basic  Object Structure
//this is my main object - holding everything the register needs.
const cashRegister = {
    itemsForSale: {
        Phone: 300,
        "Smart TV": 220,
        "Gaming Console": 150
    },
    shoppingCart: [],
};
//this set up:
//-item for sale: what can we bought
//-shoppingCart: starts empty

//Step2 - add the addItem method (method to add items to cart)
const cashRegister = {
    itemsForSale: {
        Phone: 300,
        "Smart TV": 220,
        "Gaming Console": 150
    },
    shoppingCart: [],

    addItem(itemName) {
        if (this.itemsForSale[itemName]) {
          this.shoppingCart.push(itemName);
          console.log('${itemName} has been added to your cart.');
        } else {
            console.log('sorry, we dont sell ${itemName}.');
        }
    }
};
cashRegister.addItem("Phone");
cashRegister.addItem("Smart TV");
cashRegister.addItem("Book"); //this will show error at the console
console.log(cashRegister.shoppingCart);