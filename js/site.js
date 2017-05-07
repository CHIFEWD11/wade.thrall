

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


$(".sidenav .closebtn").on("click", function(){
	event.preventDefault();
	closeNav();
});

$(".sidenav").on("mouseleave", function(){
 		closeNav();
});

// $(".more").on("click", function(){
// 	event.preventDefault();
// 	$(".textBox").css({height: 'auto', overflow: 'auto'});
	
// });

$("#homepage .more").on("click", function(){
	event.preventDefault();
	$(".moreHomepage").show();
	
});

$("#liturgical .more").on("click", function(){
	event.preventDefault();
	$(".moreLit").show();
});

$("#rosary .more").on("click", function(){
	event.preventDefault();
	$(".moreRosary").show();
});

$("#testimonial .more").on("click", function(){
	event.preventDefault();
	$(".moreTest").show();
});

$("#michele .more").on("click", function(){
	event.preventDefault();
	$(".moreMichele").show();
});