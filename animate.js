const btn = document.querySelector('button');
const box = document.querySelector('#box');
let num = 0;
let startTime = null;

btn.addEventListener('click', e=>{
    requestAnimationFrame(move);
    startTime= performance.now();
})

function move(time){
    let timeLast = time - startTime;
    if(num < 100){
        num++;        
        requestAnimationFrame(move);
        console.log(`반복횟수: ${num}`);
        console.log(`회차별 누적시간: ${timeLast}`);
    }
    else {
        
    }
}