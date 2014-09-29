document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    // Handle the back button
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API
    var user = window.localStorage.getItem("user");
    alert(user);
    data = new FormData();
    data.append
    $.ajax({
            url : "http://easykitchenapp.com/showMenu.php",
            type : "POST",
            dataType: "json",
            data : data,
            processData: false,
            success : function(html){
                
                $.each(html, function(key,value){
                
                    images.push(value.Image)
                });
                        
            },
            error : function(e){
                alert(e);
            }
                    
    });
    
}