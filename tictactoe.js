const btns = document.querySelectorAll(".box");
const again = document.querySelector("#again");
const turn = document.querySelector(".turn");
const winning = document.querySelector(".winning");
let player = 'o';
let test = 1;

const win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
let moves = {
    'o': [],
    'x': []
};

function checkWinner(playerMoves) {
    for (let i = 0; i < win.length; i++) {
        const [a, b, c] = win[i];
        if (playerMoves.includes(a) && playerMoves.includes(b) && playerMoves.includes(c)) {
            test = 0;
            winning.textContent = player + ' has won the game';
            return;
        }
    }
}

function restartGame() {
    btns.forEach(bt => {
        bt.addEventListener('click', () => {
            if (test === 0) return;

            const index = Number(bt.getAttribute("index"));

            if (player === 'o' && bt.innerHTML === "") {
                bt.innerHTML = `<img src='./o.png'>`;
                moves['o'].push(index);
                checkWinner(moves['o']);
                if (test === 0) {
                    winning.textContent = player + ' has won the game';
                } else {
                    player = 'x';
                    turn.textContent = "X's turn";
                }
            } else if (player === 'x' && bt.innerHTML === "") {
                bt.innerHTML = `<img src='./x.png'>`;
                moves['x'].push(index);
                checkWinner(moves['x']);
                if (test === 0) {
                    winning.textContent = player + ' has won the game';
                } else {
                    player = 'o';
                    turn.textContent = "O's turn";
                }
            }
        });
    });
}

restartGame();

again.addEventListener('click', () => {
    btns.forEach(btn => {
        btn.innerHTML = "";
    });

    moves = {
        'o': [],
        'x': []
    };

    player = 'o';
    test = 1;
    winning.textContent = "";
    turn.textContent = "X's turn";
});
