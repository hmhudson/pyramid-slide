
function outputUpdate(vol) {
	document.querySelector('#height').value = vol;
    drawPyramid(vol);
}



var heightElem = document.getElementById("draw-form");
var brickType = document.getElementById("brick-symbol");

function drawPyramid(height) {

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = heightElem + row + 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "h";
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
