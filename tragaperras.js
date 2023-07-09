// Listas
var listaHistorial = document.getElementsByTagName('ul')[0];
var listaImagenes = ["campana", "cereza", "corona", "diamante", "fresa", "siete", "dado", "moneda", "trebol", "uva"];
var palanca1 = "img/palanca1.jpg"
var palanca2 = "img/palanca2.jpg"

var inputCreditos = document.getElementById("creditos");
var muestraMonedas = document.getElementById('nMonedas');
var botonIntroducir = document.getElementById('bIntroducir')


// Imagenes
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');


// Metodos
function introduceMonedas() {
    let monedas = inputCreditos.value;
    muestraMonedas.innerHTML = monedas;

    inputCreditos.value = "";
    inputCreditos.disabled = true;
    botonIntroducir.disabled = true;

    mensaje("Has introducido " + monedas + " monedas");
}

function sacarMonedas() {
    inputCreditos.disabled = false;
    botonIntroducir.disabled = false;
    let cobro = Number(muestraMonedas.innerHTML);
    muestraMonedas.innerHTML = 0;
    inputCreditos.value = cobro;
    mensaje("Has cobrado todas las monedas");
}

function tirada() {
    let v1 = { valor: 0 };
    let v2 = { valor: 0 };
    let v3 = { valor: 0 };
    cambiaPalanca();
    if (isCreditos() == true) {
        cambiaImagen(img1, v1);
        cambiaImagen(img2, v2);
        cambiaImagen(img3, v3);
        ////////////////////////////////
        combinaciones(v1.valor, v2.valor, v3.valor);


    }
}

function cambiaImagen(imagen, v) {
    let aleatorio = Math.round(Math.random() * 9);
    v.valor = aleatorio;
    let nimg = listaImagenes[aleatorio];
    imagen.src = "img/" + nimg + ".jpg";


}

function cambiaPalanca() {
    img4.src = palanca2;
    setTimeout(function () {
        img4.src = palanca1;
    }, 100);
}

function isCreditos() {
    let gastoMoneda = Number(muestraMonedas.innerHTML);
    if (gastoMoneda >= 1) {
        gastoMoneda -= 1;
        muestraMonedas.innerHTML = gastoMoneda;
        mensaje("Gastas 1 moneda");
        return true;
    } else {
        alert("Por favor, introduce monedas")
        return false;
    }
}


function mensaje(mensaje) {
    listaHistorial.innerHTML += "<li>" + mensaje + "</li>";
}




// Combinaciones ganadoras
function combinaciones(v1, v2, v3) {

    if (v1 == 7 && v2 == 7 && v3 == 7) {
        mensaje("Has ganado 10 monedas PREMIAZOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        actualizaMonedas(10);
    } else if (v1 == v2 && v2 == v3) {
        mensaje("Has ganado 5 monedas");
        actualizaMonedas(5);
    } else if ((v1 == 7 && v2 == 7) || (v2 == 7 && v3 == 7) || (v1 == 7 && v3 == 7)) {
        mensaje("Has ganado 4 monedas");
        actualizaMonedas(4);
    } else if ((v1 == 7 && v2 == v3) || (v2 == 7 && v1 == v3) || (v3 == 7 && v1 == v2)) {
        mensaje("Has ganado 3 monedas");
        actualizaMonedas(3);
    } else if ((v1 == v2) || (v2 == v3) || (v3 == v1)) {
        mensaje("Has ganado 2 monedas");
        actualizaMonedas(2);
    } else if (v1 == 7 || v2 == 7 || v3 == 7) {
        mensaje("Has ganado 1 monedas");
        actualizaMonedas(1);
    }

}


function actualizaMonedas(valor) {
    let gastoMoneda = Number(muestraMonedas.innerHTML);
    gastoMoneda += valor;
    muestraMonedas.innerHTML = gastoMoneda;
}


bIntroducir.addEventListener("click", introduceMonedas, false);
document.getElementById('bSalir').addEventListener("click", sacarMonedas, false);
document.getElementById('img4').addEventListener("click", tirada, false);


/** Cambiar en el evento de img4 click, tirada por click metodo para así probar el juego 1000 veces
 * function metodo() {
    for (let i = 0; i < 1000; i++) {
        tirada()

    }
}
 */


/**
 * Resulta que podemos invocar directamente un elemento mediante su identificador 
 * Console.log(prueba)
 * Console.log(* document.getElementById("prueba"))
 * 
 * Probado en los eventos de arriba (addEventListener()) bIntroducir
 */






