const turn=document.querySelector('#turn')
const box= document.querySelectorAll('.box')
const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],]

var fullboxes=0

box.forEach(box => {
    box.addEventListener('mousedown',()=>{checkFill(box); checkWin()})
})
    
 

function checkFill(box) {
    if (box.innerText=='') {
        switch(turn.innerText){
            case 'X':
                box.setAttribute('class','clicked x')
                box.innerText=turn.innerText
                turn.innerText='O'
                turn.style.color='cyan'
            break;
            case 'O':
                box.setAttribute('class','clicked o')
                box.innerText=turn.innerText
                turn.innerText='X'
                turn.style.color='rgb(255, 56, 56)'
            break;
        }
        fullboxes++
        if (fullboxes==9 && checkWin()==false) {
            document.body.innerHTML+='<div class="gameOver">GAME OVER</div>'
        }
    }
}

function checkWin() {
    for (let i = 0; i < patterns.length; i++) {
        if (box[patterns[i][0]].innerHTML===box[patterns[i][1]].innerHTML && box[patterns[i][0]].innerHTML===box[patterns[i][2]].innerHTML && box[patterns[i][0]].innerHTML!='') {
            var winner= box[patterns[i][0]].innerHTML
            document.body.innerHTML+='<div class="win"> '+winner+' Wins!! </div>'  
            return true  
        }
    }
    return false
}