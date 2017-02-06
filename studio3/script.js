/*console.log("test");

var btnClick = document.getElementById('test');
console.log(btnClick);
var modal = document.getElementById('modal');
console.log(modal);
btnClick.addEventListener('click', function() {
    modal.style.display = "block";
})*/


document.addEventListener("DOMContentLoaded", function(event) {

    // eventually add a preload array (wait for details in class)
    // then display random candy hearts on mouseover
    var imgs = ['me.png', 'mephone.png', 'meMac.png'];
    var preload = [];
    for (var i = 0; i < imgs.length; i++) {
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }

    console.log(imgs[1]);

    function getModal(id) {
        var modal = document.getElementById(id);
        return modal;
    }

    function test1(id) {
        var btn = document.getElementById(id);
        return btn;
    }
    console.log(test1('phone'));

    test1('phone').addEventListener('click', function() {
        getModal('modalPhone').style.display = "block";
        this.style.display = "none";
        var meBg = document.getElementById('me');
        meBg.src = imgs[1];
        console.log(test1('phone'));
    })
    test1('mac').addEventListener('mouseover', function() {
        this.innerHTML = < h1 > +"hi" + < /h1>;
    })

    test1('mac').addEventListener('click', function() {
        getModal('modalMac').style.display = "block";
        this.style.display = "none";
        var meBg = document.getElementById('me');
        meBg.src = imgs[2];
    })


    test1('close2').addEventListener('click', function() {
        this.parentNode.style.display = "none";
        test1('mac').style.display = "block";
        var meBg = document.getElementById('me');
        meBg.src = imgs[0];
        console.log(test1('close'));
    })

    test1('close1').addEventListener('click', function() {
        this.parentNode.style.display = "none";
        test1('phone').style.display = "block";
        var meBg = document.getElementById('me');
        meBg.src = imgs[0];
        console.log(test1('close'));
    })





});




// add a cursor hover