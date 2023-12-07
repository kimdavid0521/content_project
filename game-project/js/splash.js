document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const splashScreen = document.querySelector(".splash-screen");
      splashScreen.style.display = "none";
      sessionStorage.clear();
      window.location.href="../page/game_start.html";
    }, 3000); 
  });
  