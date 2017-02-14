document.addEventListener("DOMContentLoaded", function(event) {
    var numberOfDays = document.getElementById('numberOfDays');
    var today = new Date(); // today's date
    var patty = new Date(2017, 1, 14); // months are 0-11

    // find out the absolute difference between the
    // two date objects with the getTime() method
    var timeDiff = Math.abs(today.getTime() - patty.getTime());

    // convert from milliseconds to days by 
    // dividing by mill iseconds * minutes * hours 
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    numberOfDays.innerHTML = diffDays;

    // update the calculation to find out how many days until your next birthday


    /* document.addEventListener('scroll', function() {
         var header = document.getElementById('scroller');
         header.className += " scrolled";
     })
     document.addEventListener('scrollup', function() {
         var header = document.getElementById('scroller');
         header.classList.add("scrolled");

     })*/

    var lastScrollPosition;
    window.onscroll = function() {
        var newScrollPosition = window.scrollY;

        if (newScrollPosition < lastScrollPosition) {
            //upward - code here
            var header = document.getElementById('scroller');
            header.classList.add("scrolledFade");
            console.log("yuoyo");
        } else if (lastScrollPosition > 1000) {
            var calm = document.getElementById('modal-gif');
            calm.classList.add("hatchAnimation");
            console.log("fdsafsdaf");
        } else if (newScrollPosition > 600) {
            var body = document.getElementById('pageTwo');
            body.classList.add("slideLeft");
            console.log("123");
        } else if (newScrollPosition > 10) {
            var audio = document.getElementById('beep-one')
            audio.play();
            audio.loop = true;
        } else {
            //downward - code here
            var header = document.getElementById('scroller');
            header.classList.add("scrolled");
            header.classList.remove("scrolledFade");
            console.log("gagaaaga");
        }
        console.log(newScrollPosition);
        lastScrollPosition = newScrollPosition;
    }




    var tipTimer;

    //btnMan
    btnWoman = document.getElementById('btnWoman');
    btnWoman.addEventListener('click', function() {
        tipTimer = setTimeout(showModalWoman, 1000);
    });

    function showModalWoman() {
        document.getElementById('modal2').classList.add("visible");
        document.getElementById('modal2').classList.remove("nonVisible");
    }

    function closeModalWoman() {
        document.getElementById('modal2').classList.add("nonVisible");
    }

    var btnCloseWoman = document.getElementById('close2');
    btnCloseWoman.addEventListener('click', closeModalWoman);



    //btnWoman
    btnMn = document.getElementById('btnMan');
    btnMan.addEventListener('click', function() {
        tipTimer = setTimeout(showModalMan, 1000);
    });

    function showModalMan() {
        document.getElementById('modal1').classList.add("visible");
        document.getElementById('modal1').classList.remove("nonVisible");
    }

    function closeModalMan() {
        document.getElementById('modal1').classList.add("nonVisible");
    }

    var btnCloseMan = document.getElementById('close1');
    btnCloseMan.addEventListener('click', closeModalMan);
});