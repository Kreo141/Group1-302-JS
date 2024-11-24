$(document).ready(function () {
    function expand(element) {
        $(element).parent().css({
            height: "18vw",
            width: "18vw",
        });
    }

    function shorten(element) {
        $(element).parent().css({
            height: "13vw",
            width: "13vw"
        });
    }

    window.expand = expand;
    window.shorten = shorten;
});

function glow(element){
    var elementId = element.id

    console.log("hover")

    if(elementId == "homeBtn"){
        element.style.boxShadow = "2px 2px 9px -1px #00FF37"
        element.style.backgroundColor = "#00FF37"
    } 
    else if(elementId == "customizeBtn"){
        element.style.boxShadow = "2px 2px 9px -1px #FEE52C"
        element.style.backgroundColor = "#FEE52C"
    }
    else if(elementId == "settingsBtn"){
        element.style.boxShadow = "2px 2px 9px -1px #FF0507"
        element.style.backgroundColor = "#FF0507"
    }

    
}

function reset(element){
    var elementId = element.id

    var ifCurrentEqlsToBtn = ifBtnIsInTheSamePage(elementId)

    if(ifCurrentEqlsToBtn){

        element.style.boxShadow = "1px 1px 8px -2px"
    }else if (!ifCurrentEqlsToBtn){
        console.log("NOT SAME")
        element.style.boxShadow = "1px 1px 8px -2px"
        element.style.backgroundColor = "white"
    }
    
}

function ifBtnIsInTheSamePage(elementId){
    const pageMap = {
        homeBtn: "Quiz App",
        customizeBtn: "Customize",
        settingsBtn: "Settings",
    };

    const currentPage = pageMap[elementId];
    return currentPage === document.title;
}