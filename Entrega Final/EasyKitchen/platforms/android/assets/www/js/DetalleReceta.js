document.addEventListener("deviceready", onDeviceReady, false);
var codigoReceta = window.localStorage.getItem("CodigoReceta");

function onDeviceReady() {
    // Now safe to use the PhoneGap API
    data = new FormData();
    data.append("codigoReceta", codigoReceta);
    $.ajax({
       
        url: "http://easykitchenapp.com/",
        type: "POST",
        data: data,
        sucess: function(){
            $.each(html, function(key, value){
                // todo lo que se debe agregar para el detalle de la receta;
                
            });
        },
        error: function(e){
            alert(e);
        }
        
    });
    
}

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    // Handle the back button
}