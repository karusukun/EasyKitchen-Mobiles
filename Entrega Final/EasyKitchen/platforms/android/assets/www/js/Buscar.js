document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API
}

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    // Handle the back button
}

var cantRecetas = 0;

search(){

    cantRecetas = 0;
    
    var query = document.getElementById("busquedaEtiqueta").value;
    data = new FormData();
    data.append("query",query);
    
    $.ajax({
    
        url : "http://easykitchenapp.com/",
        type : "POST", 
        dataType : "json",
        data : data,
        success : function(html){
            var DOM = $("#recetas");
            console.log(html);
            $.each(html,function(key,value){
                console.log(value);
                var htmlcode ="";
                 <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                    
                        
                    </a>
                </div>
                        
                htmlcode += '<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
                htmlcode += '<a class="thumbnail" href="Detail.html">';
                htmlcode += '<h5>'+value.Title+'</h5>';
                htmlcode += '<img onclick="openRecipe(this)" class="img-responsive" src="'+value.Image+'http://placehold.it/400x300" alt='+value.RecipeCode+'>'
                htmlcode += '</a>';
                htmlcode += '</div>';
                
                DOM.append(htmlcode);
            });
        },
        error : function(e){
            alert(e);
        }
        
    
    });
    
function openRecipe(element){
    
    window.localStorage.setItem("CodigoReceta", element.alt);
    window.location.replace("DetalleReceta.html");

}    
    
}