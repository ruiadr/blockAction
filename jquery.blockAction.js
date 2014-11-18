
(function ($) {
    $.fn.blockAction = function (callback) {
        $(this).each (function () {
            var links = $(this).find ('a');
            if (links.length == 0) return false;
            links.off ('click');
            var url = null, external = null;
            $(links).each (function () {
                if ((url = $.trim ($(this).attr ('href'))) !== '') {
                    external = /external/i.test ($(this).attr ('rel')) ? true : false;
                    return false;
                }
                url = null;
            });
            if (url !== null) {
                $(this).click (function (e) {
                    e.preventDefault ();
                    if (callback !== undefined && typeof callback == 'function') {
                        callback ($(this), url);
                    } else {
                        if (external) window.open (url);
                        else window.location.href = url;
                    }
                });
            }
        });
    }; // blockAction ();
})(jQuery);
