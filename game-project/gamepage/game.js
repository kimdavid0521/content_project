const monsters = [
  {
  id:1,
  maxhealth: 200, // 원하는 maxhealth 값으로 변경
  currentHealth: 200,
  name: '붉은 눈의 가고일' // 초기 체력 설정
  },
  {
    id:2,
    maxhealth: 500, // 원하는 maxhealth 값으로 변경
    currentHealth: 500,
    name: '아카서스'
  },
  {
    id:3,
    maxhealth: 800, // 원하는 maxhealth 값으로 변경
    currentHealth: 800,
    name: '슬라임 리무르'
  },
]
let floor = 1



// Attack 함수 정의
document.addEventListener("DOMContentLoaded", function () {
  let currentMonsterIndex = floor-1; // 초기 몬스터 인덱스 설정

  // 몬스터 이름 초기 설정
  document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;

  
});
function Attack() {
  const healthBar = document.querySelector('.health-bar .health');
  let currentMonsterIndex = floor - 1;
  const currentMonster = monsters[currentMonsterIndex];
  const maxHealth = currentMonster.maxhealth;
  let currentHealth = currentMonster.currentHealth;
  console.log(currentHealth)

  const reductionAmount = 10;
  const reductionPercentage = (reductionAmount / maxHealth) * 100;
  currentHealth -= (maxHealth * reductionPercentage) / 100;

  if (currentHealth < 0) {
      let floorClear = confirm(floor+"층을 클리어 하셨습니다. 다음 층으로 넘어가시겠습니까?")
      if(floorClear===true){
        setTimeout(alert("3초뒤에입장합니다."),3000)

      }
  }
  healthBar.style.width = ((currentHealth/maxHealth)*100) + '%';
  currentMonster.currentHealth = currentHealth;
}