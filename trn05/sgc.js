$(function () {


    var TXT = ['HOME', '01', '02', '03', '04', 'ysl']
    // fullpage
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(() => {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });

            // document.querySelectorAll('.section').forEach(el => {
            //     el.classList.add('on')})
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);
            // $('.this_page').text(page);
            // $('.this_bg').css({
            //     backgroundPositionY: - 100 * (num - 1) + "px"
            // });
            // $('.this_pic img').attr({
            //     src: `./assets/img/lesedilarona0${num}.jpg`
            // });
            // $('.this_tp').css({
            //     backgroundImage: `url(./assets/img/lesedilarona0${num}.jpg)`
            // })
        },
    });
    $('.page03').on('wheel', function () {
        console.log(e.originalEvent.wheelDelta);
        e.originalEvent.wheelDelta > 0 && fullpage
    })
    // $('.Gnb li').


})