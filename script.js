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
addItem(itemName) {
        if (this.itemsForSale[itemName]) {
            this.shoppingCart.push(itemName);
            console.log(`${itemName} has been added to your cart.`);
        } else {
            console.log(`Sorry, we don't sell ${itemName}.`);
        }
    },

//Step3- Add the CalculateTotalPrice- (we will use loop to calculate the the toal)
calculateTotalPrice() {
    let total = 0;
    for (let item of this.shoppingCart) {
        total += this.itemsForSale[item];
    }
    //applying discount if total > 400
    if (total > 400) {
        console.log("A 10% discount has been applied!");
        total *= 0.9;
    }
    console.log('Total price: $${total}');
}

//Step 4
//This adding the pay method (This handles customer payment)
pay(paymentAmount) {
        let total = this.calculateTotalPrice();

        if (paymentAmount >= total) {
            let change = paymentAmount - total;
            console.log("Thank you for your purchase!");
            if (change > 0) {
                console.log(`Your change is $${change.toFixed(2)}.`);
            }
        } else {
            let shortage = total - paymentAmount;
            console.log(`You don't have enough money. You need $${shortage.toFixed(2)} more.`);
        }
    }
};
//Testing function at console
cashRegister.pay(500); //enough money
cashRegister.pay(300); //not enough money