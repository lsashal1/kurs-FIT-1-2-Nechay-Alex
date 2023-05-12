fetch('./xml.xml')

.then(response => response.text())
.then(xml => {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");

    const creat = xmlDoc.getElementsByTagName("creator")[0].childNodes[0].nodeValue;
    const inf = xmlDoc.getElementsByTagName("info")[0].childNodes[0].nodeValue;

    const creatP = document.getElementById("creator");
    creatP.innerHTML = `${creat}`
    const infP = document.getElementById("info");
    infP.innerHTML = `${inf}`
})