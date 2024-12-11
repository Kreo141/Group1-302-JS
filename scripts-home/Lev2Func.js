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

    $("#closeLev2").css({
        "display": "block",
        "opacity": "100%"
    })

    $("#blur").css({
        "display": "block",
        "-webkit-backdrop-filter": "blur(10px)",
        "backdrop-filter": "blur(10px)"
    });
    

    var subjectContext = {
        container1: {
            subjectName: "Science",
            imgLink: "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg"
        },
        container2: {
            subjectName: "History",
            imgLink: "https://blog.udemy.com/wp-content/uploads/2014/05/bigstock-History-56161577.jpg"
        },
        container3: {
            subjectName: "Math",
            imgLink: "https://th.bing.com/th/id/OIP.g9UHblwHf4VFKhoT4c2UYAHaHa?rs=1&pid=ImgDetMain"
        },
        container4: {
            subjectName: "English",
            imgLink: "https://educationadvizer.com/wp-content/uploads/2023/05/learn-english-768x593.jpg"
        },
        container5: {
            subjectName: "IT",
            imgLink: "https://image.shutterstock.com/image-vector/information-technology-word-cloud-tag-600w-501677983.jpg"
        },
        container6: {
            subjectName: "Music",
            imgLink: "https://th.bing.com/th/id/OIP.mH31yrEzqgC2vDctscxNuQHaHa?rs=1&pid=ImgDetMain"
        },
    }

    var title = subjectContext[elementId].subjectName
    var imgSrc = subjectContext[elementId].imgLink

    $("#subjectTitle").text(title)
    $("#subjectImg").attr("src", imgSrc);
    $("#Lev2Container").css(
        "bottom", "0%"
    )

}

function close(){
    $("#closeLev2").css({
        "display": "none",
        "opacity": "0"
    })


    $("#blur").css({
        "-webkit-backdrop-filter": "blur(0px)",
        "backdrop-filter": "blur(0px)",
        "display": "none"
    });
    
    $("#Lev2Container").css(
        "bottom", "-100%"
    )
}

console.log(html())
