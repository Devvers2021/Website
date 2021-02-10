function checkForm() {
    var oldP=document.getElementById("oldP").nodeValue;
    var newP=document.getElementById("newP").nodeValue;
    var confirmP=document.getElementById("confirmP").nodeValue;

    if(oldP=""&&newP!=""&&confirmP!=""){

        if(oldP!=newP){

            if(newP==confirmP){

                return true;
            }
            else{

                alert("Confirm password is not the same as new password.");
                return false;
            }
        }
        else{

            alert("This is your Old Password. Please provide a New Password.");
            return false;
        }
    }
    else{

        alert("All Fields Are Required.");
        return false;
    }
}
/// function resetForm(){
//var oldP=document.getElementById("oldP").nodeValue;
//var newP=document.getElementById("newP").nodeValue;
//var confirmP=document.getElementById("confirmP").nodeValue;}

function onClick() {
    
}

 //<script>
  //  function Function(){

      //  var oldpassword = document.getElementById('oldPassword').value;
      //  var newpassword = document.getElementById('newPassword').value;
      //  var confirmpassword = document.getElementById('confirmPasword').value;
      //  if (oldpassword == "" || newpassword == "" || confirmpassword == ""){

          //  alert('Please fill all the details');}
        
       // else if(oldpassword == newpassword){

           // alert("Old password and New password cannot be the same"); }
            
        
      //  else if(newpassword != confirmpassword){

           // alert("Password mismatch"); }
        

 //</script>  -->



