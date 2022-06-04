import myJson from './sites.json' assert {type: 'json'};

//alert(myJson.Twitter[0]);

addSite(myJson.LinkedIn[0], myJson.LinkedIn[1], 0);
addSite(myJson.Youtube[0], myJson.Youtube[1], 0);
addSite(myJson.Twitter[0], myJson.Twitter[1], 0);
addSite(myJson.LinkedIn[0], myJson.LinkedIn[1], 1);
addSite(myJson.LinkedIn[0], myJson.LinkedIn[1], 1);
addSite(myJson.LinkedIn[0], myJson.LinkedIn[1], 1);
addSite(myJson.LinkedIn[0], myJson.LinkedIn[1], 2);


function addSite(url, icon, row) {
    const newDiv = document.createElement('div');
    newDiv.className = 'image';
    newDiv.innerHTML = `<a href="${url}" target="_blank"><img src="${icon}" alt="${url}" /></a>`;

    var row = document.getElementsByClassName('row')[row];
    row.appendChild(newDiv);
}