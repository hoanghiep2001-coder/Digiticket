$(function () {
    var mobileBar = $('.bi.bi-list')
    var mobileMenu = $('.header__container-tablet-tab-clicked')

    var mobile = {
        render: function() {

        },
        handleEvent: function() {
            $(mobileBar).click(function (e) { 
                // e.preventDefault();
                // $(mobileMenu).toggleClass('open');
                $(mobileMenu).slideToggle();
            });
        },
        start: function (param) {
            this.render()
            this.handleEvent()
        }
    }

    mobile.start()
});