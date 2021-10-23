let result = 0;
let adition = 0;
let division = 0;
let subtraction = 0;
let multiplication = 0;
let percentage = 0;

//Display result of calculations
displayRes = () => {
    
    if (adition > 0){
      let num = parseInt(document.getElementById("result").innerHTML);
      result = num + result;  
    }
    
    if (subtraction > 0) {
      let num = parseInt(document.getElementById("result").innerHTML);
      result = result - num;
    }
    
    if (division > 0) {
      let num = parseInt(document.getElementById("result").innerHTML);
      result = result / num;
    }
    
    if (multiplication > 0) {
      let num = parseInt(document.getElementById("result").innerHTML);
      result = result * num;
    }

    
    document.getElementById("result").innerHTML = result;
    console.log(result);
    
    result = 0;
    adition = 0;
    subtraction = 0;
    division = 0;
    multiplication = 0;
    comma = 0;
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
let comma = 0;

funcComma = () => {
    let num = parseInt(document.getElementById("result").innerHTML);
    console.log(num);
    if (num == null || num ===0 || comma > 0){
    } else {
    document.getElementById("result").innerHTML += ",";
    comma++;
    }
}

//Display result of calculations
funcMultiplication = () => {
    let num = parseInt(document.getElementById("result").innerHTML);
    if (multiplication > 0) {
      result = result * num;
    } else {
      result = num;
    }
    
    console.log(result);
    acFunc();
    adition = 0;
    division = 0;
    multiplication = multiplication + 1;
    subtraction = 0;
}


//Display result of calculations
funcPlus = () => {
     let num = parseInt(document.getElementById("result").innerHTML);
     result = result + num;
     console.log(result);
     acFunc();
     adition = adition + 1;
     division = 0;
     multiplication = 0;
     subtraction = 0;
}

//Display result of calculations
funcMinus = () => {
    let num = parseInt(document.getElementById("result").innerHTML);
    result = num - result;
    console.log(result);
    acFunc();
    adition = 0;
    division = 0;
    multiplication = 0;
    subtraction = subtraction + 1;
}

//Calculation Division
funcDivision = () => {
    let num = parseInt(document.getElementById("result").innerHTML);
    if (division > 0){
      result = result / num;  
    } else {
      result = num;
    }
    
    console.log(result);
    acFunc();
    adition = 0;
    division = division + 1;
    multiplication = 0;
    subtraction = 0;
}