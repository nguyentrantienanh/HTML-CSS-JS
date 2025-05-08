var p = document.querySelector('.typing-wrapper p')
var originContent = p.innerHTML
var index = 1;
var isForward = true;
Time = 200;
setInterval(function(){
    if( isForward ) {
        index++;
        if( index >= originContent.length ) {
            
            isForward = false;
            Time = 30;
        }
    }
    else {
        index--;
        if( index <= 1 ) {
            isForward = true;
        }
    }

    p.innerHTML = originContent.substring(0, index)
}, Time)
