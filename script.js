var css = document.querySelector("h3");
var colors = document.querySelectorAll(".color")
var color1 = colors[0];
var color2 = colors[1];
var body = document.getElementById("gradient");
var numberOfGradients = document.getElementById("Numbers");
var direction = document.getElementById("direction");
var dir = direction.value;
var final, arr;
var numbers = document.getElementById("numbers");
var ul = document.getElementById("color-numbers");
var decidingValue = document.getElementById('color-numbers').getElementsByTagName('input').length;

//function to change the font color
function changeFontColor(final) {
    var temp1 = final[1].split(',', 14);
    var temp2 = final[2].split(',', 14);

    //rgbs of temp1
    var r1 = temp1[0].match(/(\d+)/);
    var g1 = temp1[1]
    var b1 = temp1[2].match(/(\d+)/);
    //rgbs of temp2
    var r2 = temp2[0].match(/(\d+)/);
    var g2 = temp2[1];
    var b2 = temp2[2].match(/(\d+)/);
    if (parseInt(r1) <= 87 || parseInt(r2) <= 87) {
        if (parseInt(g1) <= 87 || parseInt(g2) <= 87) {
            body.style.color = "white";
            document.getElementById("bg").style.color = "white";
            document.getElementById("no").style.color = "white";
            document.getElementById("crnt").style.color = "white";
            document.getElementById("dirgrad").style.color = "white";
            document.getElementById("copy").style.color = "white";
        }
    } else {
        if (parseInt(g1) >= 87 || parseInt(g2) >= 87) {
            body.style.color = "rgba(0, 0, 0, 0.65)";
            document.getElementById("bg").style.color = "rgba(0, 0, 0, 0.65)";
            document.getElementById("no").style.color = "rgba(0, 0, 0, 0.65)";
            document.getElementById("crnt").style.color = "rgba(0, 0, 0, 0.65)";
            document.getElementById("dirgrad").style.color = "rgba(0, 0, 0, 0.65)";
            document.getElementById("copy").style.color = "rgba(0, 0, 0, 0.65)";
        }
    }
}




direction.addEventListener("change", function () {
    dir = direction.value;
    var percent = document.getElementById("percent");
    var inp_btn = document.getElementById("btn");

    {

        body.style.background =
            "linear-gradient(to " + dir +
            "," + color1.value +
            "," + color2.value +
            ")";
        document.getElementById('copy').innerHTML = body.style.background + ";";
    }
    inp_btn.addEventListener("click", function () {
        body.style.background =
            "linear-gradient(" + percent.value + "deg" +
            "," + color1.value +
            "," + color2.value +
            ")";
        document.getElementById('copy').innerHTML = body.style.background + ";";

    });
    color1.addEventListener('input', setBackgroundGradient);
    color2.addEventListener('input', setBackgroundGradient);
}
);

//Function to set the background gradient
function setBackgroundGradient() {
    dir = direction.value;
    var percent = document.getElementById("percent");
    var inp_btn = document.getElementById("btn");

    body.style.background =
        "linear-gradient(to " + dir +
        "," + color1.value +
        "," + color2.value +
        ")";
    arr = getComputedStyle(body).backgroundImage;
    str = arr.substring(arr.indexOf('(') + 1, arr.lastIndexOf(')'));
    final = str.split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/);
    changeFontColor(final);
    document.getElementById('copy').innerHTML = body.style.background + ";";
    inp_btn.addEventListener('click', function () {
        body.style.background =
            "linear-gradient(" + percent.value + "deg" +
            "," + color1.value +
            "," + color2.value +
            ")";
        arr = getComputedStyle(body).backgroundImage;
        str = arr.substring(arr.indexOf('(') + 1, arr.lastIndexOf(')'));
        final = str.split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/);
        changeFontColor(final);
        document.getElementById('copy').innerHTML = body.style.background + ";";
    })


}

color1.addEventListener('input', setBackgroundGradient);
color2.addEventListener('input', setBackgroundGradient);

