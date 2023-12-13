function joinId() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("name", name);

    document.getElementById("joinmessage").innerHTML=name+'님의 회원 가입이 완료되셨습니다.';

    document.getElementById("home_zone").innerHTML='<div><a href="./start_page.html">로그인 하러가기</a></button>';
}