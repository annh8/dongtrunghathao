
var checkIn = new Date();
var checkOut = new Date();
var termDate = new Date();
var arrayDate = new Array();

$(document).ready(function () {
    checkIn = new Date($("#Arrive").val());
    checkOut = new Date($("#Depart").val());
    termDate = new Date($("#Arrive").val());
    arrayDate = new Array();
    while (termDate <= checkOut) {
        arrayDate.push($.datepicker.formatDate('mm/dd/yy', termDate));
        termDate.setDate(termDate.getDate() + 1);
    }


    $("#Arrive").datepicker({
        showAnim: 'show',
        numberOfMonths: 2,
        duration: 600,
        minDate: new Date(),
        onSelect: function (dataText, inst) {
            checkIn = new Date($("#Arrive").val());
            checkOut = new Date($("#Arrive").val());
            checkOut.setDate(checkOut.getDate() + 1);
            $("#Depart").val($.datepicker.formatDate('mm/dd/yy', checkOut));
            $('#Depart').datepicker('option', { minDate: checkIn });

            arrayDate = new Array();
            arrayDate.push($.datepicker.formatDate('mm/dd/yy', checkIn));
            arrayDate.push($.datepicker.formatDate('mm/dd/yy', checkOut));
        },
        beforeShowDay: function (date) {

            var getDay = parseInt(date.getDate()) < 10 ? "0" + date.getDate() : date.getDate();
            var getMonth = parseInt(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var theday = getMonth + '/' + getDay + '/' + date.getFullYear();
            return [true, $.datepicker.formatDate('mm/dd/yy', checkIn) == theday ? "first-specialDate" : $.datepicker.formatDate('mm/dd/yy', checkOut) == theday ? "last-specialDate" : $.inArray(theday, arrayDate) >= 0 ? "specialDate" : ""];
        },
        beforeShow: function () {
           
            $("#Arrive").val("Select a date");
        },
        onClose: function () {
            console.log("CheckIn:" + checkIn);
            $("#Arrive").val($.datepicker.formatDate('mm/dd/yy', checkIn));
        }
    });

    $("#Depart").datepicker({
        defaulDate: new Date(),
        showAnim: 'show',
        numberOfMonths: 2,
        duration: 600,
        minDate: checkIn,
        onSelect: function (dataText, inst) {
            checkOut = new Date($("#Depart").val());
            checkIn = new Date($("#Arrive").val());
            if (checkOut <= checkIn) {
                checkOut.setDate(checkOut.getDate() + 1);
                $("#Depart").val($.datepicker.formatDate('mm/dd/yy', checkOut));
            }

            termDate = new Date($("#Arrive").val());
            arrayDate = new Array();
            while (termDate <= checkOut) {
                arrayDate.push($.datepicker.formatDate('mm/dd/yy', termDate));
                termDate.setDate(termDate.getDate() + 1);
            }
        },
        beforeShowDay: function (date) {

            var getDay = parseInt(date.getDate()) < 10 ? "0" + date.getDate() : date.getDate();
            var getMonth = parseInt(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var theday = getMonth + '/' + getDay + '/' + date.getFullYear();
            return [true, $.datepicker.formatDate('mm/dd/yy', checkIn) == theday ? "first-specialDate" : $.datepicker.formatDate('mm/dd/yy', checkOut) == theday ? "last-specialDate" : $.inArray(theday, arrayDate) >= 0 ? "specialDate" : ""];
        },
        beforeShow: function () {
         
            $("#Depart").datepicker('setDate', new Date($("#Arrive").val()));
            $("#Depart").val("Select a date");
        },
        onClose: function () {
            $("#Depart").val($.datepicker.formatDate('mm/dd/yy', checkOut));
        }
    });

});
