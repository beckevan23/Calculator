function add(x, y) {return +x + +y};
function subtract(x, y) {return x - y};
function multiply(x, y) {return x * y};
function divide(x, y) {return x / y};

function operate(operator, x, y) {
    switch(operator) {
        case "+":
            array[0] = add(x, y);
            array.splice(1, 2)
            display.textContent = array.join(" ");
            break;
        case "-":
            array[0] = subtract(x, y);
            array.splice(1, 2)
            display.textContent = array.join(" ");
            break;
        case "x":
            array[0] = multiply(x, y);
            array.splice(1, 2)
            display.textContent = array.join(" ");
            break;
        case "/":
            array[0] = divide(x, y);
            array.splice(1, 2)
            display.textContent = array.join(" ");
            break;
        default:
            return "Error"
    };
};
let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll('button'));
let array;
buttons.forEach(button => button.addEventListener("click", function(){
    if (button.textContent == "0" || button.textContent == "1" ||
        button.textContent == "2" || button.textContent == "3" ||
        button.textContent == "4" || button.textContent == "5" ||
        button.textContent == "6" || button.textContent == "7" ||
        button.textContent == "8" || button.textContent == "9") {
            display.textContent += button.textContent;
    } else if (button.textContent == "x" || button.textContent == "-" ||
               button.textContent == "+" || button.textContent == "/") {
        display.textContent += " " + button.textContent + " ";
    } else if (button.textContent == "=") {
        array = display.textContent.split(" ");
        console.log(array)
        operate(array[1], array[0], array[2]);
    } else if (button.textContent == "c") {
        display.textContent = "";
    }
}))


