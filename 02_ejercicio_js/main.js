//inicio de la página
$("document").ready(function(){
    $("#mensaje_img1"). hide()
});
//efecto hover con dos.
$("img").hover( function(){
    $("#mensaje_img1").show()
},
 function(){
    $("#mensaje_img1").hide()
});

