# Projects related to Events

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

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