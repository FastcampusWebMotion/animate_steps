const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener('click', e=>{
    animate(box, {
        prop: 'margin-left',
        value: 300,
        duration: 1000        
    });    
})

function animate(selector, option){
    const startTime= performance.now();
    const currentValue = parseInt(getComputedStyle(selector)[option.prop]);

    if(option.value === currentValue) return;    
    requestAnimationFrame(run);  
    
    function run(time){
        let timeLast = time - startTime;
        let progress = timeLast/option.duration;
    
        if(progress < 0) progress = 0;
        if(progress > 1) progress = 1;
        if(progress < 1){
            requestAnimationFrame(run); 
        }else{
            if(option.callback) option.callback();
        } 

        let result = currentValue + ((option.value-currentValue)*progress);       
        selector.style[option.prop] = `${result}px`;
    }

    
}

