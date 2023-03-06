class Calculator {
    #_display;

    constructor(){
        this.#_display = 0;
    }

    get display(){
        return this.#_display;
    }

    reset(){
        this.#_display = 0;
    }

    sum(num1, num2){
        return this.#_display = num1 + num2;
    }

    minus(num1, num2){
        return this.#_display = num1 - num2;
    }

    multiplier(num1, num2){
        return this.#_display = num1 * num2;
    }

    divider(num1, num2){
        return this.#_display = num1 / num2;
    }
};

const calc = new Calculator();
calc.sum(3,3);
console.debug(calc.display)

