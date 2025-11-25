
document.querySelector('#startButton').addEventListener('click', function () {
    document.querySelector('#view1').classList.remove('fade-in');
    document.querySelector('#view1').classList.add('fade-out');
    setTimeout(function () {
        document.querySelector('#view1').style.display = 'none';
        document.querySelector('#view2').classList.add('appear');
        document.querySelector('#view2').style.display = 'block';
    }, 500);
});


