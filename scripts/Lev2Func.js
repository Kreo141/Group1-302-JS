$(document).ready(function () {
    $('.Container').on('click', function () {
        var containerId = $(this).attr('id');
    });
});

function open(id){
    $("#Lev2Container").css(
        "bottom", "0%"
    )
}