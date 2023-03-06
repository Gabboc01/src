var user = {
    age: 18,
    name: 'nome',
    surname: 'Cognome',

    sayHi: function() {
        console.log('ciao' + this.name + '!');
    }


};

user.sayHi();







function createUser(name, surname, age) {
    return {
        age,
        name,
        surname,
        sayHi: function() {
            console.log('ciao' + this.name + '!');
        }   
    }
};

var user = createUser('Paolino', 'paperino', 18);
console.log('ciao'+ user.name + '!');






function NewUser(name, surname, age) {                       //funzione costruttrice
        this.age = age;
        this.name= name;
        this.surname = surname;

        this.sayHi = (function() {
            console.log('ciao' + this.name + '!');    
            console.debug(this);
        }).bind(this);  
    

};

var user = new NewUser('maria' , 'mara' , 17);
console.log('ciao'+ user.name + '!');

























