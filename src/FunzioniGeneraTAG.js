function scriviTAG() {
    let div = document.getElementById("idDivTAG")
    let strListaTAG = generaTag("img", "goku.jpg", "idImg", "Classe", "img/goku.jpg" )
    strListaTAG += generaTag("img", "goku.jpg", "", "Classe", "img/anime.gif" )
    div.innerHTML = strListaTAG

}
function generaTag(tag, innerText, id, classe, url) {
    let stringaTag = "";
    let lowerTag = tag.toLowerCase();
    switch (lowerTag) {
        case 'p' :
        case 'h1' :
        case 'h3' :
        case 'span' :
            stringaTag += '<' + lowerTag + ' id="' + id + '" ' + 'class="' + classe + '"' + '> ' // + innerText + ' </' + lowerTag + '>'
            stringaTag += innerText;
            stringaTag += ' </' + lowerTag + '>';
            console.log(stringaTag);
        case 'a' :
            stringaTag += '<' + lowerTag + ' href="' + url + '" ' + 'id="' + id + '" ' + 'class="' + classe + '"' + '> ' // + innerText + ' </' + lowerTag + '>'
            stringaTag += innerText;
            stringaTag += ' </' + lowerTag + '>';
            console.log(stringaTag);
            break;
        case 'img' :
            let proprId = ''
            /*
            if (id != '') 
                stringaTag += '<' + lowerTag + ' src="' + url + '" ' + 'id="' + id + '" ' + 'class="' + classe + '"' + ' alt="'+ innerText + '" ' + '>' 
            else 
                stringaTag += '<' + lowerTag + ' src="' + url + '" ' + '" ' + 'class="' + classe + '"' + ' alt="'+ innerText + '" ' + '>'
                */
            if (id != '') {
                proprId += 'id="' + id + '"';
            }
                stringaTag += '<' + lowerTag + ' src="' + url + '" ' + proprId  + 'class="' + classe + '"' + ' alt="'+ innerText + '" ' + ' width="' + "300" + 'height="'+ '200"' + '>' 
            console.log(stringaTag);
            break;
    
        default:
            break;
    }     
    return stringaTag;
}

function insert_p_Element() {
    let element = document.createElement('p');
    element.textContent = "Ciao";
    //let testo = document.createTextNode('Ciao');
    let divNode = document.getElementById('idInsertElement');
    divNode.appendChild(element)

}