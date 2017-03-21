 
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


//counter score 
//Get element for the counter
var counter = $('#counter');
//Run count function
count(counter, 0, 30, 1000);

//Count function - element for counter, starting count number, ending count number, time in milliseconds
function count(elem, startnum, endnum, time){
  
  //Create a variable to store the current counter number and add it to the counter
  var curnum = startnum;
  elem.text(curnum);
  
  //Work out the speed of the counter
  var speed = time / (endnum - startnum);
  
  //Create the counter animation
  var timer = window.setInterval(function(){
    
    //Test if counter has finished
    if(curnum < endnum){
      //Increase the counter by 1 and add it to the counter
      curnum++;
      elem.text("Score" + ": " + curnum);
    }else{
      //Stop the animation
      clearInterval(timer);
    }
    
  },speed);
  
}

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