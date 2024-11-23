







document.getElementById('loginform').addEventListener ("submit", function(event){

    event.preventDefault();




    var username = document.getElementById ('username').value;
    var password = document.getElementById ('password').value;



    var  p_username = "emon";
    var  p_password = "emon12";



    if(username ==  p_username && password ==  p_password ){
         window.location.href ="welcome/welcome.html";
         }

        
        
        else if(username != p_username && password ==  p_password ){
            document.write( "username is wrong")
            window.location.href ="wrong/user/wrong_user.html";
        }
        
        
        else if(username ==  p_username && password != p_password ){
         
            window.location.href ="wrong/pass/wrong_pass.html";
        }
        
        
        else if(username !=  p_username && password != p_password ){
            document.write( "password and username are wrong")
            window.location.href ="wrong/user_pass/wrong_user_pass.html";
        }





});

