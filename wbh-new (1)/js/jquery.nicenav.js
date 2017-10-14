; (function ($) {
    $.extend({
        'nicenav': function (con) {
            con = typeof con === 'number' ? con : 400;
            var $lis = $('.infotopcc>a'), $h = $('#buoy')
            $lis.click(function () {
                $h.stop().animate({
                    'left': $(this).offsetParent().context.offsetLeft,
                }, con);

            }, function () {
                $h.stop().animate({
                    'left': '-180px'
                }, con);
            })
        }
    });
}(jQuery));