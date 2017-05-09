

function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$(".js-hamburger").on("click", function(){
        event.preventDefault();
        openNav();
});

$(".js-hamburger").on("mouseover", function(){
        event.preventDefault();
        openNav();
});

$(".sidenav .closebtn").on("click", function(){
	event.preventDefault();
	closeNav();
});

// $(".sidenav a").on("click", function(){
// 	closeNav();
// });



$(".sidenav").on("mouseleave", function(){
 		closeNav();
});

// $(".more").on("click", function(){
// 	event.preventDefault();
// 	$(".textBox").css({height: 'auto', overflow: 'auto'});
	
// });

$("#homepage .more").on("click", function(){
	event.preventDefault();
	$(".moreHomepage").toggle();

	
});

$("#liturgical .more").on("click", function(){
	event.preventDefault();
	$(".moreLit").toggle();
});

$("#lordsprayer .more").on("click", function(){
	event.preventDefault();
	$(".moreLord").toggle();
});

$("#rosary .more").on("click", function(){
	event.preventDefault();
	$(".moreRosary").toggle();
});

$("#testimonial .more").on("click", function(){
	event.preventDefault();
	$(".moreTest").toggle();
});

$("#michele .more").on("click", function(){
	event.preventDefault();
	$(".moreMichele").toggle();
});


$("#events .more").on("click", function(){
	event.preventDefault();
	$(".moreEvents").toggle();
});



