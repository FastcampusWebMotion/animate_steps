const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener('click', e=>{
    animate(box, {
        prop: 'margin-left',
        value: 50,
        duration: 1000        
    });    
})

function animate(selector, option){
    const startTime= performance.now();
    const currentValue = parseInt(getComputedStyle(selector)[option.prop]);

    let isString = typeof option.value;
    if(isString === 'string') option.value = parseFloat(option.value);

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
        
        if(isString === 'string'){
            selector.style[option.prop] = `${result}%`;
        }
        else{
            selector.style[option.prop] = `${result}px`;
        }
        
    }

    
}

