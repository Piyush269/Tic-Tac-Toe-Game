let boxes = document.querySelectorAll(".box");
let turnO = true;
let newGameBtn = document.querySelector(".new-game");
let resetGameBtn = document.querySelector(".reset-btn");
let count = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO){
            box.innerText = "O"
            turnO = false;
            box.disabled = "true";
        }
        else{
            box.innerText = "X"
            turnO = true;
            box.disabled = "true";
        }
        count++;
        checkWin()
        if(count === 9 && !checkWin()){
            draw();
        }
    })
});

function checkWin(){
    winPattern.forEach((pattern) => {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        } 
    })
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

function showWinner(winner){
    document.querySelector(".winner-txt").innerText = `winner is ${winner}`;
    document.querySelector(".winner").classList.remove("hidden");
}

newGameBtn.addEventListener("click", () => {
    document.querySelector(".winner").classList.add("hidden");
    enableBoxes();
    count = 0;
});

resetGameBtn.addEventListener("click", () => {
    enableBoxes();
    count = 0;
});

function draw(){
    document.querySelector(".winner-txt").innerText = `Ops! Game is Draw`;
    document.querySelector(".winner").classList.remove("hidden");
}

