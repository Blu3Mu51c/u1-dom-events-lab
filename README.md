<h1>
  <span class="prefix"></span>
  <span class="headline">DOM Events Lab</span>
</h1>

## About

This lab provides an opportunity to practice DOM manipulation by building a calculator in the browser.

![Calculator](./assets/calculator.png)


## Content

- [Setup](./setup/README.md)
- [Lab Exercise](./exercise/README.md)

## Deployed sites

🌐 [Live Example](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/dom-events-lab-solution/)



  EVIL CALCULATOR

const displayElement = document.querySelector('.display')
const buttonsElement = document.querySelectorAll('.button')

firstOperand = '';
operator = '';
secondOperand = '';
result='';

buttonsElement.forEach(button => {
   button.addEventListener('click', () => {
    const value = button.textContent;
        displayElement.textContent = value;
        if(value === 'C'){
            firstOperand='';
            operator='';
            secondOperand='';
            result='';
            displayElement.textContent = '';
        }
        else if(value === '='){
            if(firstOperand !== '' && operator !== '' && secondOperand !== ''){
                if(operator === '+'){
                    result = Number(firstOperand) + Number(secondOperand);
                }
                else if(operator === '-'){
                    result = Number(firstOperand) - Number(secondOperand);
                }
                else if(operator === '*'){
                    result = Number(firstOperand) * Number(secondOperand);
                }
                else if(operator === '/'){
                    result =  Number(firstOperand) ===0 ? "Error" : Number(firstOperand) / Number(secondOperand);
                }
                

                displayElement.textContent = result;
                firstOperand=result.toString();
                operator='';
                secondOperand='';
            }
        }
        else if(value === '+' || value === '-' || value === '*' || value ==='/' ){
            if (firstOperand !== '' && operator == ''){
                operator = value;
                displayElement.textContent = firstOperand + '  ' + operator;
            }
        }
        else{
            if(operator == ''){
                firstOperand += value;
                displayElement.textContent = firstOperand;
            }
            else{
                secondOperand +=value;
                displayElement.textContent = firstOperand + `  ` + operator + '  ' + secondOperand;
            }

        }


   })
})