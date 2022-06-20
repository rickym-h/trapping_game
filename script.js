const container = document.querySelector(".game-container");


function initialiseGame() {
    for (let row = 0; row < 13; row++) {
        let myRowOfDivs = document.createElement("div");
        myRowOfDivs.classList.toggle("div-row")
        for (let col = 0; col < 12; col++) {
            let myNode = document.createElement("div");
            myNode.classList.toggle("empty-cell");
            myNode.id = row.toString() + "-" + col.toString();

            if (row === 0 || row === 12) {
                myNode.classList.add("null-cell");

            }
            //myNode.innerText = myNode.id;

            myNode.addEventListener("click",function(e) {
                if ((!e.target.classList.contains("capybara") && (!e.target.hasChildNodes()))) {
                    e.target.classList.toggle("wall-cell")
                } else {
                    return;
                }

                let x = document.querySelector(".capybara").parentNode;
                let split = x.id.split("-")
                let potentialNodes = getAdjacentNodes(split[0], split[1])
                console.log(potentialNodes)
                if (potentialNodes.length === 0){
                    alert("YOU WIN!!")
                    location.reload();
                    return;
                }

                const randomElement = potentialNodes[Math.floor(Math.random() * potentialNodes.length)];
                let newSplit = randomElement.id.split("-");
                putCapybaraInCell(newSplit[0], newSplit[1]);



            })

            myRowOfDivs.appendChild(myNode);
        }
        if (row % 2 === 0) {
            myRowOfDivs.childNodes[0].classList.add("null-cell")
        }
        else {
            myRowOfDivs.childNodes[myRowOfDivs.childNodes.length-1].classList.toggle("null-cell")
        }
        container.appendChild(myRowOfDivs);
    }
    putCapybaraInCell(6,6)
    // todo find 17 random cells to turn into walls

    console.log("test")
    let possibleNodes = Array.from(document.getElementsByClassName("empty-cell"));
    possibleNodes = possibleNodes.filter(x=>!x.firstChild);
    let nullNodes = Array.from(document.getElementsByClassName("null-cell"));
    possibleNodes = possibleNodes.filter(node => {
        return !nullNodes.includes(node);

    })
    possibleNodes = shuffleArray(possibleNodes);
    for (let i = 0; i< 17; i++) {
        possibleNodes[i].classList.toggle("wall-cell");
    }

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function isNodeValid(x) {
    if (x === null) {
        return false;

    }
    if (x.classList.contains("null-cell")) {
        //todo lose game
        alert("YOU LOSE")
        location.reload();
        return false;
    }
    if (x.classList.contains("wall-cell")) {
        return false;
    }

    return true;
}

function getAdjacentNodes(row,col) {
    row = Number(row);
    col = Number(col);

    let myNodeList = [];

    if (row % 2 === 0){
        myNodeList.push(document.getElementById((row-1).toString() + "-" + (col-1).toString()));
        myNodeList.push(document.getElementById((row-1).toString() + "-" + (col).toString()));
        myNodeList.push(document.getElementById((row).toString() + "-" + (col+1).toString()));
        myNodeList.push(document.getElementById((row).toString() + "-" + (col-1).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + "-" + (col-1).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + "-" + (col).toString()));

    } else {
        myNodeList.push(document.getElementById((row-1).toString() + "-" + (col).toString()));
        myNodeList.push(document.getElementById((row-1).toString() + "-" + (col+1).toString()));
        myNodeList.push(document.getElementById((row).toString() + "-" + (col+1).toString()));
        myNodeList.push(document.getElementById((row).toString() + "-" + (col-1).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + "-" + (col).toString()));
        myNodeList.push(document.getElementById((row+1).toString() + "-" + (col+1).toString()));
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

    const newCell = document.getElementById(row.toString() + "-" + col.toString());
    let myCapybara = document.createElement("div");
    myCapybara.classList.toggle("capybara");
    newCell.appendChild(myCapybara);

}

initialiseGame()