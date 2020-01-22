$(document).ready(function () {
    var userid=window.localStorage.getItem('userid');
    var firstname=window.localStorage.getItem('firstname');
    var lastname=window.localStorage.getItem('lastname');
    var image=window.localStorage.getItem('image');

    $('#usernamedisplay').append('<span>'+firstname+" "+lastname+'</span>');
    $('#userphoto').append('<div><img src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend2/uploads/'+image +'" alt="user photo" height="40px" width="40px" style="border-radius: 50%;"' +
        '></div>')
})