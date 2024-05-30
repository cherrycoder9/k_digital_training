let timer = 0;
let timerID;
let stop = true;
// let timerID;

const 타이머시작 = () => {
    if (stop) {

        timerID = setInterval(
            () => {
                timer++; document.querySelector('#box1').innerHTML = timer;
            }, 300
        );
    };
    stop = false;
};

const 타이머중단 = () => {
    if (!stop) {
        clearInterval(timerID);
        stop = true;
    }
};