const watch = document.querySelector<HTMLDivElement>('#watch');
const startBtn = document.querySelector<HTMLButtonElement>('#start');
const pauseBtn = document.querySelector<HTMLButtonElement>('#pause');
const resetBtn = document.querySelector<HTMLButtonElement>('#reset');

let milliseconds = 0;
let timer: number;

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
