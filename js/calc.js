
//TODO: test for mobile responsiveness

var total = 0;
var expArr = [0];

$(".number").click(function(){
  
  var input = $(this).text();
  
  if(expArr[expArr.length-1] == "0")
    expArr[expArr.length-1] = input;
  else if(isNaN(expArr[expArr.length-1]) && 
          expArr[expArr.length-1] != ".")
    expArr.push(input);
  else
    expArr[expArr.length-1] += input;
  
  //display
  $("#charDisplay").text(expArr[expArr.length-1]);
  $("#expression").text(expArr.join(""));
  
  console.log(expArr);
});

$(".operation").click(function(){

  var operation = $(this).text();
  console.log(operation);
  
  // add previous value to array
  var lastInput = expArr[expArr.length-1];
  if(lastInput == 0 && expArr.length == 1)
    return;
  else if(lastInput == "+" ||
         lastInput == "-" ||
         lastInput == "/" ||
         lastInput == "x")
    expArr[expArr.length-1] = operation;  
  else
    expArr.push(operation);  
  
  // display
  $("#charDisplay").text(expArr[expArr.length-1]);
  $("#expression").text(expArr.join(""));
  console.log(expArr);
 
});

$("#allClear").click(function(){
  
  // reset expression array
  expArr = [0]; 
  // display
  $("#charDisplay").text("0");
  $("#expression").text(expArr.join(""));
  
});

$("#clearEntry").click(function(){
  
  //remove last value from expArr
  expArr.pop();
  
  // display
  $("#charDisplay").text("0");
  $("#expression").text(expArr.join(""));
  console.log(expArr);
  
});

$("#equals").click(function(){
  
  var result = 0;
  var expression = expArr.join("");
  
  expression = expression.replace(/x/g,"*");
  
  result = eval(expression);
  expArr.push("="+result);
  
  
  // display
  $("#charDisplay").text(result);
  $("#expression").text(expArr.join(""));
  
  // reset expression
  expArr = [0];
});