


const Start = () => { 
    const startImg = document.querySelector('.container');

    startImg.style.animation = 'fadeout 1.5s';
    startImg.addEventListener('animationend', () => {
        window.location.href="../page/information_page.html";
    });
    
}