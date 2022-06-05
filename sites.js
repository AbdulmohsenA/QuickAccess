import myJson from './sites.json' assert {type: 'json'};

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