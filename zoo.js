
/* flashlight --*/

document.addEventListener("mousemove", function (e) {
    var gradient = document.querySelector(".gradient");
    gradient.style.background = "none";
    gradient.style.backgroundImage = "radial-gradient(circle closest-corner at " + e.clientX + "px " + e.clientY + "px , rgba(0,0,0,0) 0%, rgba(0,0,0,.9) 20%)";
});

document.addEventListener("mouseout", function (e) {
    var gradient = document.querySelector(".gradient");
    gradient.style.background = "rgba(0,0,0,.9)";
});

/* Background animatie --*/
$('.dirk').mousemove(function(e){
    var moveinX = (e.pageX * -5/100);
    var moveinY = (e.pageY * -5/100);
    $(this).css('background-position', moveinX + 'px ' + moveinY + 'px ')
})

