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

    var lastScrollPosition = 0;
    window.onscroll = function() {
        var newScrollPosition = window.scrollY;

        if (newScrollPosition < lastScrollPosition) {
            //upward - code here
            var header = document.getElementById('scroller');
            header.classList.add("scrolledFade");
        } else if (lastScrollPosition > 600) {
            var body = document.getElementById('pageTwo');
            body.classList.add("slideLeft");
            return;
        } else {
            //downward - code here
            var header = document.getElementById('scroller');
            header.classList.add("scrolled");
            header.classList.remove("scrolledFade");
        }

        console.log(lastScrollPosition);
        lastScrollPosition = newScrollPosition;
    }


    var tipTimer;
    btnMan = document.getElementById('btnWoman');
    btnMan.addEventListener('click', function() {
        tipTimer = setTimeout(showModal, 1000);
    });

    function showModal() {
        document.getElementById('modal').classList.add("visible");
    }

    /*var btnMan = document.getElementById('btnWoman');
    console.log(btnMan);
    /* modal */
    /*
    btnMan.addEventListener('click', function() {
        document.getElementById('modal').style.display = "block";
})*/

});