$(document).ready(function () {



    var userid=window.localStorage.getItem('userid');
    $.ajax({

        url:'http://localhost:3000/viewoneemployee/'+userid,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

            $('#workdetailprofile').append(' <div class="col-lg-4"></div>\n'+
                '                <div class="table-horizontal col-lg-7">\n' +
                '                    <table class="table table-striped table-dark table-hover table-bordered">\n' +
                '                        <tbody>\n' +
            '    <tr >\n' +
            '                            <td > Skill</td>\n' +
            '                            <td align="right">'+result.Skill+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Experiance</td>\n' +
            '                            <td align="right">'+result.Experiance+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Language</td>\n' +
            '                            <td align="right">'+result.Language+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Payment Method</td>\n' +
            '                            <td align="right">'+result.Payment+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Working Days</td>\n' +
            '                            <td align="right">'+result.Working+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Working Salary</td>\n' +
            '                            <td align="right"><span>Rs. </span>'+result.Cost+' /hr </td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Available</td>\n' +
            '                            <td align="right">'+ (((result.Available)==1)?'<span class="line-right">Available</span>':'<span class="line-wrong">Unavailable</span>')+ '</td>\n' +
            '                        </tr>\n'+
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