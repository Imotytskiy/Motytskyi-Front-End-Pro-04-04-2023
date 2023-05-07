const now = new Date();
const currentYear = now.getFullYear();

class Student {
    constructor(identity){
        this.name = identity.name;
        this.surname = identity.surname;
        this.birthYear = identity.birthYear;
        this.arrScore = new Array(25);
        this.bornYear = this.determinateAge(); 
        this.everageScore = this.summary();
    }

    determinateAge() {
        return currentYear - this.birthYear;
    }

    present(){
        const index = this.arrScore.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrScore[index] = true;
        }
        return this;
    }

    absent(){
        const index = this.arrScore.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrScore[index] = false;
        }
        return this;
    }

    summary() {
        const sum = this.arrScore.reduce((acc, curr) => acc + curr);
        const avg = sum / this.arrScore.length;

        if (avg >= 0.9) {
            return "Молодець";
        } else {
            return "Добре, але можна краще";
        }
    }
}

const firstStudent = new Student({
    name : "Adam",
    surname : "Smith",
    birthYear : 1985
});

const secondStudent = new Student({
    name : "Eva",
    surname : "Smith",
    birthYear : 1995
});

firstStudent
.absent().absent().absent().absent().absent()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present();

console.log(firstStudent.everageScore);
console.log(firstStudent.bornYear);

firstStudent
.absent().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present();

console.log(firstStudent.everageScore);
console.log(firstStudent.bornYear);