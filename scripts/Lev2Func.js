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

    var subjectContext = {
        container1: {
            subjectName: "Science",
            imgLink: ""
        },
        container2: {
            subjectName: "History",
            imgLink: ""
        },
        container3: {
            subjectName: "Math",
            imgLink: ""
        },
        container4: {
            subjectName: "English",
            imgLink: ""
        },
        container5: {
            subjectName: "IT",
            imgLink: ""
        },
        container6: {
            subjectName: "Music",
            imgLink: ""
        },
    }

    $("#Lev2Container").css(
        "bottom", "0%"
    )
}

function close(){
    $("#Lev2Container").css(
        "bottom", "-100%"
    )
}