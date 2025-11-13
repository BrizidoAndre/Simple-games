
const blocks = document.querySelectorAll('.game-box');
const text = document.getElementById('signal')
const resetBtn = document.getElementById('resetBtn');
let playerTurn = 'X'
text.textContent = playerTurn + "'s turn";
let finished = false;

const winningPositions = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
]

let values = ['','','','','','','','','']



blocks.forEach((block, index)=>{
    block.addEventListener('click',()=>{
        handleUpdate(block, index)
    })
})


function handleUpdate(element,index){
    if(finished || element.textContent !== ''){
        return null;
    }
    element.textContent = playerTurn;
    values[index] = playerTurn;
    verifyWinner()
}

function changePlayer(){
    if(finished){
        return null;
    }
    playerTurn = playerTurn === 'X' ? 'O': 'X';
    text.textContent  = `${playerTurn}'s turn`
}


function verifyWinner(){
    for (let i = 0; i < winningPositions.length; i++) {
        let winningPosition = winningPositions[i]
        let groupA = winningPosition[0]
        let groupB = winningPosition[1]
        let groupC = winningPosition[2]

        if(values[groupA] === '' || values[groupB] === '' || values[groupC] === ''){
            continue;
        }

        if(values[groupA] === values[groupB] && values[groupB] === values[groupC]){
            win();
            break;
        }
    }


    if(!values.includes('')){
        text.textContent = "It's a draw";
        finished = true;
    }

    changePlayer()
}


function win(){
    text.textContent = playerTurn + "'s won";
   finished = true;
   return false
}

resetBtn.addEventListener('click',()=>{
    blocks.forEach((item, index)=> {
        item.textContent = ''
        values[index] = ''
    })
    playerTurn = 'X'
    text.textContent  = `${playerTurn}'s turn`
    finished = false;
})