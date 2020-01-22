$(document).ready(function () {



    var userid=window.localStorage.getItem('userid');
    $.ajax({

        url:'http://localhost:3000/vieweachusers/'+userid,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

            $('#myprofile').append(' <div class="col-lg-1"></div><div class="gender-photo">\n' +
                '                    <img src="file:///C:/Users/Rajib/OneDrive/Desktop/JobPortal_Backend2/uploads/'+result.image +'" alt="image" height="220px" width="263px">\n' +
                '\n' +
                '                </div></div>\n' +
                '                <div class="table-horizontal col-lg-7">\n' +
                '                    <table class="table table-striped table-dark table-hover table-bordered">\n' +
                '                        <tbody>\n' +
                '                        <tr >\n' +
                '                            <td > Name</td>\n' +
                '                            <td align="right">'+result.firstName +" "+ result.lastName+'</td>\n' +
                '                        </tr>\n' +
                '\n' +
                '                        <tr>\n' +
                '                            <td>Phone number</td>\n' +
                '                            <td align="right">'+result.phone+'</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <td>Address</td>\n' +
                '                            <td align="right">'+result.address+'</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <td>Email</td>\n' +
                '                            <td align="right">'+result.email+'</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <td>Gender</td>\n' +
                '                            <td align="right">'+result.gender+'</td>\n' +
                '                        </tr>\n' +
                '                        </tbody>\n' +
                '\n' +
                '\n' +
                '                    </table>\n' +
                '\n' +
                '                </div>\n' +
                '            </div>\n' +
                '                <div>');


        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })
})