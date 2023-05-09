
class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };

    static SIZE_LARGE = {
        price: 100,
        calories: 40
    };

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    };

    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    };

    static STUFFING_MEAT = {
        price: 30,
        calories: 15
    };

    static TOPPING_SPICE = {
        price: 15,
        calories: 0
    };

    static TOPPING_SAUCE = {
        price: 20,
        calories: 5
    };

    constructor(size_burger, stuffing) {
        this.size = size_burger;
        this.stuffing = stuffing;
        this.topping = [];
        this.calories = this.size.calories + this.stuffing.calories;
        this.price = this.size.price + this.stuffing.price;
    }

    addTopping(topping) {
        this.topping.push(topping);
        this.price += topping.price;
        this.calories += topping.calories;
    }

    calculateCalories() {
        return this.calories;
    }

    calculatePrice() {
        return this.price;
    }
}


// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу (there is no mayonnaise topping, so I used the sauce topping instead)
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log("Price with spice: " + hamburger.calculatePrice());

