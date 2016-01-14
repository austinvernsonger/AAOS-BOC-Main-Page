function backToTop() {
    var backToTopLink = $('.back-to-top-link');
    var whereAmI = $(document).scrollTop();
    if (whereAmI > 200) {
        backToTopLink.addClass('scrolled-down');
    }
    else {
        backToTopLink.removeClass('scrolled-down');
    };
}

function InitShareButton() {
    //ShareButton
    // needs configuration
    new ShareButton({
        networks: {
            facebook: {
                // enabled:      // Enable Facebook. [Default: true]
                // load_sdk:     // Load the FB SDK. If false, it will default to Facebook's sharer.php implementation. 
                //               // NOTE: This will disable the ability to dynamically set values and rely directly on applicable Open Graph tags.
                //               // [Default: true]
                // url:          // the url you'd like to share to Facebook [Default: config.url]
                // app_id:       // Facebook app id for tracking shares. if provided, will use the facebook API
                // title:        // title to be shared alongside your link to Facebook [Default: config.title]
                // caption:      // caption to be shared alongside your link to Facebook [Default: null]
                // description:  // text to be shared alongside your link to Facebook [Default: config.description]
                // image:        // image to be shared to Facebook [Default: config.image]
            },
            twitter: {
                // enabled:      // Enable Twitter. [Default: true]
                // url:          // the url you'd like to share to Twitter [Default: config.url]
                // description:  // text to be shared alongside your link to Twitter [Default: config.description]
            },
            linkedin: {
                // enabled:      // Enable LinkedIn. [Default: true]
                // url:          // the url you'd like to share to LinkedIn [Default: config.url]
                // title:        // title to be shared alongside your link to LinkedIn [Default: config.title],
                // description:  // text to be shared alongside your link to LinkedIn [Default: config.description]
            },
            email: {
                // enabled:      // Enable Email. [Default: true]
                // title:        // the subject of the email [Default: config.title]
                // description:  // The body of the email [Default: config.description]
            },
            googlePlus: {
                enabled: true
            },
            pinterest: {
                enabled: true
            },
            reddit: {
                enabled: true
            }
        }
    });
    //end ShareButton
}

// Stops Propagation of Click Event in Dropdown Menu(s)
$(function () {
    
    var isPersonifymaster = $('.personify-master-identifier');
    if (isPersonifymaster == null || isPersonifymaster.length == 0) {
        // Setup drop down menu
        $('.dropdown-toggle').dropdown();
    }

    // Fix input element click problem
    $('.dropdown select, .dropdown label, .form-control').click(function (e) {
        e.stopPropagation();
    });

    $('.dropdown input.btn').click(function (e) {
        //e.stopPropagation();
    });

    $('.form-group select.form-control, .form-control').hover(function (e) {
        e.stopPropagation();
    });

    if ($(window).width() >= 992) {
        $('.yamm-fw').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
        }, function () {
            $(this).removeClass("open");
            $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
        });
    }

    // Push Menu
    function push_menu() {
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        sideslider.click(function (event) {
            $(sel).toggleClass('in');
            $('body').toggleClass('hidden-overflow');
        });
    }
    push_menu();


    // Append fa icon in front of button text
    $('body').find('button.btn , a.btn').each(function () {
        $(this).append('<i class="fa fa-caret-right"></i>');
    });

    $('body').on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
        return false;
    });
});

jQuery(function ($) {
    $(document).ready(

        //function 1
        function () {
            $('.mobile-offCanva-toggler').on('click', function () {
                $('.off-canvas-wrapper').toggleClass('oc-collapse');
            });

            if ($(window).width() <= 991) {
                $('.off-canvas-wrapper').addClass('off-canvas-mobile oc-collapsed');
            }
            $(window).resize(function () {
                if ($(window).width() <= 991) {
                    $('.off-canvas-wrapper').addClass('off-canvas-mobile oc-collapsed');
                }
                else {
                    $('.off-canvas-wrapper').removeClass('off-canvas-mobile oc-collapsed oc-collapse');
                }
            });

            $('body').on('click', function (e) {
                if ($(e.target).closest(".my-aaos-form").length > 0) {
                    //return false;
                }
                else {
                    $('body').find('.my-aaos.open input[type="text"], .my-aaos.open input[type="password"]').val('');
                    $('body').find('.my-aaos.open input[type="checkbox"]').attr('checked', false);
                    $('body').find('.my-aaos').removeClass('open');
                }
            });
        }
        // end function 1

    ); // end ready


    $('.form-control-feedback').on('click', function () {
        $(this).closest('.form-group').find('.form-control').val('');
    });

    $('.sharing-options-toggler').on('click', function () {
        $('.sharing-options-list').toggleClass('in');
    });

    // Smooth scroll to anchor in page
    $('.anchor-links a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});

$('[data-toggle="menu"]').on('click', function (e) {
    $(this).closest('li').toggleClass('open-parent');
    e.preventDefault();
});

$('[data-toggle="submenu"]').on('click', function (e) {
    $(this).closest('li').toggleClass('open-child');
    e.preventDefault();
});

$('[data-toggle="filter"]').on('click', function (e) {
    $(this).closest('.label').hide();
});

/*back to top*/

$(function () {
    var isPersonifymaster = $('.personify-master-identifier');
    if (isPersonifymaster == null || isPersonifymaster.length == 0) {
        $(window).on('load', backToTop);
        $(window).on('scroll', backToTop);
    }
});

function directNavLinkBehavior(theDirectNavLink) {
    if (theDirectNavLink != null && theDirectNavLink.target != null && theDirectNavLink.target.href != null) {
        //var hrefOfItemClicked = theDirectNavLink.target.href;
        //alert(hrefOfItemClicked);
        window.location.href = theDirectNavLink.target.href;
    }
}

$(function () {
    if ($(window).width() > 767) {
        var directNavLink = $('.dropdown.yamm-fw > a');
        directNavLink.mousedown(directNavLinkBehavior);
    }
});

$(function () {
    if ($(window).width() > 767) {
        var directNavLink = $('.nav.navbar-nav.navbar-collapse > li > a');
        directNavLink.mousedown(directNavLinkBehavior);
    } else {
        var lnk = $('.nav.navbar-nav.navbar-collapse > li.direct-nav > a');
        lnk.mousedown(directNavLinkBehavior);
    }
});

$(function () {
    var sharewrap = $('.share-wrap .sharer-0');
    if (sharewrap != null && sharewrap.length > 0) {
        InitShareButton();
    }
});

$('[data-toggle="subnav"]').on('click', function (e) {
    $(this).closest('.submenu-wrap').toggleClass('open');
    e.preventDefault();
});

function openwin(urlRequest) {
    if (null == urlRequest) return;
    if (urlRequest.indexOf("http://www3.aaos.org/aaos_web/external/external.cfm?ext_link=www.") == 0) {
        var openurl = urlRequest.replace("http://www3.aaos.org/aaos_web/external/external.cfm?ext_link=www.", "http://www.");
        window.open(openurl);
    }
}
