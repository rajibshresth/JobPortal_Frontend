$(document).ready(function () {

    $('#available').on('change', function(){
        this.value = this.checked ? 1 : 0;
    }).change();
    $('#employeeregisters').submit(function (event) {
        event.preventDefault();
        console.log('click');
        var userid=window.localStorage.getItem('userid');
        var firstname=window.localStorage.getItem('firstname');
        var lastname=window.localStorage.getItem('lastname');
        var phone=window.localStorage.getItem('phone');
        var address=window.localStorage.getItem('address');
        var email=window.localStorage.getItem('email');
        var image=window.localStorage.getItem('image');
        var gender=window.localStorage.getItem('gender')
        var myWorkDetailData={
            //key and values
            userId:userid,
            Skill: $('#skill').val(),
            Experiance: $('#experiance').val(),
            JobCompleted: $('#jobcompleted').val(),
            Language: $('#language').val(),
            Payment: $('#payment').val(),
            Working: $('#working').val(),
            Cost: $('#cost').val(),
            Available:$('#available').val(),
            image:image,
            firstName:firstname,
            lastName:lastname,
            phone:phone,
            address:address,
            email:email,
            gender:gender

        }
        console.log(myWorkDetailData);

        $.ajax({
            url:'http://localhost:3000/employeedetail',
            method:'POST',
            headers:{authorization:'Bearer'+window.localStorage.getItem('token')},
            contentType:'application/json',
            data: JSON.stringify(myWorkDetailData),

            success:function(result,status){
                console.log(result);
                console.log(status);
                $('#message').append(' <div class="alert alert-success" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ result.message+'          \n' +
                    '            </div>');

            },

            error:function (jqXHR,status) {
                console.log(status);
                // console.log(jqXHR.responseJSON.message);
                $('#workprofileexist').append(' <div class="alert alert-danger" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ jqXHR.responseJSON.message+'          \n' +
                    '            </div>');
            }

        })
    })


})
