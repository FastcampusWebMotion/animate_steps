const btn = document.querySelector('button');
const box = document.querySelector('#box');
const speed = 1000;
let num = 0;
let startTime = null;

btn.addEventListener('click', e=>{
    requestAnimationFrame(move);
    startTime= performance.now();
})

function move(time){
    let timeLast = time - startTime;
    let progress = timeLast/speed;
    if(progress < 1){
        requestAnimationFrame(move);
        console.log(num++);
        console.log(progress);
    }
}