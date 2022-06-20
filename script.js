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


function isNodeValid(x) {
    if (x === null) {
        return false;

    }
    if (x.classList.contains("null-cell")) {
        return false;
    }
    return true;
}

function getAdjacentNodes(row,col) {

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

    // Filter out null and wall cells
    myNodeList = myNodeList.filter(x=>isNodeValid(x))

    for (let i = 0; i < myNodeList.length; i++ ) {

        console.log(myNodeList[i]);
        myNodeList[i].classList.toggle("wall-cell");
    }
    return myNodeList;
}


getAdjacentNodes(6,1)