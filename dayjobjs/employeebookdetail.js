$(document).ready(function () {
    // $('#available').on('change', function(){
    //     this.value = this.checked ? 1 : 0;
    // }).change();

$('#bookdetail').on('click','#btnapprovebook',function (p) {
    p.preventDefault();
    $('#available').on('change', function(){
        this.value = this.checked ? 1 : 0;
    }).change();
    $('#status').on('change', function(){
        this.value = this.checked ? 1 : 0;
    }).change();
    console.log('click');
    console.log($(this)[0].attributes.bookId.nodeValue);
    console.log($('#status').val());
    console.log($('#available').val());

  var bookid=$(this)[0].attributes.bookId.nodeValue;

    var UpdateData={
        status:$('#status').val(),
        Available:$('#available').val()
    }


    $.ajax({

        url: 'http://localhost:3000/editbookstatus/'+bookid ,
        method: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        data:JSON.stringify(UpdateData),
        success: function(result) {
            // console.log(result)

            $('#message').append(' <div class="alert alert-success" >\n' +
                '                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
                '         '+ result.message+'          \n' +
                '            </div>');
            window.location.href = "employeebookdetail.html";

        },
        error: function(jqXHR) {
            console.log(jqXHR)
        }

    })
})



var userid=window.localStorage.getItem('userid');
console.log(userid);

$.ajax({

   url:'http://localhost:3000/employeebookdetail/'+userid,
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
                '                  <img src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend/uploads'+result[key].hirerimage +'" alt="worker image" height="110px" width="110px"></td>\n' +
                '                <td> <h5>'+result[key].hirerfirstName+" "+result[key].hirerlastName +'</h5>\n' +
                '\n' +
                '                </td>\n' +
                '                <td align="center">'+result[key].hireremail +'<br>'+result[key].hirerphone +' </td>\n' +
                '                <td align="center"> '+result[key].city +', '+result[key].address +'</td>\n' +
                '                <form id="updatebook" method="post"><td align="center">\n' +
                '                 '+ (((result[key].status)==1)?'<span class="line-right">Approved</span>':'<span class="line-wrong">Not Approved</span>')+ ' \n' +
                '              <div class="form-wrapper">\n' +
                '                                <br><input type="checkbox" name="status" value="1" value="" id="status" '+(((result[key].status)==1)? 'checked':'')+'/>\n' +
                '                            </div> </td>' +
                ' <td align="center">\n' +
                '                 '+ (((result[key].Available)==1)?'<span class="line-right">Available</span>':'<span class="line-wrong">Unavailable</span>')+ ' \n' +
                '              <div class="form-wrapper">\n' +
                '                                <br><input type="checkbox" name="available" value="1" value="" id="available" '+(((result[key].Available)==1)? 'checked':'')+'/>\n' +
                // '        <div class="form-group">\n' +
                // '                <select name="available" id="available" value="'+result[key].Available+'" class="form-control">\n' +
                // '                    <option value="1">Available</option>\n' +
                // '                    <option value="0">Unavailable</option>\n' +
                // '                </select>\n' +
                '            </div>   \n'+
                '                            </div> </td>' +
                ' <td align="center">\n' +
                '             ' +
                ' <button type="submit" value="Update" id="btnapprovebook" bookid="'+result[key].bookId+'" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button></form> \n' +
                '                </td>\n' +
                '              </tr>')
        }
    },

    error:function (jqXHR,status) {
        console.log(status);

    }

})

})