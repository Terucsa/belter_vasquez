/**Bandera Guatemala */
bandera1();
function bandera1(){
    let content = ` <article id="ejercicio1">
    <h2>Ejercicio 1: Guatemala</h2>
    <div class="contenedor">
        <div class="parte1"></div>
        <div class="parte3"></div>
        <div class="parte2"><img src="img/guatemala.png" alt="Escudo Guatemala"></div>
    </div>
</article>`;
let insentar = document.getElementById('insertarContenido');

insentar.innerHTML = content;
}
/**Bandera de la india */
bandera2();
function bandera2(){
    let content = ` <article id="ejercicio2">
    <h2>Ejercicio 2: Níger, India</h2>
    <div class="contenedor">
        <div class="parte1"></div>
        <div class="parte2"></div>
        <div class="parte3"></div>
        <div class="parte4"></div>
        <div class="parte5"><img src="img/niger.png" alt="Emblema Níger"></div>
        <div class="parte6"><img src="img/india.png" alt="Emblema India"></div>
        <div class="parte7"></div>
    </div>
</article>`;
let insentar = document.getElementById('insertarContenido');

insentar.innerHTML = content;
}
/**Bandera Paises bajos*/
bandera3();
function bandera3(){
    let content = `<article id="ejercicio3">
    <h2>Ejercicio 3: Paises Bajos, Francia</h2>
    <div class="contenedor">
    <div id="bajos">
        <div class="parte1"></div>
        <div class="parte2"></div>
        <div class="parte3"></div>
    </div>
    <div class="francia">
        <div class="parte4"></div>
        <div class="parte5"></div>
        <div class="parte6"></div>
    </div>
    <div class="parte7"></div>
</div>
</article>`;
let insentar = document.getElementById('insertarContenido');

insentar.innerHTML = content;
}
bandera4();
function bandera4(){
    let content = ` <article id="ejercicio4">
    <h2>Ejercicio 4: Suecia</h2>
    <div class="contenedor">
        <div id="superior">
            <div class="parte1"></div>
            <div class="parte2"></div>
            <div class="parte3"></div>
        </div>
        <div class="parte4"></div>
        <div id="inferior">
            <div class="parte5"></div>
            <div class="parte6"></div>
            <div class="parte7"></div>
        </div>
    </div>
</article>
`
let insentar = document.getElementById('insertarContenido');

insentar.innerHTML = content;
}
bandera5();
function bandera5(){
    let content = ` <article id="ejercicio5">
    <h2>Ejercicio 5: Suiza</h2>
    <div class="contenedor">
        <div class="parte1"></div>
        <div class="parte2"></div>
        <div class="parte3"></div>
    </div>
</article>`
let insentar = document.getElementById('insertarContenido');

insentar.innerHTML = content;
}
