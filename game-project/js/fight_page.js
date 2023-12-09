
const monsters = [
  {
  id:1,
  maxhealth: 200, // 원하는 maxhealth 값으로 변경
  currentHealth: 200,
  damage:10,
  character:"../img/monster5-attack.png",
  ready:"../img/monster5-ready.png",
  attack:"../img/monster5-attack.png",
  name: '붉은 눈의 가고일', 
  bg: "../img/background1.png"
  },
  {
    id:2,
    maxhealth: 500, // 원하는 maxhealth 값으로 변경
    currentHealth: 500,
    damage:20,
    character:"../img/monster2-attack.png",
    ready:"../img/monster2-ready.png",
    attack:"../img/monster2-attack.png",
    name: '아카서스', 
    bg: "../img/background1.png"
  },
  {
    id:3,
    maxhealth: 800, // 원하는 maxhealth 값으로 변경
    currentHealth: 800,
    damage:20,
    character:"../img/monster1-attack.png",
    ready:"../img/monster1-ready.png",
    attack:"../img/monster1-attack.png",
    name: '킹 슬라임', 
    bg: "../img/background2.png"
  },
  {
    id:4,
    maxhealth: 1000, // 원하는 maxhealth 값으로 변경
    currentHealth: 1000,
    damage:25,
    character:"../img/monster4-attack.png",
    ready:"../img/monster4-ready.png",
    attack:"../img/monster4-attack.png",
    name: '그린더', 
    bg: "../img/background2.png"
  },
  {
    id:5,
    maxhealth: 1500, // 원하는 maxhealth 값으로 변경
    currentHealth: 1500,
    damage:30,
    character:"../img/monster3-attack.png",
    ready:"../img/monster3-ready.png",
    attack:"../img/monster3-attack.png",
    name: '탑의 원혼', 
    bg: "../img/background3.png"
  },
]
let floor =0;
const monster = document.querySelector("#monster-motion");
let saveFloor = sessionStorage.getItem("층 수")-'0';
console.log(saveFloor);
showLoadingScreen()
if(saveFloor ===0){
  floor = 1;
}
else if(saveFloor === 1) {floor = 2;}
 //층수
sessionStorage.setItem("층 수",floor);
console.log(saveFloor)
saveFloor = sessionStorage.getItem("층 수")-'0'
let isGuarding = false; // 방어 상태를 나타내는 변수
let isClear = false; //몬스터를 죽였는가를 나타내는 변수
// 플레이어의 초기 체력 설정
let playerMaxHealth = 100; // 플레이어의 최대 체력
let playerCurrentHealth = playerMaxHealth; // 플레이어의 현재 체력
let potion=10;
document.querySelector("#potion-amount").innerHTML = potion;


// 몬스터 체력바 초기설정
function initMonHealth() {
  const healthBar = document.querySelector('.health-bar .health');
  let currentMonsterIndex = saveFloor - 1;
  let currentMonster = monsters[currentMonsterIndex];
  let maxHealth = currentMonster.maxhealth;
  let currentHealth = currentMonster.currentHealth;
  document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;
  document.querySelector('.container').style.backgroundImage = `url(${monsters[currentMonsterIndex].bg})`;
  // 여기에서 몬스터 체력바를 초기 설정합니다.
  healthBar.style.width = ((currentHealth / maxHealth) * 100) + '%';
}
function showLoadingScreen() {
  // 로딩창을 보여주는 로직을 여기에 구현
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'block';
}
function hideLoadingScreen(){
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", async function() {
  
  let saveFloor = sessionStorage.getItem("층 수") - '0';
  let currentMonsterIndex = saveFloor - 1;

  // 몬스터 이미지 설정
  document.querySelector("#monster-motion").innerHTML = `<img src="${monsters[currentMonsterIndex].character}" alt="대체 텍스트">`;

  // 몬스터 이름 설정
  document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;

  // 배경 이미지 설정
  document.querySelector('.container').style.backgroundImage = `url(${monsters[currentMonsterIndex].bg})`;

  // 몬스터 체력바 초기 설정 호출
  await initMonHealth();

  hideLoadingScreen();
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
  sessionStorage.clear();
  floor = 1;
  sessionStorage.setItem("층 수", floor);
  saveFloor = sessionStorage.getItem("층 수")-'0';
  // 몬스터의 초기 체력을 설정합니다.
  let currentMonsterIndex = saveFloor - 1;
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
  floor+=1;
  if(sessionStorage.getItem("층 수")!==null){
    sessionStorage.setItem("층 수",floor);
    saveFloor = sessionStorage.getItem("층 수")-'0';
  }
  else return;
  // 다음 층에 해당하는 몬스터 정보 업데이트
  let currentMonsterIndex = saveFloor - 1;
  if (currentMonsterIndex < monsters.length) {
    monsters[currentMonsterIndex].currentHealth = monsters[currentMonsterIndex].maxhealth;

    // 몬스터 이름 초기 설정
    document.getElementById('monsterName').textContent = monsters[currentMonsterIndex].name;

    // 플레이어와 몬스터의 체력바를 업데이트합니다.
    updatePlayerHealthBar();
    initMonHealth();
    
  } else {
    // 모든 층을 클리어한 경우에 대한 처리
    window.location.href="../page/final_stage.html";
  }
}
//여기까지

