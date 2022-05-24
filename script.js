function add(x, y) {return +x + +y};
function subtract(x, y) {return x - y};
function multiply(x, y) {return x * y};
function divide(x, y) {return x / y};

function operate(operator, x, y) {
    switch(operator) {
        case "+":
            array[1] = add(x, y);
            display.textContent = array[1].toFixed(2);
            array[3] = undefined;
            break;
        case "-":
            array[1] = subtract(x, y);
            display.textContent = array[1].toFixed(2);
            array[3] = undefined;
            break;
        case "x":
            array[1] = multiply(x, y);
            display.textContent = array[1].toFixed(2);
            array[3] = undefined;
            break;
        case "/":
            array[1] = divide(x, y);
            display.textContent = array[1].toFixed(2);
            array[3] = undefined;
            break;
        default:
            return "Error"
    };
};
let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll('button'));
let array = [0];
buttons.forEach(button => button.addEventListener("click", function(){
    if (button.textContent == "0" || button.textContent == "1" ||
        button.textContent == "2" || button.textContent == "3" ||
        button.textContent == "4" || button.textContent == "5" ||
        button.textContent == "6" || button.textContent == "7" ||
        button.textContent == "8" || button.textContent == "9") {
            if (!array[2]) {
                display.textContent += button.textContent;
            }
            if (!array[3]) {
            array[1] = display.textContent;
            }
            if (array[2]) {
                if (array[3] == undefined) {
                    display.textContent = ""
                    array[3] = ""
                }
                display.textContent += button.textContent;
                array[3] = display.textContent
                
            }
        } else if (button.textContent == "x" || button.textContent == "-" ||
        button.textContent == "+" || button.textContent == "/") {
            if (array[3]){
            operate(array[2], array[1], array[3])
        }
            array[2] = button.textContent
            if (!array[2]) {
                array[2] = button.textContent;
            }
    } else if (button.textContent == "=") {
        operate(array[2], array[1], array[3]);
    } else if (button.textContent == "c") {
        display.textContent = "";
        array = [];
    }
}))



