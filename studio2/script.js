console.log("test");

document.f.onreset = clear;
document.f.onsubmit = process;

function process() {
    var userTest1 = document.f.test1.value;
    var userTest2 = document.f.test2.value;
    var userTest3 = document.f.test3.value;
    var userTest4 = document.f.test4.value;
    var myMsg = document.getElementById('paragraph');
    myMsg.innerHTML = "hi " + userTest1 + " your favorite color is " + userTest2;
    return false;

    /*
    var storyDiv = document.getElementById("paragraph");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    storyDiv.innerHTML = name + " married a " + adjective + " " + noun + "... So weird!";
*/
}

function clear() {
    var myMsg = document.getElementById('paragraph');
    myMsg.innerHTML = "";
    var rsetInput = document.getElementById('input-form').reset();
    return false;

}



/*var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);*/