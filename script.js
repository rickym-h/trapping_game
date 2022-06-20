const container = document.querySelector(".game-container");

for (let row = 0; row < 11; row++) {
    let myRowOfDivs = document.createElement("div");
    myRowOfDivs.classList.toggle("div-row")
    for (let col = 0; col < 11; col++) {
        let myNode = document.createElement("div");
        myNode.classList.toggle("empty-cell");
        myNode.id = row.toString() + col.toString();
        //myNode.innerText = myNode.id;

        myNode.addEventListener("click",function(e) {
            console.log(e.target);
            if ((!e.target.classList.contains("capybara") && (!e.target.hasChildNodes()))) {
                e.target.classList.toggle("wall-cell")
            }
            //todo move capybara
        })

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
    if (x.classList.contains("wall-cell")) {
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

    return myNodeList;
}

function putCapybaraInCell(row,col) {
    const previousCell = document.querySelector(".capybara")
    if (previousCell) {
        previousCell.remove();
    }

    const newCell = document.getElementById(row.toString() + col.toString());
    let myCapybara = document.createElement("div");
    myCapybara.classList.toggle("capybara");
    newCell.appendChild(myCapybara);

}

getAdjacentNodes(6,1)

putCapybaraInCell(3,5)
putCapybaraInCell(1,6)
putCapybaraInCell(2,4)
putCapybaraInCell(4,2)