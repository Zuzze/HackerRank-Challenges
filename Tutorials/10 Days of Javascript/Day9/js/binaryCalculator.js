class Calculator {
    constructor() {
        this.screenText = ''   
        this.operators = {
            '+' : (a,b) => a+b,
            '-' : (a,b) => a-b,
            '*' : (a,b) => a*b,
            '/' : (a,b) => (a-a%b)/b
        }; 
    }

    //general click handler
    click(event) {
        console.log(event.target.id);
        let btnText = event.target.innerHTML;
        switch (btnText) {
            case 'C':
                this.clear();
                break;
            case '=':
                this.equals();
                break;
            case '0':
                if(this.screenText !== ''){
                    btnText = '0';
                }
                break;
            case '1':
                btnText = '1';
                break;
            default:
                
        }
    this.updateScreen()
        if (event.target.id === 'C') { 
            
        } else if (event.target.innerText === '=') {
            this.equals(); 
        } else if (event.target.innerText){
            //chars that are added to screen: 0, 1, -, *, /, +
            let btnText = event.target.innerText;
            if(this.btnText == 0 || this.btnText){

            }
            let trailingnum = this.screenText[this.value.length-1];
            

            if (btnText == 1 || !Number.isNaN(trailingnum))
                this.screenText += btnText;
                console.log(this.value);
        }
       
    }

    clear() {
        this.value = '';
    }

    equals() {
        let exp = '+' + this.screenText;
        let rex = /[^\d]\d+/g, parsed = [], m;
        
        while (m = rex.exec(exp)) {
            parsed.push(m[0]);
        }
        
        let r = parsed.reduce((result, op) => {
           let operator = op[0];
           let operand = parseInt(op.substr(1), 2);
           return this.operators[operator](result, operand);
        }, 0);
        
        this.value = r.toString(2);
    }

    updateScreen(text){
        document.getElementById('res').innerHTML = text;
    }
}

const calculator = new Calculator();