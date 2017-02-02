console.log("test");

document.f.onsubmit = process;
document.f.onreset = clear;

function process() {
    var userTest1 = document.f.test1.value;
    var userTest2 = document.f.test2.value;
    var userTest3 = document.f.test3.value;
    var userTest4 = document.f.test4.value;
    var titleMove = document.getElementById('title');
    var audio = document.getElementById('beep-one')
    var myMsg = document.getElementById('paragraph');
    var imageMove = document.getElementById('image');
    audio.play();
    audio.loop = true;
    imageMove.className += ' image-move'
    titleMove.className += ' change-color'
    myMsg.className += ' border-test';
    myMsg.innerHTML = "I have " + userTest1 + " , I have " + userTest2 + "!" + "<br />" + " UH!! " + "<br />" + userTest2 + userTest1 + "!!" + "<br />" +
        " I have " + userTest3 + " , I have " + userTest1 + "<br />" + "UH!!!" + "<br />" + userTest3 + userTest1 + "<br />" + "LET'S GO !!" + "<br />" + userTest1 + "-" +
        userTest2 + ", " + userTest3 + userTest1 + "<br />" + "UH!" + "<br />" + userTest1 + "-" + userTest3 + "-" + userTest2 + "-" + userTest1 + "<br />" + "written by " + userTest4;
    return false;
}

function clear() {
    var audio = document.getElementById('beep-one')
    var myMsg = document.getElementById('paragraph');
    var imageMove = document.getElementById('image');
    var titleMove = document.getElementById('title');
    audio.pause();
    audio.currentTime = 0;
    imageMove.classList.remove('image-move');
    titleMove.classList.remove('change-color');
    myMsg.classList.remove('border-test');
    myMsg.innerHTML = "";
    var rsetInput = document.getElementById('input-form').reset();
    return false;

}




/*var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);*/