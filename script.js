function bigImg(x){
        x.style.height = "8rem";
        x.style.width = "12.5rem";
}
function normalImg(x){
    x.style.height = "7.5rem";
    x.style.width = "12rem";
}
function validationForm(){  
    var returnval=true;


        const userName=document.myform.Name.value;
        
        if(userName.length<5){
            returnval = false;
         seterror('username',"Name cannot be empty",returnval,"unerror");
         
        }

        const userContact=document.myform.contact.value;
        if(isNaN(userContact)){
            returnval=false;
            seterror('contact',"Enter numeric value only",returnval);
            } 
        if(userContact.length<10 || userContact.length>11){
            returnval = false;
            seterror('contact',"Enter a valid mobile number",returnval,'ucerror');
            
        }
        
        const userEmail=document.myform.email.value;
        var atposition=userEmail.indexOf("@");
        var dotposition=userEmail.lastIndexOf(".");
        if(atposition<1 || dotposition<atposition+2 || dotposition+2>=userEmail.length){
            returnval=false;
            seterror('mail',"Please Enter a valid Email address",returnval,"ueerror");
            
        }

        const userpasswd=document.myform.Password.value;
        if(userpasswd.length<=1 || userpasswd.length<5 || userpasswd.length>12){
            returnval=false;
           seterror('passwd',"Please Enter atleast 6 character Password",returnval,"uperror");
        }
   
    
    return returnval;
    
}

//seterror function call here
var seterror=function seterror(id,error,returnval,id1){
    
    // console.log(id);
    // console.log(error);
    console.log(returnval);
    
    if (returnval===false){
        console.log(document.getElementById(id));
        console.log(document.getElementById(id1).innerHTML=error);
    }else{
        returnval=false;
    }


}
