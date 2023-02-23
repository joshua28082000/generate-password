// var password = document.getElementById("bts2");
// function genpassword(){   
// var char  ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
// var passwordlength=12;
// var password="";
// for(var i=0; i<=passwordlength ; i++){
// var randomnumber = Math.floor(Math.random()*char.length);
// password+= char.substring[randomnumber,randomnumber +1]
// }
// document.getElementById("bts2").value = password;
// }
function getpassword(){
   const char  ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
   let passwordlength=16;
   let password = '';
   for(let i = 0 ; i< passwordlength;i++){
       let randomNumber = Math.floor(Math.random() *char.length);
        password+=char.substring(randomNumber,randomNumber+1)
   }
   document.getElementById("password1").value = password;
   const char1  ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
   let passwordlength1=16;
   let password1 = '';
   for(let i = 0 ; i< passwordlength1;i++){
       let randomNumber = Math.floor(Math.random() *char1.length);
        password1+=char1.substring(randomNumber,randomNumber+1)
   document.getElementById("password2").value = password1;
}}