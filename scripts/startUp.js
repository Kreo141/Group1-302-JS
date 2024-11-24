var navChildrenArray = $("#nav").children().toArray();
var categoryContainerChildrenArray = $("#categoryContainer").children().toArray();

for (let y = 0; y < categoryContainerChildrenArray.length; y++) {
    setTimeout(() => {
        $("#" + categoryContainerChildrenArray[y].id).fadeIn(500);
    }, 200 * y); 
}

for(var x = 0; x < navChildrenArray.length; x++){
    var elementId = navChildrenArray[x].id
    console.log(navChildrenArray[x].id, ifBtnIsInTheSamePage(elementId))
    if(ifBtnIsInTheSamePage(elementId)){
        const color = {
            homeBtn: "#00FF37",
            customizeBtn: "#FEE52C",
            settingsBtn: "#FF0507",
        } 
        navChildrenArray[x].style.backgroundColor = color[elementId]
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


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
