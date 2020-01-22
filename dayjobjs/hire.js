$(document).ready(function () {

    $('#userdropdowndetail').on('click','#btnhireme',function (e) {
        e.preventDefault();
        console.log('click hire')
        console.log($(this));
        var hirerid=window.localStorage.getItem('userid');
        var hirerfirstName=window.localStorage.getItem('firstname');
        var hirerlastName=window.localStorage.getItem('lastname');
        var hirerphone=window.localStorage.getItem('phone');
        var hireraddress=window.localStorage.getItem('address');
        var hireremail=window.localStorage.getItem('email');
        var hirerimage=window.localStorage.getItem('image');
        var employeeId=$(this)[0].attributes.employeeid.nodeValue;
        var Experiance=$(this)[0].attributes.expe.nodeValue;
        var JobCompleted=$(this)[0].attributes.job.nodeValue;
        var Skill=$(this)[0].attributes.skill.nodeValue;
        var Language=$(this)[0].attributes.lang.nodeValue;
        var Payment=$(this)[0].attributes.pay.nodeValue;
        var Working=$(this)[0].attributes.work.nodeValue;
        var Cost=$(this)[0].attributes.cost.nodeValue;
        var Available=$(this)[0].attributes.available.nodeValue;
        var firstName=$(this)[0].attributes.fn.nodeValue;
        var lastName=$(this)[0].attributes.ln.nodeValue;
        var email=$(this)[0].attributes.email.nodeValue;
        var phone=$(this)[0].attributes.phone.nodeValue;
        var address=$(this)[0].attributes.address.nodeValue;
        var gender=$(this)[0].attributes.gender.nodeValue;
        var image=$(this)[0].attributes.image.nodeValue;
        var userId=$(this)[0].attributes.uid.nodeValue;

        var myFormdata={
            hirerid:hirerid,
            hirerfirstName:hirerfirstName,
            hirerlastName:hirerlastName,
            hirerphone:hirerphone,
            hireraddress:hireraddress,
            hireremail:hireremail,
            hirerimage:hirerimage,
            employeeId:employeeId,
            userId:userId,
            Skill:Skill,
            Experiance:Experiance,
            JobCompleted:JobCompleted,
            Language:Language,
            Payment:Payment,
            Working:Working,
            Cost:Cost,
            Available:Available,
            image:image,
            firstName:firstName,
            lastName:lastName,
            phone:phone,
            address:address,
            email:email,
            gender:gender,
            status:'0'

        }

        var booke = confirm("Are you sure?");

        if (booke == true) {
            $.ajax({
                url: 'http://localhost:3000/employeebook',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(myFormdata),
                dataType: 'json',

                success: function (result, status) {
                    console.log(result);
                    console.log(status);
                    $('#errormess').append(' <div class="alert alert-success" >\n' +
                        '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                        '         ' + result.message + '          \n' +
                        '            </div>');

                },

                error: function (jqXHR, status) {
                    console.log(status);
                    $('#errormess').append(' <div class="alert alert-danger" >\n' +
                        '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                        '         '+ jqXHR.responseJSON.message+'          \n' +
                        '            </div>');

                }

            })
        }
        else{
            window.location.href = "hirerdashboard.html";
        }


    })






    $('#usersData').on('click','#hire',function(event) {
        event.preventDefault();

        var employeeid=$(this)[0].attributes.employeeid.nodeValue;

        $.ajax({

            url:'http://localhost:3000/viewemployeedetail/'+employeeid,
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
                var image=result.image;
                var firstname=result.firstName;
                var lastname=result.lastName;
                var phone=result.phone;
                var address=result.address;
                var gender=result.gender;
                var email=result.email;

                // $('#skillname').val(skill)
                // $('#exp').val(experiance)
                // $('#job').val(job)
                // $('#lang').val(language)
                // $('#paymentmethod').val(pay)
                // $('#workingday').val(work)
                // $('#cost').val(cost)
                // $('#available').val(available)
                // $('#user_id').val(userid)
                // $('#employee_id').val(employeeid)
                // $('#eid').val(employeeid)

                $('#userdropdowndetail').append(
                    '              <div class="modal-content w-auto">\n' +
                    '                <div class="modal-header">\n' +
                    '                  <h5 class="modal-title" ><b>'+firstname+" "+lastname+' </b><br> <span class="work">'+state+", " +city+", " +address+'<br><span><b>Rs. '+cost+'</b></span>/hr '+skill +' for '+experiance+'<br>'+gender +'</span></h5>' +
                    '  <a href="hirerdashboard.html"> <button class="close" type="button" aria-label="Close">\n' +
                    '                  <span aria-hidden="true">×</span>\n' +
                    '                </button></a>\n' +
                    '                </div>\n' +
                    '\n' +
                    '                <div class="modal-body">\n' +
                    '                  <div class="row">\n' +
                    '                    <div class="col-sm-6 w-50">\n' +
                    '                      <div class="image-pad" >\n' +
                    '                        <img class="card-img-top-lg-5" src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend/uploads/'+image+'"\n' +
                    '                                                   alt="product" height="150px" width="200px">\n' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="col-sm-6 w-50" >\n' +
                    '                      <div class="pro-detail">\n' +
                    '                        <div class="page-header">\n' +
                    '                          <div class="detail" align="center"> '+email+'</div>\n' +
                    '                          <div class="detail" align="center"> '+phone+'</div>\n' +
                    '                          <div class="detail" align="center"> '+language+'</div>\n' +
                    '                          <div class="detail" align="center"> '+job+'</div>\n' +
                    '                         <div class="detail" align="center"><button type="button" class="btn btn-info btn-sm">'+work +'</button></div>\n' +
                    '   <div class="detail" align="center"><button type="button" class="btn btn-info btn-sm">'+pay +'</button></div>\n' +
                    '                          <div class="detail"align="center" ><span></span>'+((available==1)?'<span class="line-right">Available</span>':'<span class="line-wrong">Unavailable</span>')+' </div>\n' +
                    // '                          <div class="form-wrapper">\n' +
                    // '                            <input type="text" class="form-control" placeholder="6 to 12 days" id="day" name="day" required>\n' +
                    // '                          </div>\n' +
                    '                          <p id="errormess"></p><p id="errormess"></p>\n' +
                    '\n' +
                    '                          <button class="formbutton" id="btnhireme" uid="'+userid+'" ' +
                    '  fn="'+ firstname + '" ln="'+ lastname + '"' +
                    ' email="'+ email + '" ' +
                    '"  phone="'+ phone + '" ' + '" address="'+ address + '"  gender="'+gender+ '"' +
                    ' work="'+ work + '" cost="'+ cost + '" available="'+ available + '"' +
                    ' skill="'+skill+'" expe="'+ experiance + '" job="'+ job + '" ' +
                    ' lang="'+language + '" pay="'+ pay+ '" image="'+image + '" ' +
                    ' employeeid="'+ employeeid+'">hire me</button><br>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                  </div>\n' +
                    '\n' +
                    '                </div>\n' +
                    '              </div>\n' +
                    '            </div>')


            },

            error:function(jqXHR,status) {
                $('#errormess').append(' <div class="alert alert-danger" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ jqXHR.responseJSON.message+'          \n' +
                    '            </div>');
            }
        })
    })

    $('#bookdetail').on('click','#btndeletebook',function () {

        console.log('click');
        console.log($(this));
        var bookid=$(this)[0].attributes.bookid.nodeValue;

        var del = confirm("Are you sure?");

        if (del == true){

            $.ajax({
                url:'http://localhost:3000/deletebook/'+bookid,
                method:'DELETE',
                dataType: 'json',
                success: function(result){
                    window.location.href = "bookingdetail.html";
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
            window.location.href = "bookingdetail.html";
        }

    })

    var userid=window.localStorage.getItem('userid');

    $.ajax({
        url:'http://localhost:3000/book/'+userid,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success:function(result,status){
            console.log(result);

            for (key in result) {
                console.log(result[key])
            }
            for (key in result){
                $('#bookdetail').
                append('   <tr >\n' +
                    '                <td align="center">\n' +
                    '                  <img src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend2/uploads/'+result[key].image +'" alt="worker image" height="100px" width="140px"></td>\n' +
                    '                <td> <h5>'+result[key].firstName+" "+result[key].lastName +'</h5>\n' +
                    '                  <div class="details">\n' +
                    '                    <br> <span>Rs. </span>'+result[key].Cost+'/hr'+" "+result[key].Skill +" "+' for'+" "+result[key].Experiance +'\n' +
                    '                    <br>'+result[key].gender + '\n'+
                    '                    <br> '+result[key].JobCompleted +'\n' +
                    '                    <br> '+result[key].state+', '+result[key].city +', '+result[key].address +'\n' +
                    '                  </div>\n' +
                    '\n' +
                    '                </td>\n' +
                    '                <td align="center">'+result[key].email +'<br>'+result[key].phone +' </td>\n' +
                    '                <td align="center">'+result[key].Language +'</td>\n' +
                    '                <td align="center">\n' +
                    '                 '+ (((result[key].status)==1)?'<span class="line-right">Approved</span>':'<span class="line-wrong">NotApproved</span>')+ ' </td>\n' +
                    '                <td align="center">\n' +
                    '                 '+ (((result[key].Available)==1)?'<span class="line-right">Available</span>':'<span class="line-wrong">Unavailable</span>')+ '</td>\n' +
                    '                   <td align="center">'+result[key].updatedAt +'</td> \n'+
                    '                     <td align="center"> <button type="submit" value="Delete" id="btndeletebook" bookid="'+result[key].bookId+'" class="btn btn-info btn-sm"><i class="fa fa-trash-alt"></i></button>\n' +
                    '                </td>\n' +
                    '              </tr>')
            }
        },

        error:function (jqXHR,status) {
            console.log(status);

        }

    })

})