var token=window.localStorage.getItem('token');
var usertype=window.localStorage.getItem('usertype');
notoken(token);
function notoken(token) {
    if (!token){
        window.location.href="login.html";
    }else if( usertype!=='Employee'){
        window.location.href="Hirer/hirerdashboard.html";
    }
}