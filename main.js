//Display result of calculations
displayRes = (resultCal) => {
    document.getElementById("result").innerHTML = resultCal; 
}

//Clean textarea tag
acFunc = () => {
    document.getElementById("result").innerHTML = "";
}

//Change the value of a number, negative or positive
plusMinusFunc = () => {
    let num = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = num * -1;
}

//calculate the result acording to percentage
percentageFunc = (num, numPerc) => {
    //some code here 
}

//Display number 0
func0 = () => {
    document.getElementById("result").innerHTML += 0; 
}

//Display number 1
func1 = () => {
    document.getElementById("result").innerHTML += 1;
}
//Display  number 2
func2 = () => {''
    document.getElementById("result").innerHTML += 2; 
}

//Display  number 3
func3 = () => {
    document.getElementById("result").innerHTML += 3; 
}

//Display result of calculations
func4 = () => {
    document.getElementById("result").innerHTML += 4; 
}

//Display result of calculations
func5 = () => {
    document.getElementById("result").innerHTML += 5; 
}

//Display result of calculations
func6 = () => {
    document.getElementById("result").innerHTML += 6; 
}

//Display result of calculations
func7 = () => {
    document.getElementById("result").innerHTML += 7; 
}

//Display result of calculations
func8 = () => {
    document.getElementById("result").innerHTML += 8; 
}

//Display result of calculations
func9 = () => {
    document.getElementById("result").innerHTML += 9; 
}

//Display result of calculations
funcComma = (num, numPerc) => {
    //some code here 
}

//Display result of calculations
funcEqual = (num, numPerc) => {
    //some code here 
}

let result = 0;
//Display result of calculations
funcPlus = () => {
     let num = parseInt(document.getElementById("result").innerHTML);
     result = num + result;
     document.getElementById("result").innerHTML = result;
     console.log(result);
     acFunc();
}

//Display result of calculations
funcMinus = (num, numPerc) => {
    //some code here 
}

//Display result of calculations
funcDivision = (num, numPerc) => {
    //some code here 
}