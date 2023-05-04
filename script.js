
class Human {
    constructor(firstName, gender) {
        this.firstName = firstName;
        this.gender = gender;
    }
}

class Apartment {
        residents = [];

    addResident(human) {
        this.residents.push(human);
    }
}

class Building {
    constructor(quantity=1) {
        this.arrApartments = new Array(quantity);
    }

    addApartment(apartm) {
        const index = this.arrApartments.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrApartments[index] = apartm;
        } else {
            console.log("Вільних квартир не залишилося");
        }
    }
}

const firstHuman = new Human("Victor", "man");
const secondHuman = new Human("Lilu", "woman");
const thirdHuman = new Human("Ihor", "man");

const firstApart = new Apartment();
firstApart.addResident(firstHuman);
firstApart.addResident(secondHuman);

const secondApart = new Apartment();
secondApart.addResident(thirdHuman);

const firstBuilding = new Building(2); // зазначаємо кількість квартир не менше 1 (довжина массива)
firstBuilding.addApartment(firstApart);
firstBuilding.addApartment(secondApart);

console.log(firstBuilding);