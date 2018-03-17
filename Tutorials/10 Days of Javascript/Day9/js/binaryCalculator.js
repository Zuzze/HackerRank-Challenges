/**
 * Calculates basic operations for two binary numbers
 * In instructions result is used as part of the number after "=" sign is pressed unlike in normal calculators 
 */
class BinaryCalculator {
    constructor() {
        this.screenText = ''   
    }

    //general click handler
    click(event) {
        let btnText = event.target.innerHTML;
        switch (btnText) {
            case 'C':
                this.clear();
                break;
            case '=':
                this.equals();
                break;
            default:
                this.addTextToScreen(btnText)
        } 
    }

    clear() {
        this.screenText = '';
        this.updateScreenHTML();
    }

    /**Calculates operations with two binary numbers */
    equals() {
        //1 or more (+) decimals (\d) globally (flag /g) to find all operand instances
        //operands (=binary numbers) are put into a list using .match()
        const operandRegex = /\d+/g
        //operators "+", "-", "*", OR (|) "/"
        //all of these except "-" requires escape character "\" because they have another meaning in regex
        const operatorRegex = /(\+|-|\*|\/)/
        
        //Operands to decimals from binary
        //parseInt(number, radix=base=binary=2)
        let operand1 = parseInt(res.innerHTML.match(operandRegex)[0],2);
        let operand2 = parseInt(res.innerHTML.match(operandRegex)[1],2);

        let operator = res.innerHTML.match(operatorRegex)[0];
        
        let result = "";
        switch(operator){
            case "+":
            result = operand1+operand2; 
                break;
            case "-":
                result = operand1-operand2;
                break;
            case "*":
                result = operand1*operand2;
                break;
            case "/":
                result = operand1/operand2;
                break;
        }

        //Result back to binary
        //numObj.tostring(radix=2)
        this.screenText = result.toString(2);    
        this.updateScreenHTML();
    }

    addTextToScreen(textToAdd){
        if(textToAdd == '0' && this.screenText !== ''){
            this.screenText += textToAdd;
        } else {
            this.screenText += textToAdd;
        }
        this.updateScreenHTML();
    }

    updateScreenHTML(){
        document.getElementById('res').innerHTML = this.screenText;
    }
}

const calculator = new BinaryCalculator();