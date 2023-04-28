let ladder = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
    
};

const useAllSteps = (obj) => {
    for(const key in obj){
        if (key === "up") { 
            obj[key]();
        }
        if (typeof obj[key] === "function") {
            obj[key]();
        }
    }
}

useAllSteps(ladder);   // буквальное решении ladder.up().up().down().showStep(); // 1