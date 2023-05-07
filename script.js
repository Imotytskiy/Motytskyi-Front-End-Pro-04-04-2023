
const now = new Date();
const currentYear = now.getFullYear();

class Student {
    constructor(identity){
        this.name = identity.name;
        this.surname = identity.surname;
        this.birthYear = identity.birthYear;
        this.arrScore = new Array(25);                    // масив з оцінками, це також властивість, є масив 25 довжиною
        this.bornYear = this.determinateAge(); 
        this.everageScore = this.summary();
    }


    determinateAge() {                                    // вік студента метод
        return currentYear - this.birthYear;
    }

    present(){
        const index = this.arrScore.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrScore[index]= true;
        // } else {
        //     console.log("Використані всі 25");
        }

    }

    absent(){
        const index = this.arrScore.findIndex((element) => element === undefined); 
        if (index !== -1) {
            this.arrScore[index] = false;
        // } else {
        //     console.log("Використані всі 25");
        }
    }

        summary() {                                                            // середній бал метод  90% від 25 дорівнює 22.5 округлюємо
            const sum = this.arrScore.reduce((acc, curr) => acc + curr);
            switch(true) {
              case (Math.round((sum / this.arrScore.length) * 25) <= 0.9 ):
                return "Молодець";
              case (Math.round((sum / this.arrScore.length) * 25) > 0.9 ):
                return "Добре, але можна краще ";
              default:
                return "Error";
            }
      }
}

const firstStudent = new Student({
    name : "Adam",
    surname : "Smith",
    birthYear : 1985
});
