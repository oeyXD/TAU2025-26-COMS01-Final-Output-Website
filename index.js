
const audio = document.getElementById('bgMusic')
//audio.volume = 0;
audio.volume = 0.75;

// from view 1 going to view 2
document.querySelector('#startButton').addEventListener('click', function () {
    document.querySelector('#view1').classList.add('fade-out');
    setTimeout(function () {
        audio.play();
        document.querySelector('#view1').style.display = 'none';
        document.querySelector('#view2').classList.add('appear');
        document.querySelector('#view2').style.display = 'block';
    }, 500);
});

// from view 2 going to view 3
document.querySelector("#goToView3").addEventListener('click', function () {
    document.querySelector('#view2').classList.add('fade-out');
    setTimeout(function () {
        document.querySelector('#view2').style.display = 'none';
        document.querySelector('#view3').classList.add('appear');
        document.querySelector('#view3').classList.remove('fade-out');
        document.querySelector('#view3').style.display = 'block';
    }, 500)
});

// from view 3 going to view 2
document.querySelector("#goToView2").addEventListener('click', function () {
    //document.querySelector('#view3').classList.remove('appear');
    document.querySelector('#view3').classList.add('fade-out');
    setTimeout(function () {
        document.querySelector('#view3').style.display = 'none';
        document.querySelector('#view2').classList.remove('fade-out');
        document.querySelector('#view2').style.display = 'block';
    }, 500)
});


document.querySelector("#explode").addEventListener('click', function () {
    window.close()
});
