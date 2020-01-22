$(document).ready(function () {

    var eid;

    $('#usersData').on('click','#btnaddtofav',function(event){
        event.preventDefault();
        // console.log('click')
        // console.log($(this));
        eid=$(this)[0].attributes.employeeid.nodeValue;

        var userid=window.localStorage.getItem('userid');
        var exp=$(this)[0].attributes.expe.nodeValue;
        var job=$(this)[0].attributes.job.nodeValue;
        var skill=$(this)[0].attributes.skill.nodeValue;
        var language=$(this)[0].attributes.lang.nodeValue;
        var pay=$(this)[0].attributes.pay.nodeValue;
        var work=$(this)[0].attributes.work.nodeValue;
        var cost=$(this)[0].attributes.cost.nodeValue;
        var available=$(this)[0].attributes.available.nodeValue;
        var fn=$(this)[0].attributes.fn.nodeValue;
        var ln=$(this)[0].attributes.ln.nodeValue;
        var email=$(this)[0].attributes.email.nodeValue;
        var phone=$(this)[0].attributes.phone.nodeValue;
        var address=$(this)[0].attributes.address.nodeValue;
        var gender=$(this)[0].attributes.gender.nodeValue;
        var image=$(this)[0].attributes.image.nodeValue;

        var myFormdata={
            employeeId:eid,
            userId:userid,
            Skill:skill,
            Experiance:exp,
            JobCompleted:job,
            Language:language,
            Payment:pay,
            Working:work,
            Cost:cost,
            Available:available,
            image:image,
            firstName:fn,
            lastName:ln,
            phone:phone,
            address:address,
            email:email,
            gender:gender
        }
        var fav = confirm("Are you sure?");

        if (fav == true){
        $.ajax({
            url:'http://localhost:3000/addtofav',
            method:'POST',
            contentType:'application/json',
            data: JSON.stringify(myFormdata),
            dataType:'json',

            success:function(result,status){
                console.log(result);
                console.log(status);
                $('#message').append(' <div class="alert alert-success" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ result.message+'          \n' +
                    '            </div>');

            },

            error:function (jqXHR,status) {
                // console.log(status);
                // console.log(jqXHR.responseJSON.message);
                $('#favexist').append(' <div class="alert alert-danger" >\n' +
                    '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                    '         '+ jqXHR.responseJSON.message+'          \n' +
                    '            </div>');
            }

        })
            }
        else {
            window.location.href = "hiredashboard.html";
        }

        // console.log(skill);
        // console.log(userid);
        // console.log(exp);
        // console.log(job);

    })
    
})


    $.ajax({

    url:'http://localhost:3000/usersdetail',
    method:'GET',
    contentType:'application/json',
    dataType:'json',

    success:function(result,status){
        console.log(result);
        // window.localStorage.setItem('firstName',result.result.firstName)
        // for (key in result){
        //       console.log(result[key].firstName);
        //       $('#usersData').
        //       append('<li class="list-group-item">'+result[key].firstName+" "+result[key].lastName+'</li>')
        // }
        // $('#message').html(result.message);


        for (key in result){
            $('#usersData').
            append('<div class="userdetailfloat col-lg-3 col-md-6 mb-4"> <div class="card">\n' +

                '            <div class="picture-padding"><a href="" id="hire" data-toggle="modal" data-target="#hireme" employeeid="'+result[key].employeeId+'">' +
                '<img class="card-img-top " src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend2/uploads/'+result[key].image +'" alt="product" height="200px" width="200px"></a></div>\n' +
                '        ' +
                '            <div class="card-body">\n' +
                '             <div class="brand"> <h4 class="card-title"><b>'+ result[key].firstName +" "+ result[key].lastName +  '</b></h4></div>\n' +
                '              <div class="userdetailoutput"> <h5 class="card-title"></h5> '+ result[key].Skill +" for "+ result[key].Experiance +  '</div>\n' +
                '              <div class="userdetailoutput"><p class="card-text">'+result[key].gender + '</div></p>\n' +
                '              <div class="userdetailoutput"><p class="card-text"><span>Rs.</span> '+ result[key].Cost + "/hr"+ '</div></p>\n' +
                '              <div class="userdetailoutput"><p class="card-text">'+ result[key].address+'</p></div>\n' +
                '              <div class="userdetailoutput"><p class="card-text">'+ result[key].email+ '</div></p>\n' +
                '              <div class="userdetailoutput"><p class="card-text"> '+ result[key].phone+ '</div></p>\n' +
                '              <div class="userdetailoutput"><p class="card-text"><span>Status: </span> '+ (((result[key].Available)==1)?'<span class="line-right">Available</span>':'<span class="line-wrong">Unavailable</span>')+ '</div></p>\n' +
                '             <input type="button" class="formbutton" uid="'+ result[key].userId + '" ' +
                '  fn="'+ result[key].firstName + '" ln="'+ result[key].lastName + '"' +
                ' email="'+ result[key].email + '" '+ '"  phone="'+ result[key].phone + '"' 
                + '" address="'+ result[key].address + '"  gender="'+ result[key].gender + '"' +
                ' work="'+ result[key].Working + '" cost="'+ result[key].Cost + '" available="'+ result[key].Available + '"' +
                '         skill="'+result[key].Skill+'" expe="'+ result[key].Experiance + '" job="'+ result[key].JobCompleted + '" ' +
                ' lang="'+ result[key].Language + '" pay="'+ result[key].Payment + '" image="'+ result[key].image + '" ' +
                'id="btnaddtofav" employeeid="'+ result[key].employeeId +'" name="btnfav" value="Favourite" >\n' +
                '            </div>\n' +
                '          </div> </div>')
        }
        // window.location.href="hirerdashboard.html"

    },

    error:function (jqXHR,status) {
        console.log(status);
        // console.log(jqXHR.responseJSON.message);
        // $('#message').html(jqXHR.responseJSON.message);
    }

})


