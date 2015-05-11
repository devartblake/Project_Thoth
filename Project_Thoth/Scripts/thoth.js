// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closed the responsive menu on menu item click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function () {
    $.getJSON('http://jsbin.com/lokiqu/2.json').done(function (data) {
        var dataSources = [];
        var data = data['friends'];
        var i, j, data, chunkSize = 2;
        for (i = 0, j = data.length; i < j; i += chunkSize) {
            tempArray = data.slice(i, i + chunkSize);
            var d = $.map(tempArray, function (item) {
                return {
                    item: item
                };
            });
            dataSources.push(getDataSources(d));
        }
        return initTypeahead(dataSources);
    });

    function getDataSources(data) {
        var dataset = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('item'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: data,
            limit: 1
        });
        dataset.initialize();
        var src = {
            displayKey: 'item',
            source: dataset.ttAdapter(),
            template: [
                '<p class="name">{{name}}</p>',
                '<p class="description">{{description}}</p>'
            ].join(''),
        }
        return src;
    }

    function initTypeahead(data) {
        $('.twitter-typeahead').typeahead({
            highlight: true
        }, data);
    }
});

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function () {
    var docElem = document.documentElement,
		header = document.querySelector('.navbar-default'),
		didScroll = false,
		changeHeaderOn = 300;

    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'navbar-shrink');
        }
        else {
            classie.remove(header, 'navbar-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();
})();

/* QRCode */
var QRCode = (function () {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 100,
        height: 100
    });

    function makeCode() {
        var elText = document.getElementById("text");

        if (!elText.value) {
            alert("Input a text");
            elText.focus();
            return;
        }

        qrcode.makeCode(elText.value);
    }
    makeCode();

    $("#text").
      on("blur", function () {
          makeCode();
      }).
      on("keydown", function (e) {
          if (e.keyCode == 13) {
              makeCode();
          }
      });
});