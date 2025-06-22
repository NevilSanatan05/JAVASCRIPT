# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

## Project Solution Code -1

```
const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')
buttons.forEach(function(button){
button.addEventListener('click',function(e){
  if(e.target.id === "grey"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "white"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id
  }
})
})
```



## Project Solution Code -2
```
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height===''||height<0||isNaN(height)){
  results.innerHTML = `Please give me a valid height ${height}`
};
if(weight===''||weight<0||isNaN(weight)){
  results.innerHTML = `Please give me a valid weight ${weight}`
}
else{
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  
results.innerHTML=`<span>${bmi}</span>`
}
});
```

## Project Solution Code - 3
```
const clock = document.getElementById('clock');
setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

## Project Solution Code -5
```
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
<div class='color'>
<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}y</td>
  </tr>
 
</table>
</div>
`;
});
```

## Project Solution Code -6
```


const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId
const startChangingColor = function () {
  if(!intervalId){
  IntervalId =  setInterval(changeBgColor, 1000);}
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
   
  }
};
const stopChangingColor = function () {
  clearInterval(IntervalId)
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```