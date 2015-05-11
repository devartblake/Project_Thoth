define('cookie', ['window', 'document', './module', './namespace'], function (window, document, module, namespace) {
    'use strict';

    function setCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        var host = window.location.host;
        var baseDomain = host.substring(host.indexOf("."), host.length);

        document.cookie = name + "=" + value + expires + "; path=/;domain=" + baseDomain;
    };

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == '') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
        }
        return null;
    };

    function deleteCookie(name) {
        setCookie(name, "", -1);
    };

    // Client Local Time Offset (to UTC time)
    try {
        var utcOffsetMinutes = new Date().getTimezoneOffset() * -1;
        setCookie("UtcOffsetMinutes", utcOffsetMinutes, 30);
    }
    catch (e) {
    }

    function getCookieKeyValue(cookieName, keyName) {
        var cookie = getCookie(cookieName);

        if (cookie && keyName) {
            for (var u = cookie.split("&"), r = 0; r < u.length; r++) {
                var keyvalue = u[r].split("=");
                if (keyvalue[0] && keyName.toLowerCase() === keyvalue[0].toLowerCase()) {
                    return keyvalue[1];
                }
            }
        }
        return null;
    }
    return {
        getCookie: getCookie,
        setCookie: setCookie,
        deleteCookie: deleteCookie,
        getCookieKeyValue: getCookieKeyValue
    };
});