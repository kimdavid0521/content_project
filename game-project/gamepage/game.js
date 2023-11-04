
const monsters = [
  {
  id:1,
  maxhealth: 200, // 원하는 maxhealth 값으로 변경
  currentHealth: 200,
  damage:10,
  name: '붉은 눈의 가고일' // 초기 체력 설정
  },
  {
    id:2,
    maxhealth: 500, // 원하는 maxhealth 값으로 변경
    currentHealth: 500,
    damage:20,
    name: '아카서스'
  },
  {
    id:3,
    maxhealth: 800, // 원하는 maxhealth 값으로 변경
    currentHealth: 800,
    damage:30,
    name: '슬라임 리무르'
  },
]

let floor = 1 //층수
let isGuarding = false; // 방어 상태를 나타내는 변수
let isClear = false; //몬스터를 죽였는가를 나타내는 변수
// 플레이어의 초기 체력 설정
let playerMaxHealth = 100; // 플레이어의 최대 체력
let playerCurrentHealth = playerMaxHealth; // 플레이어의 현재 체력
let potion=10;
document.querySelector("#potion-amount").innerHTML = potion;


restartGame()
// 몬스터 체력바 초기설정
function initMonHealth() {
  const healthBar = document.querySelector('.health-bar .health');
  let currentMonsterIndex = floor - 1;
  let currentMonster = monsters[currentMonsterIndex];
  let maxHealth = currentMonster.maxhealth;
  let currentHealth = currentMonster.currentHealth;
  // 여기에서 몬스터 체력바를 초기 설정합니다.
  healthBar.style.width = ((currentHealth / maxHealth) * 100) + '%';
}
// Attack 함수 정의
document.addEventListener("DOMContentLoaded", function () {
  // 몬스터 이름 초기 설정
  let currentMonsterIndex = floor - 1;
  document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;
  initMonHealth(); // 몬스터 체력바 초기 설정 호출
});



// 플레이어 체력바 업데이트
function updatePlayerHealthBar() {
  const charHealthBar = document.querySelector('.char-health-bar');
  charHealthBar.style.width = ((playerCurrentHealth / playerMaxHealth) * 100) + '%';
}

//게임 클리어 및 사망
function restartGame() {
  // 플레이어의 체력와 모든 상태를 초기 상태로 되돌립니다.
  playerCurrentHealth = playerMaxHealth;
  floor = 1;

  // 몬스터의 초기 체력을 설정합니다.
  let currentMonsterIndex = floor - 1;
  monsters[currentMonsterIndex].currentHealth = monsters[currentMonsterIndex].maxhealth;

  // 몬스터 이름 초기 설정
  document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;

  // 여기에 필요한 초기화 작업을 추가하세요.

  // 플레이어와 몬스터의 체력바를 업데이트합니다.
  updatePlayerHealthBar();
  initMonHealth();

  // 다시 몬스터 공격 간격을 설정하여 게임을 재개합니다.
}

function moveToNextFloor() {
  floor++;

  // 다음 층에 해당하는 몬스터 정보 업데이트
  let currentMonsterIndex = floor - 1;
  if (currentMonsterIndex < monsters.length) {
    monsters[currentMonsterIndex].currentHealth = monsters[currentMonsterIndex].maxhealth;

    // 몬스터 이름 초기 설정
    document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;

    // 플레이어와 몬스터의 체력바를 업데이트합니다.
    updatePlayerHealthBar();
    initMonHealth();
    
  } else {
    // 모든 층을 클리어한 경우에 대한 처리
    alert("모든 층을 클리어하였습니다!");
  }
}
//여기까지


function MonsterAttack() {
  // Clear any existing timeout
  clearTimeout(monsterAttackTimeout);
  let currentMonsterIndex = floor - 1;
  let currentMonster = monsters[currentMonsterIndex];
  // Schedule the monster's attack
  if (currentMonster.currentHealth > 0) {
    monsterAttackTimeout = setTimeout(function() {
      // 몬스터의 공격 로직
      if (isGuarding === false) {
        playerCurrentHealth -= currentMonster.damage;
        console.log("몬스터가 플레이어에게 " + currentMonster.damage + "의 데미지를 입혔습니다.");
      }
      if (isGuarding === true) {
        console.log("공격을 방어하였습니다.");
      }
      if (playerCurrentHealth < 0) {
        playerCurrentHealth = 0;
        let die = confirm("주거버렸으 다시 ㄱ?");
        if (die === true) {
          restartGame();
        }
      }
      // 플레이어 체력바 업데이트
      updatePlayerHealthBar();
      document.querySelector("#monster-motion").innerHTML = "<h3>몬스터<h3>";
    }, 500);
  }
  else return;


  // 몬스터가 공격하기 0.5초 전에 알림
  console.log("몬스터가 공격합니다!");
  document.querySelector("#monster-motion").innerHTML = "<h3>공격한다잇!<h3>";
}

// 몬스터 공격 간격 설정
function setMonsterAttackInterval() {
  const minInterval = 1000; // 1초
  const maxInterval = 4000; // 4초

  // 무작위 공격 간격 생성(1초에서 4초)
  const attackInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval);

  // 공격 간격마다 몬스터를 공격하도록 설정
  setTimeout(function () {
    MonsterAttack();
    setMonsterAttackInterval(); // 다음 공격 간격 설정
  }, attackInterval);
}

// 게임 시작 시 몬스터 공격 간격 설정
setMonsterAttackInterval();

let monsterAttackTimeout;
//여기부터 플레이어 js
function Attack() {
  const healthBar = document.querySelector('.health-bar .health');
  let currentMonsterIndex = floor - 1;
  const currentMonster = monsters[currentMonsterIndex];
  const maxHealth = currentMonster.maxhealth; // maxHealth를 현재 몬스터의 maxhealth로 설정
  let currentHealth = currentMonster.currentHealth;

  const reductionAmount = 10;
  const reductionPercentage = (reductionAmount / maxHealth) * 100;
  currentHealth -= (maxHealth * reductionPercentage) / 100;
  healthBar.style.width = ((currentHealth / maxHealth) * 100) + '%';
    currentMonster.currentHealth = currentHealth;
  if (currentHealth <= 0) {
    // 몬스터가 죽은 경우
    clearTimeout(monsterAttackTimeout);
    healthBar.style.width = ((currentHealth / maxHealth) * 100) + '%';
    let floorClear = confirm(floor + "층을 클리어 하셨습니다. 다음 층으로 넘어가시겠습니까?");
    if (floorClear === true) {
       alert((floor+1)+"층으로 입장합니다.")
       alert("3초뒤에 입장합니다. 준비하세요.!");
        setTimeout(function () {
        moveToNextFloor();
      }, 3000);
    }
  } else {
    
  }
}




function Guard() {
  if (isGuarding) {
    console.log("플레이어 방어 시전.");
    return; // 이미 방어 중인 경우 함수를 종료
  }

  isGuarding = true; // 방어 시작
    // 0.3초 후에 방어 상태를 해제
  setTimeout(function () {
    isGuarding = false; // 방어 종료
    console.log("플레이어의 방어가 종료되었습니다.");
  }, 300);
  
}

function Heal() {
  potion-=1;
  playerCurrentHealth+=40;
  if(playerCurrentHealth>=playerMaxHealth)
  {
    playerCurrentHealth = playerMaxHealth;
  }
  document.querySelector("#potion-amount").innerHTML = potion;
  updatePlayerHealthBar();
  if(potion===0){
    document.getElementById('potion').disabled = true;
    document.getElementById('potion-state').innerHTML="<h1>X</h1>"
  }
}










