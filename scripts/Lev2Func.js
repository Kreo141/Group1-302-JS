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
            imgLink: "https://th.bing.com/th/id/OIP.mH31yrEzqgC2vDctscxNuQHaHa?rs=1&pid=ImgDetMain"
        },
    }

    var title = subjectContext[elementId].subjectName
    var imgSrc = subjectContext[elementId].imgLink

    $("#subjectTitle").text(title)
    $("#subjectImg").attr("src", "new-image-link.jpg");
    $("#Lev2Container").css(
        "bottom", "0%"
    )

}

function close(){
    $("#Lev2Container").css(
        "bottom", "-100%"
    )
}