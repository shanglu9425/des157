 
 $(document).ready(function() {
 
 $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );



function fDate(){
	var d = new Date(),
	month = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December" ];
	
	$('h1.month').text(month[d.getMonth()]);
	$('p.day').text(d.getDate());

	console.log(d);
}

fDate();

  //today date 
/*var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;
document.write(today);*/

 })