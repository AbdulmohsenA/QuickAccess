if (localStorage.getItem("sites") === null) {
    // If the storage is empty, we create an empty array to initiallize it.
    var myJson = [];                                    
    localStorage.setItem("sites", JSON.stringify(myJson));
  }

var myJson = JSON.parse(localStorage.getItem('sites')); // Get the JSON from localStorage

addList(myJson);

function addList(JSON)  {

    for (var i = 0; i < JSON.length; i++) {
        var row = Math.floor((i) / 3);      // Each row will contain 3 sites
        addSite(JSON[i].url, JSON[i].icon, row);
    }
}

function addSite(url, icon, row) {
    const newDiv = document.createElement('div');
    newDiv.className = 'site';
    newDiv.innerHTML = `<a href="${url}" target="_blank"><img src="${icon}" alt="${url}" /></a>`;

    var row = document.getElementsByClassName('row')[row];
    row.appendChild(newDiv);
}