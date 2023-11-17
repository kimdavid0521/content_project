
const character = document.getElementById('character');
let characterX = 160;
let characterY = 230;

    document.addEventListener('keydown', function (event) {
      
      const speed = 10;
      function handleRight() {
        if (event.key == 'ArrowRight') {
            characterX += speed;
        }
      }

      function handleLeft() {
        if (event.key == 'ArrowLeft') {
            characterX -= speed;
        }
      }
      function handleUp() {
        if (event.key == 'ArrowUp') {
            characterY -= speed;
        }
        
      }
      function handleDown() {
        if (event.key == 'ArrowDown') {
            characterY += speed;
        }
      }

    // if (event.key == 'ArrowUp') {
    //     if (characterY > 0){
    //         handleUp();
    //     }
    // }
    // else if (event.key == 'ArrowDown') {
    //     if (characterY < 290) {
    //         handleDown();
    //     }
    // }
    // else if (event.key == 'ArrowLeft') {
    //     if (characterX > 0) {
    //         handleLeft();
    //     }
    // }
    // else if(event.key == 'ArrowRight') {
    //     if(characterX < 220) {
    //         handleRight();
    //     }
    // }
    

    if (characterX <= 220 && characterX >= 110 && characterY >= 220 && characterY < 420) {
        handleLeft();
        handleRight();
        handleUp();
        handleDown();
        if(characterX>220){
            characterX=220;
        }
        else if(characterX <110){
            characterX = 110;
        }
    }
    else if (characterX >= 110 && characterX <= 630 && characterY >= 420 && characterY <= 550) {
        handleLeft();
        handleRight();
        handleUp();
        handleDown();
        if(characterX <110){
            characterX = 110;
        }
        else if (characterY >550) {
            characterY = 550;
        }
        else if (characterX > 630) {
            characterX = 630;
        }
    }
    
    else if ()
   
    
    
    
      character.style.left = characterX + 'px';
      character.style.top = characterY + 'px';
      console.log(characterX,characterY);
    });