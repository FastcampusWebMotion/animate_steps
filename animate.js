const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener('click', e=>{
    animate(box, {
        prop: 'margin-left',
        value: 300,
        duration: 1000,
        callback: ()=>{
            animate(box, {
                prop: 'margin-top',
                value: 300,
                duration: 1000
            })
        }
    });

    
})

function animate(selector, option){
    const startTime= performance.now();
    requestAnimationFrame(move);
    
    function move(time){
        let timeLast = time - startTime;
        let progress = timeLast/option.duration;
    
        if(progress < 0) progress = 0;
        if(progress > 1) progress = 1;
        if(progress < 1){
            requestAnimationFrame(move); 
        }else{
            if(option.callback) option.callback();
        } 
       
        selector.style[option.prop] = `${option.value*progress}px`;
    }
}

