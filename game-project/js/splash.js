document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const splashScreen = document.querySelector(".splash-screen");
      splashScreen.style.display = "none";
      sessionStorage.clear();
      window.location.href="../page/fight_page.html";
    }, 3000); 
  });
  