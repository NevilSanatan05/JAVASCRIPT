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