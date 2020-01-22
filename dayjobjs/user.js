//$ represent jquery
$(document).ready(
    function () {

        $("#signup").on("submit", function (event) {
            event.preventDefault();
            console.log(status);
            var formdata = new FormData();
            var myFormData = {
                //key and values
                image: $('#image')[0].files[0],
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                phone: $('#phone').val(),
                address: $('#address').val(),
                gender: $('input[name="gender"]:checked').val(),
                email: $('#email').val(),
                password: $('#password').val(),
                pw: $('#pw').val(),
                usertype: $('#usertype').val()
            }

            for (key in myFormData) {
                formdata.append(key, myFormData[key])
            }

            $.ajax({
                url: 'http://localhost:3000/users',
                method: 'POST',
                contentType: false,
                processData: false,
                data: formdata,
                dataType: 'json',

                success: function (result, status) {
                    console.log(result);
                    console.log(status);
                    alert("User Registered Successfully");
                    window.location.href = "login.html";

                },

                error: function (jqXHR, status) {
                    console.log(status);
                    console.log(jqXHR.responseJSON.message);
                    $('#emailexist').append(' <div class="alert alert-danger" >\n' +
                        '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                        '         ' + jqXHR.responseJSON.message + '          \n' +
                        '            </div>');
                }

            })
        })

        $('#access').click(function (event) {
            event.preventDefault();
            // var email = $("#mails").val();
            // var password = $("#pswd").val();
            var logindata = {
                email : $("#mails").val(),
                password : $("#pswd").val()
            }

$.ajax({
                url: 'http://localhost:3000/login',
                method: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(logindata),

                success: function (result) {
                    window.localStorage.setItem('token',result.token);
                    window.localStorage.setItem('userid',result.id);
                    window.localStorage.setItem('image',result.image);
                    window.localStorage.setItem('firstname',result.firstName);
                    window.localStorage.setItem('lastname',result.lastName);
                    window.localStorage.setItem('phone',result.phone);
                    window.localStorage.setItem('address',result.address);
                    window.localStorage.setItem('gender',result.gender);
                    window.localStorage.setItem('email',result.email);
                    window.localStorage.setItem('usertype',result.usertype);
                    // if (result.usertype == "Employee"){
                    // 	alert("done  ")
                    //     window.location.href='Employee/employeedashboard.html';
                    // }
                    // else
                    // {
                    // 	alert("not done")
                    //     window.location.href='Hirer/hirerdashboard.html'
                    // }
                    if (result.usertype == "Employee"){
                        window.location.href='Employee/employeedashboard.html';
                    }
                    else
                    {
                        window.location.href='Hirer/hirerdashboard.html'
                    }

                    $('#message').html(result.message);

                },

                error: function (jqXHR, status) {
                    console.log(status);
                    alert("Either Email or Password is incorrect");
                    $('#message').append(' <div class="alert alert-danger" >\n' +
                        '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                        '         ' + jqXHR.responseJSON.message + '          \n' +
                        '            </div>');
                }

            })

        });
    })
$('#getUsers').click(function (event) {
    event.preventDefault();
    console.log('click');

    $.ajax({
        url: 'http://localhost:3000/allusers',
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        // headers: { 'Authorization' : window.localStorage.getItem('token')},


        success: function (result, status) {

            console.log(result);

            // console.log(status);
            // $('#message').html(result.message);

        },

        error: function (jqXHR, status) {
            // console.log(status);
            // console.log(jqXHR.responseJSON.message);
            // $('#message').html(jqXHR.responseJSON.message);
        }

    });
});






