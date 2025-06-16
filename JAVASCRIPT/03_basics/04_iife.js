//Immediately Invoked Function Expressions (IIFE)

(function chai() {
  console.log('DB Connected');
  
})();

((name)  =>{
console.log(`DB Connected 2 ${name}`);

})("g")