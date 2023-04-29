
    //  ВАРИАНТ 1 

// let step = 0; // делаем глобальной window.step

// let ladder = {
//     up: function () {
//        step++;
//        return this;
//     },
//     down: function () {
//        step--;
//        return this;
//     },
//     showStep: function () {
//         alert(step);
//     }
// };
// ladder.up().up().down().showStep();

let ladder = {
    step: 0,
    up: function () {
        // ladder.step++;
        this.step++;    
        return this;
    },
    down: function () {
        // ladder.step--;
        this.step--;
        return this;
        
    },
    showStep: function () {
        alert(this.step);
        // return this;
    }
};
ladder.up().up().down().showStep();


// let ladder = {
//     step: 0,
//     up: function () {
//         this.step++;
//     },
//     down: function () {
//         this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
    
// };

// const useAllSteps = (obj) => {
//     for(const key in obj){
//         if (key === "up") { 
//             obj[key]();
//         }
//         if (typeof obj[key] === "function") {
//             obj[key]();
//         }
//     }
// }

// useAllSteps(ladder);   // буквальное решении ladder.up().up().down().showStep(); // 1