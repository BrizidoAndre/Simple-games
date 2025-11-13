const gameContainer = document.querySelector('.game-container');
const pointLabel = document.getElementById('pointLabel');

const verticalPixelDifference = 15
const pixels = document.querySelectorAll('.game-container div');


let points = 0;
let snakeLength = 2;
let snakeDirection = 'right';
let snakePosition = 0;
function initializeGame(){

}
function finishGame(){};
function checkMovement(){};

function updateSnake(){};
function generateSnake(){

};
generateApple();
function generateApple(){
    let applePosition = Math.floor(Math.random()*254)

    console.log(applePosition)
    const currentPixel = pixels[applePosition]
    currentPixel[applePosition].classList.add('apple')

    // if(currentPixel.classList.contains('snake')){
    //     generateSnake()
    // }
    // else{
    //     currentPixel.classList.add('apple')
    // }
};
function renderApple(){};

function addPoints(){
    points ++;
    pointLabel.textContent = 'Points: ' + points;
};

pixels.forEach((pixel, index) => {
    pixel.addEventListener('click',()=>{
        console.log(index)
    })
})