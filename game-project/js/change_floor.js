
const character = document.getElementById('character');
let characterX = 160;
let characterY = 70;

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
    

    if (characterX <= 220 && characterX >= 110 && characterY >= 50 && characterY < 420) {
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
    else if (characterX >= 110 && characterX <= 710 && characterY >= 420 && characterY <= 550) {
        handleLeft();
        handleRight();
        handleUp();
        handleDown();
        if(characterX < 110){
            characterX = 110;
        }
        else if (characterY > 550) {
            characterY = 550;
        }
        else if (characterX > 710) {
            characterX = 710;
        }
        else if (characterY < 420) {
          characterY = 420;
        }

    }
      character.style.left = characterX + 'px';
      character.style.top = characterY + 'px';
      console.log(characterX,characterY);
      if(characterX === 710 && (characterY === 460 || characterY === 470)){
        alert("포탈에 도착하였습니다. 2층으로 올라갑니다.")
        setTimeout(function () {
          window.location.href="../page/fight_page.html";
        }, 3000); 
      }
    });