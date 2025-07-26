
const input = document.getElementById("input");
const buttons = document.querySelectorAll(".button button");
let expression = "";
buttons.forEach(button =>{
  button.addEventListener("click",()=> {
    const value = button.textContent;
    if(value === "C"){
      expression="";
      input.value="";
    } else if(value === "="){
      try{
        const result = Function('"use strict";return('+expression+')')();
        input.value = result;
        expression = result.toString();
      } catch{
        input.value = "Error";
        expression="";
      }
      } else{
        expression += value;
        input.value=expression;
      }
    
  });
});

