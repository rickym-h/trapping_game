const container = document.querySelector(".game-container");

for (let row = 0; row < 11; row++) {
    let myRowOfDivs = document.createElement("div");
    myRowOfDivs.classList.toggle("div-row")
    for (let col = 0; col < 11; col++) {
        let myNode = document.createElement("div");
        myNode.classList.toggle("empty-cell");
        myNode.id = row.toString() + col.toString();
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



