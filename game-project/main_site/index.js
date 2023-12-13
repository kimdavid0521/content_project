function load() {
    const setGame = "../page/splash_page.html";
    const windowWidth = 800; // 원하는 창의 너비
    const windowHeight = 1000; // 원하는 창의 높이
    const left = (window.screen.width - windowWidth) / 2;
    const top = (window.screen.height - windowHeight) / 2;

    // 새로운 이름으로 창을 열도록 수정
    const windowName = `myWin_${Date.now()}`;
    const newWindow = window.open(setGame, windowName, `left=${left},top=${top},width=${windowWidth},height=${windowHeight},resizable=no`);
    newWindow.addEventListener("DOMContentLoaded", function () {
        newWindow.resizeTo(600,1000)
        console.log(newWindow.innerWidth)
        console.log(newWindow.outerWidth)
    });

}
