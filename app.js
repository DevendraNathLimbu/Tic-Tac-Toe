const boxes = document.querySelectorAll('.box');

let TurnO = true;

boxes.forEach(
    (box)=> {
     box.addEventListener('click', () => {
        if(TurnO == true){
            box.innerHTML = 'O';
          TurnO = false;
        }
        else{
            box.innerHTML = 'X';
            TurnO = true;
        }
        box.disabled = true;
        winner();
     });
    });

let WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

 const span = document.querySelector('span');

const winner = () => {
 for(let pattern of WinPatterns){
     let value1 = boxes[pattern[0]].innerText;
     let value2 = boxes[pattern[1]].innerText;
     let value3 = boxes[pattern[2]].innerText;
    
    if(value1 != '' && value2 != '' && value3 != ''){
         if(value1 == value2 && value1 == value3){
           span.innerHTML = value1 + ' Wins';
           span.style.color = 'green';
         }
    }
}
 }



