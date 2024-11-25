$(document).ready(function () {
    $('.Container').on('click', function () {
        var elementId = $(this).attr('id');
        open(elementId)
    });
});

function open(elementId){
    $("#Lev2Container").css(
        "bottom", "0%"
    )
}

function close(){
    $("#Lev2Container").css(
        "bottom", "-100%"
    )
}