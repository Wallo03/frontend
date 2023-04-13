/*function controlTable() {
    let rows = document.getElementById("rows")
    let columns = document.getElementById("columns")
    generaTabella(rows, columns)
}*/

function abilitaBottone() {
    //let rows = document.getElementById("rows").value
    //let columns = document.getElementById("columns").value
    //let btn = document.getElementById("btn")

    if (document.myForm.rows.value > 0 && document.myForm.columns.value > 0) {
        document.myForm.btn.disabled = false;
    }else {
        document.myForm.btn.disabled = true;
    }

}
function generaTabella(rows, columns, elementTable) {
    let divTable = document.getElementById(elementTable);
    console.log("Numero Righe; " + rows);
    console.log("Numero Colonne; " + columns);
    console.log(divTable);

    // CREAZIONE TABELLA
    let htmlTableString = '<table id="table" class="visible">';
    htmlTableString += tableHeader(columns)
    for (let i = 0; i < rows; i++) {
        htmlTableString += tableRow(columns)
        
    }
    htmlTableString += '</table>';
    divTable.innerHTML = htmlTableString;


    document.getElementById("btnHideTable").disabled = false;
    

    /*let table = document.createElement("table");
    let tr = document.createElement("tr");
    let tr2 = document.createElement("tr");   
    let th = document.createElement("th");   
    let td = document.createElement("td");
    tr.appendChild(th);
    table.appendChild(tr);
    tr2.appendChild(td);
    table.appendChild(tr2);
    divTable.appendChild(table);
    console.log(divTable);*/
}

function tableHeader(columns) {
    let htmlString = '<tr>';
    for (let i = 0; i < columns; i++) {
        htmlString += '<th> Header: '+ i.toString()  + '</th>';        
    }

    htmlString += '</tr>';
    return htmlString;
}

function tableRow(columns) {
    let htmlString = '<tr>';
    for (let i = 0; i < columns; i++) {
        htmlString += '<td> Cella: '+ i.toString()  + '</td>'      
    }
    htmlString += '</tr>';
    return htmlString;
}

function deleteTable(divTable) {
    let divTableObj = document.getElementById(divTable);
    divTableObj.innerHTML = "";
    document.getElementById("btnHideTable").disabled = true;

}

function hideTable() {
    let table = document.getElementById("table");
    if (table.className == "invisible") {
        document.getElementById("btnHideTable").textContent = "Nascondi tabella"
        table.className = "visible";
    } else {
        document.getElementById("btnHideTable").textContent = "Visualizza tabella"
        table.className = "invisible";
    }

}