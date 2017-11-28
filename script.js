'use strict'

const radiusInput = document.getElementById("radInput");
const volumeInput = document.getElementById("volInput");
const calculateBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearButton");
const canvasArea = document.getElementById("myCanvas");
const ctx = canvasArea.getContext("2d");

function calculateVolume() {
    var radValue = radiusInput.value;

    if (isNaN(radValue)) {
        window.alert('Invalid radius');
    }
    if (radValue > 150) {
        window.alert('Radius too big for canvas');
    } else {
        var volume;
        volume = (4 / 3) * Math.PI * Math.pow(radValue, 3);
        console.log(volume);
        volumeInput.value = volume;
        ctx.beginPath();
        ctx.arc(150, 150, radValue, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, 300, 300);
}


calculateBtn.addEventListener("click", calculateVolume);
clearBtn.addEventListener("click", clearCanvas);

/*window.onload(setTimeout(function() { for (var i = 0; i < 150; i++) {
        ctx.beginPath();
        ctx.arc(150, 150, i, 0, 2 * Math.PI);
        ctx.stroke();
        console.log(i);
};
}, 100))*/

