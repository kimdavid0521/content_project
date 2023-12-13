
function submitlogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let username1 = username;
    let password1 = password;

    
    let usernamelength = username1.length;
    let passwordlength = password1.length;
    
    console.log(username);
    console.log(password);
    if (
        localStorage.getItem("username") == username && localStorage.getItem("password") == password) 
        {
        document.getElementById("btnbox").innerHTML='<div>로그인이 되셨습니다! <br /><a href="./information_page.html">게임하러가기</a></button>';
        
    }
    else {
        document.getElementById("btnbox").innerHTML = '로그인에 실패하셨습니다.<br /> 다시 입력해주세요';
    }
}

