// Step 1: Set up the object
const cashRegister = {
    itemsForSale: {
        Phone: 300,
        "Smart TV": 220,
        "Gaming Console": 150
    },
    shoppingCart: [],

    // Step 2: Add the addItem method
    addItem(itemName) {
        if (this.itemsForSale[itemName]) {
            this.shoppingCart.push(itemName);
            console.log(`${itemName} has been added to your cart.`);
        } else {
            console.log(`Sorry, we don't sell ${itemName}.`);
        }
    },

    // Step 3: Add the calculateTotalPrice method
    calculateTotalPrice() {
        let total = 0;
        for (let item of this.shoppingCart) {
            total += this.itemsForSale[item];
        }

        if (total > 400) {
            console.log("A 10% discount has been applied!");
            total *= 0.9;
        }

        console.log(`Total price: $${total}`);
        return total;
    },

    // Step 4: Add the pay method
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

// Step 5: Test the program
cashRegister.addItem("Phone");
cashRegister.addItem("Smart TV");
cashRegister.addItem("Book"); // not available
cashRegister.calculateTotalPrice();
cashRegister.pay(500); // enough money
cashRegister.pay(300); // not enough money
