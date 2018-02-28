'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }


class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}
class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    
    calculate() {
        let avg = this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
        if(avg >= 90 && avg <= 100){
            return "O"
        } else if(avg >= 80 && avg < 90){
            return "E";
        } else if(avg >= 70 && avg < 80){
            return "A";
        } else if(avg >= 55 && avg < 70){
            return "P";
        } else if(avg >= 40 && avg < 55){
            return "D";   
        } else if(avg >= 0 && avg < 40){
            return "T";
        } else {
            return "score average is invalid";
        }
        
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}