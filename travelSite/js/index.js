/**
 * Created by Administrator on 2017/8/12.
 */
$(function () {
    $("*").click(function () {
        if ($(this).is(".listtitle")) {
            $(".headernav").slideDown(500);
        }
        else if ($(this).is("a")) {
           location.href=$(this).attr("href");
        }
        else {
            $(".headernav").slideUp(500);
        }
        return false;
    });
});