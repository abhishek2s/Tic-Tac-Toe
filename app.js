// selecting the boxes and containers through class and Id name

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-msg");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //for getting players turn

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// for resetting the game

const resetGame = () => {
  turnO = true;
  enableboxes();
  msgContainer.classList.add("hide");
};

// for getting response when clicking the boxes and turn of the player

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      //player 1 turn
      box.innerText = "O";
      turnO = false;
    } else {
      //player 2 turn
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

// disable boxes

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//enable boxes

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const ShowWinner = (winner) => {
  msg.innerText = `Congratulation, Winner  is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
  enableboxes();
};

// for checking the condition for winning the game

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        ShowWinner(pos2Val);
      }
    }
  }
};

//for resetting the game through New Game and Reset Game button

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
