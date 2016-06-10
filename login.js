document.getElementById('_submit').onclick=function(event){
  return validation()
}
//alert("hello1");

function validation(){
  var login=document.getElementById('_login');
  var loginLenght=login.value.length;
  var pass=document.getElementById('_pass');
  var passLenght=pass.value.length;
  var flagLogin=false;
  var flagPass=false;

  if(loginLenght < 3){
    flagLogin=false;
    login.classList.add('red-border');
  }
  else{
    flagLogin=true;
    login.classList.remove('red-border');
  }
  if(passLenght < 6){
    flagPass=false;
    pass.classList.add('red-border');
  }
  else{
    flagPass=true;
    pass.classList.remove('red-border');
  }

  if (flagLogin==true && flagPass==true){
    return true;
  }else{
    return false; 
  }
}
