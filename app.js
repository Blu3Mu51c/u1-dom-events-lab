/*-------------------------------- Constants --------------------------------*/

const display = document.querySelector(".display"); //gets display element from index.html
const buttons = document.querySelectorAll(".button"); //gets buttons elements from index.html

/*-------------------------------- Variables --------------------------------*/

let userInput = ""; //single variable that is for user input
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


buttons.forEach(button => { //ForEach loop to get all the buttons inside all blocks
    button.addEventListener('click',() => { //Event listener that listens to when button is clicked
        
/*-------------------------------- Functions --------------------------------*/

        
        const value= button.textContent; //value that will take the number element from button

        if(value === 'C'){ //if statement that checks if C is pressed and if it is clears all input from display
            userInput = ''
            display.textContent = userInput;
        }
        else if
        (value === '='){ //else if statement that uses eval() method to do all the arithmatic operations in the chosen by user
            const result = eval(userInput);
            display.textContent = result;
            userInput = result.toString(); //the result of calculation stored in string to be reused in the next calculation unless user wants to reset using C
        }
        else{
            userInput = userInput+value; //All it does is allow multiple values to be added onto the display until the else if statement runs
            display.textContent = userInput;
        }
    })
})
