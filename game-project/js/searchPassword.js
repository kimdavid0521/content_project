function findpassword() {
    const name = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if(name == document.getElementById("usename")) {
        document.getElementById("password_zone").innerHTML='바말번호는'+password+'입니다';
    }
    else {
        document.getElementById("password_zone").innerHTML='찾으시는 계정이 존재하지 않습니다';
    }
}