$(document).ready(function () {

    $('#logout').click(function (e) {
    e.preventDefault();
    console.log('click')
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userid');
        window.localStorage.removeItem('firstname');
        window.localStorage.removeItem('lastname');
        window.localStorage.removeItem('phone');
        window.localStorage.removeItem('address');
        window.localStorage.removeItem('gender');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('usertype');
        window.localStorage.removeItem('image');

        window.location.href="../login.html"

    })
})