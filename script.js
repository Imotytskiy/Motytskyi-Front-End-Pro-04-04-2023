const now = new Date();
const currentYear = now.getFullYear();

class Student {
    constructor(identity){
        this.name = identity.name;
        this.surname = identity.surname;
        this.birthYear = identity.birthYear;
        this.arrScore = identity.arrScore;                       // масив з оцінками, це також властивість
        this.arrVisit = new Array(25);                          // у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів                                  
        this.bornYear = this.determinateAge(); 
        this.everageScore = this.summary();
    }

    determinateAge() {
        return currentYear - this.birthYear;
    }

    present(){
        const index = this.arrVisit.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrVisit[index] = true;
        }
        return this;
    }

    absent(){
        const index = this.arrVisit.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrVisit[index] = false;
        }
        return this;
    }

    summary() {
        const sum = this.arrVisit.reduce((acc, curr) => acc + (curr ? 1 : 0),0);   // undefined не рахую 
        const avg = sum / this.arrVisit.length;

        const sumScore = this.arrScore.reduce((acc, curr) => acc + (curr ? 1 : 0),0);   // undefined не рахую 
        const avgScore = sumScore / this.arrScore.length;

        if (avg >= 0.9 && avgScore >= 90) {                       
            return "Молодець";
        }else if (avg >= 0.9 && avgScore < 90 || avg < 0.9 && avgScore > 90) {
            return "Добре, але можна краще";
        }else{
            return "Редиска";
        }
    }
}



const firstStudent = new Student({
    name : "Adam",
    surname : "Smith",
    birthYear : 1985,
    arrScore : [90,91,92,90,95]
});

const secondStudent = new Student({
    name : "Eva",
    surname : "Smith",
    birthYear : 1995,
    arrScore : [80,70,60,89,50]
});

const thirdStudent = new Student({
    name : "Steven",
    surname : "Gates",
    birthYear : 1995,
    arrScore : [80,70,60,89,50]
});


firstStudent
.absent().absent().absent().absent().absent()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present();

console.log(firstStudent.summary());
console.log(firstStudent.bornYear);

secondStudent
.absent().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present();

console.log(firstStudent.summary());
console.log(firstStudent.bornYear);

thirdStudent
.absent().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present()
.present().present().present().present().present();

console.log(firstStudent.summary());
console.log(firstStudent.bornYear);