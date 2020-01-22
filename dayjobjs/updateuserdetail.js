$(document).ready(function () {

    var userid=window.localStorage.getItem('userid');

    $.ajax({

        url:'http://localhost:3000/vieweachusers/'+userid,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

           console.log(result);
            var image =result.image;
            var firstname=result.firstName;
            var lastname=result.lastName;
            var phone=result.phone;
            var state=result.state;
            var city=result.city;
            var address=result.address;
            var gender=result.gender;

            $('#first_name').val(firstname)
            $('#last_name').val(lastname)
            $('#phone').val(phone)
            $('#statename').val(state)
            $('#cityname').val(city)
            $('#addr').val(address)


            $('#genders').append('<label>Gender</label>\n' +
                '                    <label class="radio-inline">\n' +
                '                        <input type="radio" id="male"  name="gen" value="Male" '+(((gender)=="Male")?'checked':'') +'>\n' +
                '                        <span> Male </span>\n' +
                '                    </label>\n' +
                '                    <label class="radio-inline">\n' +
                '                        <input type="radio" id="female" name="gen" value="Female" '+ (((gender)=="Female")?'checked':'')+'>\n' +
                '                        <span>Female </span>\n' +
                '                    </label>')


        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })

    $('#updateUser').submit(function(p) {
        p.preventDefault();
        console.log($('input[name="gen"]:checked').val());
        var uid=localStorage.getItem('userid');
        var updateData = {
            firstName:$('#first_name').val(),
        lastName:$('#last_name').val(),
            phone: $('#phone').val(),
       state: $('#statename').val(),
        city:$('#cityname').val(),
        address:$('#addr').val(),
        gender: $('input[name="gen"]:checked').val(),
        }

        $.ajax({

            url: 'http://localhost:3000/editmydetail/'+uid ,
            method: "PUT",
            contentType: 'application/json',
            dataType: 'json',
            data:JSON.stringify(updateData),
            success: function(result) {
                window.location.href = ""
                $('#message').append(' <div class="alert alert-success" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ result.message+'          \n' +
                    '            </div>');
            },
            error: function(jqXHR) {
                console.log(jqXHR)
            }

        })

    })

})