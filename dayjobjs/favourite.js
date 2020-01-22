$(document).ready(function () {

    $('#favouritedata').on('click','#btndeletefav',function () {

        // console.log('click');
        var favid=$(this)[0].attributes.favid.nodeValue;

        var del = confirm("Are you sure?");

        if (del == true){

            $.ajax({
                url:'http://localhost:3000/deletefavourite/'+favid,
                method:'DELETE',
                dataType: 'json',
                success: function(result){
                    window.location.href = "favourite.html";
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
            window.location.href = "favourite.html";
        }
    })



    var userid=window.localStorage.getItem('userid');

    $.ajax({

        url:'http://localhost:3000/favourite/'+userid,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success:function(result,status){
            console.log(result);

            for (key in result) {
                console.log(result[key])
            }
            for (key in result){
                $('#favouritedata').
                append('   <tr >\n' +
                    '                <td align="center">\n' +
                    '                  <img src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend/uploads/'+result[key].image +'" alt="worker image" height="110px" width="110px"></td>\n' +
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
                    '                 '+ (((result[key].Available)==1)?'<span class="line-right">Available</span>':'<span class="line-wrong">Unavailable</span>')+ '</td>\n' +
                    '                <td align="center">\n' +
                    '                      <button type="submit" value="Delete" id="btndeletefav" favid="'+result[key].favId+'" class="btn btn-info btn-sm"><i class="fa fa-trash-alt"></i></button>\n' +
                    '                </td>\n' +
                    '              </tr>')
            }
        },

        error:function (jqXHR,status) {
            console.log(status);

        }

    })
})