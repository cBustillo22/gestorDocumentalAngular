
function name(){

$('#para-menu li a').on('click', function (e) {
    e.preventDefault();
    let pageSection = $(this).parent().index();
    let lastPage = $('#pagepiling').find('section').length;
    pageSection++;
    $.fn.pagepiling.moveTo(pageSection);
    $('#para-menu li a').removeClass('current');
    $(this).addClass('current');
    //arrows disabling
    if (pageSection === 1) {
        $('.para-btn.para-up').addClass('disabled');
    } else if (pageSection === lastPage) {
        $('.para-btn.para-down').addClass('disabled');
    }
});
 /* =====================================
            pagePiling parallax Index
    ====================================== */
    let pagePiling = $('#pagepiling');
    console.log("tamano: "+$(pagePiling).length)
    if ($(pagePiling).length) {
        $(pagePiling).pagepiling({
            onLeave: function (index, nextIndex, direction) {
                let i = index;
                let lastIndex = $('#pagepiling section:last').index();
                if (direction === 'down') {
                    $('#para-menu li a').removeClass('current');
                    $('#para-menu li').eq(i).children().addClass('current');
                    $('.para-btn.para-up').removeClass('disabled');
                } else {
                    i -= 2;
                    $('#para-menu li a').removeClass('current');
                    $('#para-menu li').eq(i).children().addClass('current');
                }
                if (i === 0) {
                    $('.para-btn.para-up').addClass('disabled');
                } else if (lastIndex === i) {
                    $('.para-btn.para-down').addClass('disabled');
                } else if (direction === 'up' && i < lastIndex) {
                    $('.para-btn.para-down').removeClass('disabled');
                }
            }
        });
        //PagePiling Arrows
        $('.para-up').on('click', function () {
            $.fn.pagepiling.moveSectionUp();
        });
        $('.para-down').on('click', function () {
            $.fn.pagepiling.moveSectionDown();
        });
    }
    //parallax menu navigation
    $('#para-menu li a').on('click', function (e) {
        e.preventDefault();
        let pageSection = $(this).parent().index();
        let lastPage = $('#pagepiling').find('section').length;
        pageSection++;
        $.fn.pagepiling.moveTo(pageSection);
        $('#para-menu li a').removeClass('current');
        $(this).addClass('current');
        //arrows disabling
        if (pageSection === 1) {
            $('.para-btn.para-up').addClass('disabled');
        } else if (pageSection === lastPage) {
            $('.para-btn.para-down').addClass('disabled');
        }
    });

    //  classic startup text rotation
    let typed = $('#typed-text');
    if (typed.length) {
        let classicStartup = new Typed('#typed-text', {
            strings: ['Front End Developer', 'Front End Designer', 'Front End Master', 'Creative Designer', 'Creative Builder'],
            typeSpeed: 45,
            backSpeed: 22,
            backDelay: 1000,
            smartBackspace: true, // this is a default
            loop: true
        });
    }
}