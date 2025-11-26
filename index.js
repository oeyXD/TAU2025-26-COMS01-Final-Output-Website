
const audio = document.getElementById('bgMusic')
audio.volume = 0;
//audio.volume = 0.75;
audio.loop = true;
let pageNum = 1;

// from view 1 going to view 2
document.querySelector('#startButton').addEventListener('click', function () {
    document.querySelector(`#view${pageNum}`).classList.add('fade-out');
    setTimeout(function () {
        audio.play();
        document.querySelector(`#view${pageNum}`).style.display = 'none';
        pageNum += 1; // page number is now 2
        document.querySelector(`#view${pageNum}`).classList.add('appear');
        document.querySelector(`#view${pageNum}`).style.display = 'block';
    }, 500);
});

// from view 2 going to view 3
document.querySelector("#goToView3").addEventListener('click', function () {
    document.querySelector(`#view${pageNum}`).classList.add('fade-out');
    setTimeout(function () {
        document.querySelector(`#view${pageNum}`).style.display = 'none';
        pageNum += 1; // page number is now 3
        document.querySelector(`#view${pageNum}`).classList.add('appear');
        document.querySelector(`#view${pageNum}`).classList.remove('fade-out');
        document.querySelector(`#view${pageNum}`).style.display = 'block';
    }, 500)
});

// from view 3 going to view 2
document.querySelector("#goToView2").addEventListener('click', function () {
    //document.querySelector('#view3').classList.remove('appear');
    document.querySelector(`#view${pageNum}`).classList.add('fade-out');
    setTimeout(function () {
        document.querySelector(`#view${pageNum}`).style.display = 'none';
        pageNum -= 1; // page number is now 2
        document.querySelector(`#view${pageNum}`).classList.remove('fade-out');
        document.querySelector(`#view${pageNum}`).style.display = 'block';
    }, 500)
});

document.querySelector("#explode").addEventListener('click', function () {
    window.close()
});
