$("document").ready(function(){
    $("#anuncio").text("¡CLICK! Para cambiar de color")
    .width("500px")
    .height("500px")
    .hide()
    .fadeIn(3000);
    
});

let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];
$("div").on("click", function(){
    //ponemos el color aquí para que cada vez que le des a click cambie
    let color = colores [Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background", color);
    });