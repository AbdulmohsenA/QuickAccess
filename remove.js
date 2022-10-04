//TODO: Make remove appears first

var ContextMenusItem = {
    id: "Removebtn",
    contexts: ["image"],
    title: "Remove %s",
    documentUrlPatterns: ["chrome-extension://*/*"]
};

chrome.contextMenus.removeAll();
chrome.contextMenus.create(ContextMenusItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    var url = clickData.linkUrl
    var myJson = JSON.parse(localStorage.getItem('sites'));
    for (var i = 0; i < myJson.length; i++){
        if (myJson[i].url == url) {
            myJson.splice(i, 1)
            localStorage.setItem('sites', JSON.stringify(myJson))
            location.reload()
            break;
        }
    }
    
})