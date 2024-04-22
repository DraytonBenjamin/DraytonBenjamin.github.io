
$container = $("#container");
$("<div class=\"popup\" id=\"popup-id\"><!--html code of form here--><div>").hide().appendTo($container);
....
function showPopup() {
    $("#popup-id").show().offset({
    left : yourX,
    top : yourY
});

}