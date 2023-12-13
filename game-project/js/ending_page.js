function movepage () {
    window.location.href="../page/splash_page.html";
}

const username = localStorage.getItem("name");
document.getElementById("username").innerHTML =  username;