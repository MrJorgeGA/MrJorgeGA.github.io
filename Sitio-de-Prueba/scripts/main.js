var miImagen = document.querySelector('img');

miImagen.onclick = function(){
    var miFuente = miImagen.getAttribute('src');
    if (miFuente === 'images/imagen1.jpg'){
        miImagen.setAttribute('src','images/imagen2.jpg');
    } else {
        miImagen.setAttribute('src','images/imagen1.jpg');
    };
};

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    var miNombre = prompt('Por favor, ingrese su nombre.');
    if (!miNombre || miNombre === null) {
        estableceNombreUsuario();
    } else {
    localStorage.setItem('nombre', 'miNombre');
    miTitulo.textContent = 'Eres genial :3 ' + miNombre;};
};

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Eres genial :3 ' + nombreAlmacenado;
};

miBoton.onclick = function() {
    estableceNombreUsuario();
};