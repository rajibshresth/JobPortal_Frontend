var token=window.localStorage.getItem('token');
var usertype=window.localStorage.getItem('usertype');
notoken(token);
function notoken(token) {
   
    if (!token){
        window.location.href="login.html";
    }else if( usertype!='Hirer'){
        window.location.href="Employee/employeedashboard.html";
    }
}