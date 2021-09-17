const tab = document.querySelector('table'),
      btnContainer = document.querySelectorAll('.btn'),
      redBtn = document.querySelector('.btn_red'),
      blueBtn = document.querySelector('.btn_blue'),
      greenBtn = document.querySelector('.btn_green'),
      yellowBtn = document.querySelector('.btn_yellow');

const side = 30;
      

let arr = new Array(side).fill().map(() => new Array(side).fill('0'));
// let result = [].concat(...arr);
let counter = 1;

  for (let i = 0; i < side; i++){
    const tr = document.createElement('tr');
    for (let j = 0; j < side; j++){
      const td = document.createElement('td');
      td.classList.add('t' + counter);
      // console.log(td.className);S
        counter++;
      tr.appendChild(td);

      function setColor (button, classColor) {
      button.addEventListener('click', () => {
        
          td.addEventListener('click', () => {
        if (!td.classList.contains(classColor)) {
          td.classList.remove('red');
          td.classList.remove('blue');
          td.classList.remove('green');
          td.classList.remove('yellow');

          td.classList.add(classColor);
        } else {
            td.classList.remove(classColor);
        } 
        });                
      });  
      }

      setColor(redBtn, 'red');
      setColor(blueBtn, 'blue');
      setColor(greenBtn, 'green');
      setColor(yellowBtn, 'yellow');

    }tab.appendChild(tr);
  }

console.log(arr);
console.log(counter);



