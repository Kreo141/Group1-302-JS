$(document).ready(function () {
    $(".Container").on("click", function () {
        var elementId = $(this).attr('id');
        open(elementId)
    });

    $("#closeLev2").on("click", function(){
        close()
    })
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