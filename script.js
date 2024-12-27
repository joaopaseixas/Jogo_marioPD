<<<<<<< HEAD
const mario= document.querySelector('.mario');
const pipe= document.querySelector('.pipe');

const jump= () =>{
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(()=>{

    console.log("loop");
    

    const pipePosition= pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px','');


    if(pipePosition <= 120 && pipePosition >0 && marioPosition <80){
        pipe.style.animation= 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation= 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
        alert("GameOver")
    }

},10);

=======
const mario= document.querySelector('.mario');
const pipe= document.querySelector('.pipe');

const jump= () =>{
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(()=>{

    console.log("loop");
    

    const pipePosition= pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px','');


    if(pipePosition <= 120 && pipePosition >0 && marioPosition <80){
        pipe.style.animation= 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation= 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
        alert("GameOver")
    }

},10);

>>>>>>> a0aba50275fd83b42f3e7acc58f619a7bfad1586
document.addEventListener('keydown', jump)