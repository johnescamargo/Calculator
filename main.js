//Global attributes
let result = 0;
let resPercent = 0;
let percent = 0;
let resultDisplay = "";

let adition = false;
let division = false;
let subtraction = false;
let multiplication = false;
let percentage = false;

//Cleaning up text tag
acFunc = () => {
    document.getElementById("result").innerHTML = "";
    document.getElementById("resultDisplay").innerHTML = "";
    resultDisplay = "";
}

//Change the value of a number, negative or positive
plusMinusFunc = () => {
    let num = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = num * -1;
}

//Calculating the percentage acoording to first number typed
percentageFunc = () => {
    percent = document.getElementById("result").innerHTML;
    resPercent = (result * percent) / 100;
    percentage = true;
}

//Displaying number 0
func0 = () => {
    document.getElementById("result").innerHTML += 0;
}

//Displaying number 1
func1 = () => {
    document.getElementById("result").innerHTML += 1;
}
//Displaying  number 2
func2 = () => {
    document.getElementById("result").innerHTML += 2;
}

//Displaying  number 3
func3 = () => {
    document.getElementById("result").innerHTML += 3;
}

//Displaying  number 4
func4 = () => {
    document.getElementById("result").innerHTML += 4;
}

//Displaying  number 5
func5 = () => {
    document.getElementById("result").innerHTML += 5;
}

//Displaying  number 6
func6 = () => {
    document.getElementById("result").innerHTML += 6;
}

//Displaying  number 7
func7 = () => {
    document.getElementById("result").innerHTML += 7;
}

//Displaying  number 8
func8 = () => {
    document.getElementById("result").innerHTML += 8;
}

//Displaying  number 9
func9 = () => {
    document.getElementById("result").innerHTML += 9;
}



//Displaying result of calculations
displayRes = () => {

    if (percentage == false) {

        if (adition == true) {
            let num = parseFloat(document.getElementById("result").innerHTML);
            result = num + result;
            resultDisplay = resultDisplay + num + " = " + result;
        }

        if (subtraction == true) {
            let num = parseFloat(document.getElementById("result").innerHTML);
            result = result - num;
            resultDisplay = resultDisplay + num + " = " + result;
        }

        if (division == true) {
            let num = parseFloat(document.getElementById("result").innerHTML);
            result = result / num;
            resultDisplay = resultDisplay + num + " = " + result;
        }

        if (multiplication == true) {
            let num = parseFloat(document.getElementById("result").innerHTML);
            result = result * num;
            resultDisplay = resultDisplay + num + " = " + result;
        }

    } else {

        if (adition == true) {
            result = result + resPercent;
            resultDisplay = resultDisplay + percent + "% " + 
            "(" + resPercent + ")" + " = " + result;
        }

        if (subtraction == true) {
            result = result - resPercent;
            resultDisplay = resultDisplay + percent + "% " +
             "(" + resPercent + ")" + " = " + result;
        }

        if (division == true) {
            result = result / resPercent;
            resultDisplay = resultDisplay + percent + "% " +
             "(" + resPercent + ")" + " = " + result;
        }

        if (multiplication == true) {
            result = result * resPercent;
            resultDisplay = resultDisplay + percent + "% " +
             "(" + resPercent + ")" + " = " + result;
        }
    }


    document.getElementById("result").innerHTML = result;
    document.getElementById("resultDisplay").innerHTML = resultDisplay;

    //Erasing all attributes
    result = 0;
    percent = 0;

    adition = false;
    subtraction = false;
    division = false;
    multiplication = false;
    percentage = false;
}

//Adding DOT to a number
funcComma = () => {
    let num = document.getElementById("result").innerHTML;
    if (num.includes(".")) {
    } else {
        document.getElementById("result").innerHTML += ".";
    }

}

//Calcutation Times
funcTimes = () => {
    let num = parseFloat(document.getElementById("result").innerHTML);

    if (multiplication > 0) {
        result = result * num;
    } else {
        result = num;
    }

    acFunc();
    adition = false;
    division = false;
    multiplication = true;
    subtraction = false;

    resultDisplay = document.getElementById("resultDisplay").innerHTML = num + " x ";
}


//Calculation Plus
funcPlus = () => {
    let num = parseFloat(document.getElementById("result").innerHTML);
    result = result + num;
    acFunc();
    adition = true;
    division = false;
    multiplication = false;
    subtraction = false;

    resultDisplay = document.getElementById("resultDisplay").innerHTML = num + " + ";
}

//Calculation Minus
funcMinus = () => {
    let num = parseFloat(document.getElementById("result").innerHTML);
    result = num - result;
    acFunc();
    adition = false;
    division = false;
    multiplication = false;
    subtraction = true;

    resultDisplay = document.getElementById("resultDisplay").innerHTML = num + " - ";
}

//Calculation Division
funcDivision = () => {
    let num = parseFloat(document.getElementById("result").innerHTML);
    if (division > 0) {
        result = result / num;
    } else {
        result = num;
    }

    acFunc();
    adition = false;
    division = true;
    multiplication = false;
    subtraction = false;

    resultDisplay = document.getElementById("resultDisplay").innerHTML = num + " ÷ ";
}