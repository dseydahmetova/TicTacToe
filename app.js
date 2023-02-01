//You connect the four-color drives.
// To win Connect Four, you have to be the first player to get four of your colored checkers
// in a line either horizontally, vertically, or diagonally.
//onnect Four is available With A Grid
// 2 End Supports
// The board is seven columns long and six rows high.
// 21 Red Checkers And 21 Black Checkers
//Each player uses pieces of a specific color, usually black and red or sometimes yellow and red.
// If all the men have played and neither player has four parts in a row, the game is a tie.



let playerNameBtn = document.getElementById("playerNameBtn");
let playerName =  document.getElementById('playerName')
let container = document.getElementById('container')

let circleArr = []
// player2;




playerNameBtn.addEventListener('click', function(evt){
    let greeting = document.getElementById("greeting");
    greeting.innerHTML = `${playerName.value} is playing vs computer`;
    playerName.value = ''
})

for(let i = 0; i< 9; i++){
    const circle = document.createElement('div')
    circle.classList.add('circle')
    container.appendChild(circle)
    circleArr.push(circle)
}



class Player {

    static attack(){
        for(let i = 0; i< circleArr.length; i++){
           if(!circleArr[i].classList.contains('red') && !circleArr[i].classList.contains('yellow')){
            //if(!circleArr[i].classList.contains('yellow'))
            circleArr[Math.floor(Math.random()*circleArr.length)].classList.add('red')
           }
        
    }
}
}

class Opponent {

    static attack(){
        for(let i = 0; i< circleArr.length; i++){
           if(!circleArr[i].classList.contains('red')){
            if(!circleArr[i].classList.contains('yellow'))
            circleArr[Math.floor(Math.random()*circleArr.length)].classList.add('yellow')
           }
        
    }
}
}



const checkersList = document.querySelectorAll('.circle')

  checkersList.forEach(checker => {
    checker.addEventListener('click', (e) => {
        checker.classList.add('red')
        Opponent.attack()
    })
   
})


