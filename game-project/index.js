function load() {
    const setGame = "./gamepage/game.html";
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const windowWidth = 1200; // 원하는 창의 너비
    const windowHeight = 1000; // 원하는 창의 높이
    const minWidth = 800; // 최소 너비
    const minHeight = 600; // 최소 높이
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    const newWin = window.open(setGame, "myWin", `left=${left},top=${top},width=${windowWidth},height=${windowHeight}`);

    // 창 크기 변경 이벤트를 감지하여 최소 크기 적용
    newWin.addEventListener('resize', function () {
        const currentWidth = newWin.innerWidth;
        const currentHeight = newWin.innerHeight;

        if (currentWidth < minWidth) {
            newWin.resizeTo(minWidth, currentHeight);
        }
        if (currentHeight < minHeight) {
            newWin.resizeTo(currentWidth, minHeight);
        }
    });
}