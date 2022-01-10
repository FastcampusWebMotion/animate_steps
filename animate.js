const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener('click', e=>{
    animate(box, {
        prop: 'opacity',
        value: 1,
        duration: 1000        
    });    
})

function animate(selector, option){
    const startTime= performance.now();
    let currentValue = parseFloat(getComputedStyle(selector)[option.prop]);   

    let isString = typeof option.value;
    if(isString === 'string') {
        const parentW = parseInt(getComputedStyle(selector.parentElement).width);
        const parentH = parseInt(getComputedStyle(selector.parentElement).height);
        const x = ['margin-left','margin-right','left','right','width'];
        const y = ['margin-top','margin-bottom','top','bottom','height'];

        for(let condition of x) if(option.prop === condition) currentValue = (currentValue/parentW)*100;
        for(let condition of y) if(option.prop === condition) currentValue = (currentValue/parentH)*100; 
        option.value = parseFloat(option.value);
    } 

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
        else if(option.prop === 'opacity'){
            selector.style[option.prop] = result;
        }
        else{
            selector.style[option.prop] = `${result}px`;
        }
    }
}

