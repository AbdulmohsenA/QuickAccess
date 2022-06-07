//TODO Find a way to edit the json file and push the new site in it.
// TODO find a way to run 'addSite()' function when the user clicks on the button.
var myJson = JSON.parse(localStorage.getItem('sites'));

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('AddCurrentBtn');
    button.addEventListener('click', function() {
    // onClick's logic below:

    getCurrentTab().then(tab => {
        var url = tab.url;
        var icon = tab.favIconUrl;
        var name = new URL(url).hostname;

        let newSite = {
            "name": name,
            "url": url,
            "icon": icon
        }
        
        myJson.push(newSite)
        localStorage.setItem('sites', JSON.stringify(myJson));

        });
    });
});


async function getCurrentTab() {
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    return tab;
}
