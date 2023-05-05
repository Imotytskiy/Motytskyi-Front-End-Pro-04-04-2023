
class Human {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    outputInfo() {
        return (console.log(`ім'я ${this.firstName} вік ${this.age} власник автомобіля`));
    }
}


class Car {
    carOwner=null;
    constructor(options){                         // больше 3-х аргументов передадим обьектом
        this.carBrand = options.carBrand;
        this.carModel = options.carModel;
        this.carYearProduce = options.carYearProduce;
        this.carPlat = options.carPlate;
    }
    saveHuman(human){
        if (human.age > 18){
            this.carOwner = human;
            console.log(`${this.carBrand}, модель ${this.carModel}, рік випуску ${this.carYearProduce}, номер ${this.carPlat}`); 
            human.outputInfo();
        } else {
        console.log(`${human.firstName} менше 18 років`);
        }
    }
}


const firstHuman = new Human ("Eva", 17);
const secondHuman = new Human ( "Adam", 19);

const firstCar = new Car({
    carBrand: 'Toyota',
    carModel: 'Camry',
    carYearProduce: 2021,
    carPlate: 'OA3123AA',
});

const secondCar = new Car({
    carBrand: 'Kis',
    carModel: 'Sportage',
    carYearProduce: 2013,
    carPlate: 'AB123AB',
});


firstCar.saveHuman(secondHuman);

// secondCar.saveHuman(firstHuman);
