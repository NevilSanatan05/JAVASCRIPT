let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let pink = document.getElementById("pink");
let reset = document.getElementById("reset");

red.addEventListener("click",()=>{
  document.body.style.backgroundColor = "red";

})

blue.addEventListener("click",()=>{
  document.body.style.backgroundColor = "blue";
})

green.addEventListener("click",()=>{
  document.body.style.backgroundColor = "green";
})

yellow.addEventListener("click",()=>{
  document.body.style.backgroundColor = "yellow";
})

pink.addEventListener("click",()=>{
  document.body.style.backgroundColor = "pink";
});

reset.addEventListener("click",()=>{
  document.body.style.backgroundColor = "#f0f0f0"; // Reset to default color
})