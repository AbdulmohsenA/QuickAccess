import myJson from './sites.json' assert {type: 'json'};

alert(myJson.Twitter[0]);

document.body.onload = addSite(myJson.Youtube[0], myJson.Youtube[1]);


function addSite(url, icon) {
    const newDiv = document.createElement('div', {class: 'image'});
    const link = newDiv.appendChild(document.createElement('a', {href: url}, {target: '_blank'}));
    link.appendChild(document.createElement('img', {src: icon}));
}   

