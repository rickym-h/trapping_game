const container = document.querySelector(".game-container");

for (let row = 0; row < 11; row++) {
    let myRowOfDivs = document.createElement("div");
    myRowOfDivs.classList.toggle("div-row")
    for (let col = 0; col < 11; col++) {
        let myNode = document.createElement("div");
        myNode.classList.toggle("empty-cell");
        myNode.id = row.toString() + col.toString();
        myNode.innerText = myNode.id;
        myRowOfDivs.appendChild(myNode);
    }
    if (row % 2 === 0) {
        myRowOfDivs.childNodes[0].classList.toggle("null-cell")
    }
    else {
        myRowOfDivs.childNodes[myRowOfDivs.childNodes.length-1].classList.toggle("null-cell")
    }
    container.appendChild(myRowOfDivs);
}



function getAdjacentNodes(id) {
    if (typeof id === "number") {
        id = id.toString()
    }
    let row = Number(id[0]);
    let col = Number(id[1]);

    let myNodeList = [];

    if (row % 2 === 0){
        myNodeList.push(document.getElementById((row-1).toString() + (col-1).toString()));
        myNodeList.push(document.getElementById((row-1).toString() + (col).toString()));
        myNodeList.push(document.getElementById((row).toString() + (col+1).toString()));
        myNodeList.push(document.getElementById((row).toString() + (col-1).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + (col-1).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + (col).toString()));

    } else {
        myNodeList.push(document.getElementById((row-1).toString() + (col).toString()));
        myNodeList.push(document.getElementById((row-1).toString() + (col+1).toString()));
        myNodeList.push(document.getElementById((row).toString() + (col+1).toString()));
        myNodeList.push(document.getElementById((row).toString() + (col-1).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + (col).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + (col+1).toString()));
    }

    myNodeList.filter(x => !!x);

    for (let i = 0; i < myNodeList.length; i++ ) {

        console.log(myNodeList[i]);
        myNodeList[i].classList.toggle("wall-cell");
    }
    return myNodeList;
}


getAdjacentNodes(26)