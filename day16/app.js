let animationElement = document.querySelectorAll('.show-on-srcoll');

function toggleAnimationElementInWindow(element) {
    //
    let rect = element.getClientRects()[0];
    let heightScreen = window.innerHeight;

    //check co ben trong man hinh ko
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
       element.classList.add('start'); 
    } else {
        element.classList.remove('start');
    }
}


function checkAnimation() { 

    animationElement.forEach(el => {
        toggleAnimationElementInWindow(el);
    });
    
}

window.onscroll = checkAnimation