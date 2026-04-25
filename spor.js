alert("kungfu ? taekwondo?");

var secim = prompt("Which one do you choose?");

function spor(parameter) {

    if (parameter == "taekwondo") {

        for (var i = 0; i < parameter.length; i++) {
            alert(parameter[i]);
        }

    } else if (parameter == "kungfu") {

        var txt = "";

        for (var i = 0; i < parameter.length; i++) {
            txt = txt + parameter[i];
            alert(txt);
        }

    }
}

spor(secim);
