/*
function openNav() {
    $("#mySidenav").style(.width = "250px";
}


function closeNav() {
    $("#mySidenav").style.width = "0";
}
*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$(".js-hamburger").on("click", function(){
        event.preventDefault();
        openNav();
});


$(".sidenav .closebtn").on("click", function(){
	event.preventDefault();
	closeNav();
});

$(".sidenav").on("mouseleave", function(){
 		closeNav();
});