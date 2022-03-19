$(function () {
    var dateRangeLeave = $('input[name="birthday"]')
    var dateRangeBack = $('.date-range-picker-back')


    var dateRangePicker = {
        config: function() {
            $('input[name="birthday"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                maxYear: parseInt(moment().format('YYYY'),10)
              });
        },
        dateRangePicker: function() {
            
        },
        start: function (param) {
            this.config()
        }
    }

    dateRangePicker.start()
});