
function outputUpdate() {
    var heightElem = document.getElementById("fader").value;
    var brickType = document.getElementById("brickType").value;
    document.getElementById("height").innerHTML = heightElem;

    drawPyramid(heightElem, brickType);
}

function drawPyramid(heightElem, brickType) {

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < heightElem; row++) {

        var numBricks = row + 2 + " ";
        var numSpaces = heightElem - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
                var spaceChar = "&nbsp";
                rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
                rowStr += brickType;
        }
        console.log(rowStr);
        var rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
