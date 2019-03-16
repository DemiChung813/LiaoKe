
$(function () {
    $(window).on("resize",function () {
        //1.1获取窗口的宽度
        var clientW = $(window).width();

        //1.2设置临界值
        var isShowBigImage = clientW >= 800;

        //1.3获取所有的item
        var $allItems = $("#lk_carousel .item");

        //1.4遍历
        $allItems.each(function (index,item) {
            //1.4.1取出图片的路径
            var src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            var imgUrl = 'url("' + src +'")';

            //1.4.2设置背景
            $(item).css({
                backgroundImage: imgUrl
            }
        });
    })
});