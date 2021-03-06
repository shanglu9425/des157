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
    var imgs = ['me.png', 'mephone.png', 'meMac.png', 'meGlasses.png', 'meCat.png', 'mycat.jpg', 'mymac.jpg', 'myglasses.jpg', 'myphone.jpg'];
    var preload = [];
    for (var i = 0; i < imgs.length; i++) {
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }

    function getImage(id) {
        var imageGet = document.getElementById(id);
        return imageGet;
    }
    console.log('catImage');

    function getModal(id) {
        var modal = document.getElementById(id);
        return modal;
    }

    function test1(id) {
        var btn = document.getElementById(id);
        return btn;
    }

    /* cat modal */
    test1('cat').addEventListener('click', function() {
        getModal('modalCat').style.display = "block";
        getImage('catImage').src = imgs[5];
        this.style.display = "none";
        var meBg = document.getElementById('me');
        meBg.src = imgs[4];
    })
    test1('cat').addEventListener('mouseover', function() {
        this.style.textAlign = "center";
        this.style.color = "dodgerblue";
        var click = document.getElementById('clickmeC');
        click.style.display = "block";
    })
    test1('cat').addEventListener('mouseout', function() {
        var click = document.getElementById('clickmeC');
        click.style.display = "none";
    })


    /* glasses modal */
    test1('glasses').addEventListener('click', function() {
        getModal('modalGlasses').style.display = "block";
        this.style.display = "none";
        getImage('glassesImage').src = imgs[7];
        var meBg = document.getElementById('me');
        meBg.src = imgs[3];
    })

    test1('glasses').addEventListener('mouseover', function() {
        this.style.textAlign = "center";
        this.style.color = "darkcyan";
        var click = document.getElementById('clickmeG');
        click.style.display = "block";
    })
    test1('glasses').addEventListener('mouseout', function() {
        var click = document.getElementById('clickmeG');
        click.style.display = "none";
    })


    /* mac modal */

    test1('mac').addEventListener('click', function() {
        getModal('modalMac').style.display = "block";
        this.style.display = "none";
        getImage('macImage').src = imgs[6];
        var meBg = document.getElementById('me');
        meBg.src = imgs[2];
    })
    test1('mac').addEventListener('mouseover', function() {
        var click = document.getElementById('clickmeM');
        this.style.textAlign = "center";
        this.style.color = "white";
        click.style.display = "block";
    })
    test1('mac').addEventListener('mouseout', function() {
        var click = document.getElementById('clickmeM');
        click.style.display = "none";
    })

    /* phone modal */
    test1('phone').addEventListener('click', function() {
        getModal('modalPhone').style.display = "block";
        this.style.display = "none";
        getImage('phoneImage').src = imgs[8];
        var meBg = document.getElementById('me');
        meBg.src = imgs[1];
        console.log(test1('phone'));
    })
    test1('phone').addEventListener('mouseover', function() {
        this.style.textAlign = "center";
        this.style.color = "orange";
        var click = document.getElementById('clickmeP');
        click.style.display = "block";
    })
    test1('phone').addEventListener('mouseout', function() {
        var click = document.getElementById('clickmeP');
        click.style.display = "none";
    })

    test1('close1').addEventListener('click', function() {
        this.parentNode.style.display = "none";
        test1('phone').style.display = "block";
        var meBg = document.getElementById('me');
        meBg.src = imgs[0];
    })

    test1('close2').addEventListener('click', function() {
        this.parentNode.style.display = "none";
        test1('mac').style.display = "block";
        var meBg = document.getElementById('me');
        meBg.src = imgs[0];
    })

    test1('close3').addEventListener('click', function() {
        this.parentNode.style.display = "none";
        test1('glasses').style.display = "block";
        var meBg = document.getElementById('me');
        meBg.src = imgs[0];
    })
    test1('close4').addEventListener('click', function() {
        this.parentNode.style.display = "none";
        test1('cat').style.display = "block";
        var meBg = document.getElementById('me');
        meBg.src = imgs[0];
    })


    var containerBox = document.getElementById('fadeInn');

    containerBox.addEventListener('animationend', function() {
        var fade = document.getElementById('fade');
        console.log("Transition ended!");
        console.log(fade);
        fade.style.display = "block";
    });


});




// add a cursor hover