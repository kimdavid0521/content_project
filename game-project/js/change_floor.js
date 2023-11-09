let characterWhereX = 600;
let characterWhereY = 600;
const character = document.getElementById('character');
let x = 600;
let y = 600;

    document.addEventListener('keydown', function (event) {
      
      const speed = 100;

    if (event.key == 'ArrowUp') {
        if (characterWhereY > 0){
            y -= speed;
            characterWhereY = characterWhereY-speed;
        }
    }
    else if (event.key == 'ArrowDown') {
        if (characterWhereY < 1000) {
            y += speed;
            characterWhereY = characterWhereY+speed;
        }
    }
    else if (event.key == 'ArrowLeft') {
        if (characterWhereX > 0) {
            x -= speed;
            characterWhereX = characterWhereX-speed;
        }
    }
    else if (event.key == 'ArrowRight') {
        if( characterWhereX < 1900) {
            x += speed;
            characterWhereX = characterWhereX+speed;
        }
    }
    
      character.style.left = x + 'px';
      character.style.top = y + 'px';
      console.log(characterWhereX,characterWhereY);
      if(characterWhereX===600 && characterWhereY===600){
        
      }
    });