const hit = document.querySelector('.hit-detection');
function MonsterAttack() {
  // Clear any existing timeout
  function closeHit()
    {
        hit.style.display = "none"
    }
  function showHit()
    { 
        hit.style.display = "block"
        console.log("쳐맞")
        setTimeout(function(){closeHit()} ,500)
    }
    

  clearTimeout(monsterAttackTimeout);
  let saveFloor = sessionStorage.getItem("층 수")-'0'
  let currentMonsterIndex = saveFloor - 1;
  let currentMonster = monsters[currentMonsterIndex];
  // Schedule the monster's attack
  
  if (currentMonster.currentHealth > 0) {
    monsterAttackTimeout = setTimeout(function() {
      // 몬스터의 공격 로직
      console.log("공격모션")
      

      if (isGuarding === false) {
        playerCurrentHealth -= currentMonster.damage;
        showHit()
        console.log("몬스터가 플레이어에게 " + currentMonster.damage + "의 데미지를 입혔습니다.");
      }
      if (isGuarding === true) {
        console.log("공격을 방어하였습니다.");
      }
      if (playerCurrentHealth <= 0) {
        playerCurrentHealth = 0;
        let die = confirm("주거버렸으 다시 ㄱ?");
        if (die === true) {
          restartGame();
        }
        else window.close();
      }
      // 플레이어 체력바 업데이트
      document.querySelector("#monster-motion").innerHTML = `<img src="${monsters[currentMonsterIndex].character}" alt="대체 텍스트">`;
      updatePlayerHealthBar();
      
    }, 500);
    
  }
  else return;


  // 몬스터가 공격하기 0.5초 전에 알림
  console.log("몬스터가 공격합니다!");
  
  document.querySelector("#monster-motion").innerHTML = `<img src="${monsters[currentMonsterIndex].ready}" alt="대체 텍스트">`;
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
const atkEffect = document.querySelector('.atk-effect');
function D_atkMotion(){
  atkEffect.style.display = 'none';
}
function atkMotion(){
  
  atkEffect.style.display = 'flex';
  setTimeout(function(){D_atkMotion()} ,70)
}
function Attack() {
  const healthBar = document.querySelector('.health-bar .health');
  let currentMonsterIndex = saveFloor - 1;
  const currentMonster = monsters[currentMonsterIndex];
  const maxHealth = currentMonster.maxhealth; // maxHealth를 현재 몬스터의 maxhealth로 설정
  let currentHealth = currentMonster.currentHealth;

  const reductionAmount = 10;
  const reductionPercentage = (reductionAmount / maxHealth) * 100;
  currentHealth -= (maxHealth * reductionPercentage) / 100;
  healthBar.style.width = ((currentHealth / maxHealth) * 100) + '%';
  currentMonster.currentHealth = currentHealth;
  atkMotion();
  if (currentHealth <= 0) {
    // 몬스터가 죽은 경우
    clearTimeout(monsterAttackTimeout);
    healthBar.style.width = ((currentHealth / maxHealth) * 100) + '%';
    let floorClear = confirm(saveFloor + "층을 클리어 하셨습니다. 다음 층으로 넘어가시겠습니까?");
    if (floorClear === true) {
       alert(((saveFloor-'0')+1)+"층으로 입장합니다.")
       if(saveFloor === 1){
        alert("앗! 휴식터로 이동합니다")
        setTimeout(function () {
        subGamepage()
      }, 2000);
       }
       else moveToNextFloor();
       
    }
  } else {
    return;
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

function subGamepage(){
  const splashScreen = document.querySelector(".container");
    splashScreen.style.display = "none";
    window.location.href="../page/change_floor.html";
}







