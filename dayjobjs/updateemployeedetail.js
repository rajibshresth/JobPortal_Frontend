$(document).ready(function () {


    var userid=window.localStorage.getItem('userid');

    $.ajax({

        url:'http://localhost:3000/viewoneemployee/'+userid,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {
            console.log(result);


            // if (result.employeeId=''){
            //         $('#emptyprofile').append(' <div class="alert alert-danger" >\n' +
            //             '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
            //             '         '+ "Your work profile is Empty...Please Add your work profile "+'          \n' +
            //             '            </div>');
            //
            // }
                var employeeid = result.employeeId;
                var skill = result.Skill;
                var experiance = result.Experiance;
                var job = result.JobCompleted;
                var language = result.Language
                var pay = result.Payment;
                var work = result.Working;
                var cost = result.Cost;
                var available = result.Available;
                var userid = result.userId;


                $('#skillname').val(skill)
                $('#exp').val(experiance)
                $('#job').val(job)
                $('#lang').val(language)
                $('#paymentmethod').val(pay)
                $('#workingday').val(work)
                $('#cost').val(cost)
                // $('#available').val(available)
                $('#user_id').val(userid)
                $('#employee_id').val(employeeid)
                $('#eid').val(employeeid)

            $('#checkboxavailable').append('    <div class="form-wrapper">\n' +
                '                                <br><input type="checkbox" name="available" value="1" value="" id="available" '+(((available)==1)? 'checked':'')+'/>\n' +
                '                            </div> ')


        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })

    $('#available').on('change', function(){
        this.value = this.checked ? 1 : 0;
    }).change();
    $('#updateemployeework').on('click','#btnupdateemp',function(p) {
        p.preventDefault();
        $('#available').on('change', function(){
            this.value = this.checked ? 1 : 0;
        }).change();
        console.log('udate press');
        var uid=window.localStorage.getItem('userid');
        var eid=$('#eid').val();
        var updateData = {
            Skill:$('#skillname').val(),
            Experiance:$('#exp').val(),
            JobCompleted: $('#job').val(),
            Language: $('#lang').val(),
            Payment:$('#paymentmethod').val(),
            Working:$('#workingday').val(),
            Cost: $('#cost').val(),
            Available: $('#available').val()
        }


        $.ajax({

            url: 'http://localhost:3000/editworkdetail/'+eid ,
            method: "PUT",
            contentType: 'application/json',
            dataType: 'json',
            data:JSON.stringify(updateData),
            success: function(result) {
                // window.location.href = "updateregisterprofile.html"
                $('#message').append(' <span class="alert alert-success" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ result.message+'          \n' +
                    '            </span>');


            },
            error: function(jqXHR) {
                console.log(jqXHR)
            }

        })

    })

    $('#btndeletemp').click(function () {
        // console.log('delete pressed');
        var eid=$('#employee_id').val();
        var userid=$('#user_id').val();

        var del = confirm("Are you sure?");

        if (del == true){

            $.ajax({
                url:'http://localhost:3000/deleteworkdetail/'+eid,
                method:'DELETE',
                dataType: 'json',
                success: function(result){
                     window.location.href = "registerworkdetail.html";
                    $('#message').append(' <div class="alert alert-success" >\n' +
                        '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                        '         '+ result.message+'          \n' +
                        '            </div>');
                },
                error: function (jqXHR) {
                    console.log(jqXHR);
                }

            })
        }
        else {
            window.location.href = "updateemployeeworkprofile.html";
        }

    })

})