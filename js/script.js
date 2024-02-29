const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const letraGameOver = document.querySelector('.letraGameOver');
const btn = document.querySelector('.btn');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        letraGameOver.src = './images/game-over letra.png';
        btn.style.display = 'block';

        clearInterval(loop);
    }

}, 10);

btn.addEventListener('click', () =>{
    window.location.reload();
})

document.addEventListener('keydown', jump)