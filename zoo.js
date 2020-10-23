

/* Background animatie --*/
$('.dirk').mousemove(function(e){
    var moveinX = (e.pageX * -5/100);
    var moveinY = (e.pageY * -5/100);
    $(this).css('background-position', moveinX + 'px ' + moveinY + 'px ')
})

