function scriviTAG() {
    let div = document.getElementById("idDivTAG");
    //genera TAG da string = innerHTML
    let strListaTAG = generaTag("img", "goku.jpg", "idImg", "Classe", "img/goku.jpg" );
    strListaTAG += generaTag("img", "goku.jpg", "", "Classe", "img/anime.gif" );
    div.innerHTML = strListaTAG;
    //genera TAG da Obj = appendChild()
    let elementoCreato = generaTagObject("img", "goku.jpg", "idImg", "Classe", "img/goku.jpg");
    div.appendChild(elementoCreato);

}

function scriviTagObj() {
    let div = document.getElementById("idInsertElementObj");
    //genera TAG da Obj = appendChild()
    let elementoCreato = generaTagObject("img", "goku.jpg", "idImg", "Classe", "img/goku.jpg");
    div.appendChild(elementoCreato);
    elementoCreato = generaTagObject("img", "goku.jpg", "idGif", "Classe", "img/anime.gif" );
    div.appendChild(elementoCreato)

}
function generaTagObject(tag, innerText, id, classe, url) {
    //let stringaTag = "";
    let elemento = null;
    let lowerTag = tag.toLowerCase();
    elemento = document.createElement(lowerTag)
    switch (lowerTag) {
        case 'p' :
        case 'h1' :
        case 'h3' :
        case 'span' :
            //elemento = document.createElement(lowerTag);
            elemento.setAttribute("id", id);
            elemento.setAttribute("class", classe);
            elemento.textContent = innerText
            
        case 'a' :              
            //elemento = document.createElement(lowerTag);
            elemento.setAttribute("id", id);
            elemento.setAttribute("src", url);
            elemento.setAttribute("class", classe);
            elemento.textContent = innerText;
            break;
        case 'img' :                   
            //elemento = document.createElement(lowerTag);
            elemento.setAttribute("id", id);
            elemento.setAttribute("src", url);
            elemento.setAttribute("class", classe);
            elemento.setAttribute("alt", innerText);
            break;
            
            default:
                elemento = null
                break;
            }
    console.log(elemento);   
    return elemento
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