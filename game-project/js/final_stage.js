
const character = document.getElementById('character');
let characterX = 40;
let characterY = 560;

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
      

    if (characterX > 20 && characterX < 750) {
        handleRight();
        handleLeft();
        if(characterX == "730" && characterY == "560") 
        {
            window.location.href="../page/ending_page.html";
        }
        else if (characterX == 30) {
            characterX = 40;
        }
        else if (characterX == 740) {
            characterX = 730;

        }
    }
  
      character.style.left = characterX + 'px';
      character.style.top = characterY + 'px';
      console.log(characterX,characterY);
    });