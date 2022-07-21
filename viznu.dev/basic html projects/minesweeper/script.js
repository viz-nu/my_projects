

function trigger() {
    let a= (+document.getElementById("level").value)
    switch(a) {
        case 0:{
            easymain()
            break;
        }   
        case 1:{
            mediummain()
            break;
        }    
        case 2:{
            hardmain()
            break;
        }
        default :{
            console.log("oops",a);
            break
        }
    }
}
function easymain() {
    document.getElementById("tbody").remove()
    let table = document.createElement("tbody");
    table.id="tbody"
    let parent = document.getElementById("table");
    parent.appendChild(table)
    let row, col,butn,count=1
    for (let i = 1; i <= 10; i++) {
        row = document.createElement("tr");
        for (let j = 1; j <= 6; j++) {
            col = document.createElement("td");
            butn=document.createElement("button")
            butn.id= `${i},${j}`
            // butn.innerText=count
            butn.innerText= `${i},${j}`
            col.appendChild(butn)
            row.appendChild(col);
            count++
        }
        table.appendChild(row)
    }
   






    
}
function mediummain() {
    document.getElementById("tbody").remove()
    let table = document.createElement("tbody");
    table.id="tbody"
    let parent = document.getElementById("table");
    parent.appendChild(table)
    let row, col,butn
    for (let i = 1; i <= 12; i++) {
        row = document.createElement("tr");
        for (let j = 1; j <= 8; j++) {
            col = document.createElement("td");
            butn=document.createElement("button")
            butn.innerText= `${i},${j}`
            col.appendChild(butn)
            row.appendChild(col);
        }
        table.appendChild(row)
    }
   
    
}
function hardmain() {
    document.getElementById("tbody").remove()
    let table = document.createElement("tbody");
    table.id="tbody"
    let parent = document.getElementById("table");
    parent.appendChild(table)
    let row, col,butn
    for (let i = 1; i <= 14; i++) {
        row = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
            col = document.createElement("td");
            butn=document.createElement("button")
            butn.innerText= `${i},${j}`
            col.appendChild(butn)
            row.appendChild(col);
        }
        table.appendChild(row)
    } 
}
