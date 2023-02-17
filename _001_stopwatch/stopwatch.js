const watch = document.querySelector('#watch');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

let milliseconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds += 10;
        const dateTimer = new Date(milliseconds);
        watch.innerHTML = dateTimer.toISOString().substr(11, 11);
    }, 10);
};

const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

const resetWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML = '00:00:00:00';
};

startBtn.addEventListener('click', startWatch);
pauseBtn.addEventListener('click', pauseWatch);
resetBtn.addEventListener('click', resetWatch);
