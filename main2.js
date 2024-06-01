const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const imagen = document.getElementById('imagen');
const mensaje = document.getElementById('mensaje');
const imagenes = [
    "MOCHA.gif",
    "MOCHA.gif",
    "MOCHA.gif",
    "MOCHA.gif",
    "MOCHA.gif",
    "MOCHA.gif",
    "MOCHA.gif",
    "MOCHA.gif"
];
let index = -1;

btnSi.addEventListener('click', function () {
    Swal.fire({
        title: '¡FELIIII MI AMORCITOO!',
        text: '¡Hasta pasitas mi bonita! 😊😘',
        imageUrl: 'image_SI.gif',
        confirmButtonText: 'Cerrar',
        customClass: {
            confirmButton: 'boton-sweetalert' // Nombre de la clase CSS para el botón de SweetAlert
        },
        didOpen: () => {
            // Modificar el estilo del botón una vez que se abra la alerta
            const confirmButton = Swal.getConfirmButton();
            confirmButton.classList.remove('swal2-styled'); // Remover la clase de estilo predeterminada
            confirmButton.classList.add('boton-sweetalert'); // Agregar la clase de estilo personalizado
        }
    }).then((result) => {
        felicidades();
        clearInterval(interval);
        imagen.src = "image_OK.gif";
        btnSi.style.display = 'none';
        btnNo.style.display = 'none';

        // Redirigir a carta.html al hacer clic en "Cerrar"
        if (result.isConfirmed) {
            window.location.href = 'carta.html';
        }
    });
});


btnNo.addEventListener('mouseover', function () {
    moverBoton();
});

function moverBoton() {
    const botonRect = btnNo.getBoundingClientRect();
    const width = window.innerWidth - botonRect.width;
    const height = window.innerHeight - botonRect.height;

    btnNo.style.position = "absolute";
    btnNo.style.left = (Math.random() * width) + "px";
    btnNo.style.top = (Math.random() * height) + "px";
}

const interval = setInterval(() => {
    index++;

    if (index >= imagenes.length) {
        index = 0;
    }

    imagen.src = carpetaIMG + imagenes[index];
}, 3000);


function felicidades() {
    var bArray = [];
    var sArray = [2, 4, 6, 8];
    var contenedor = document.querySelector('.contenedor');
    for (var i = 0; i < contenedor.offsetWidth; i++) {
        bArray.push(i);
    }

    setInterval(function () {
        var size = random(sArray);
        var div = document.createElement('div');
        div.classList.add('individual-bubble');
        div.style.left = random(bArray) + 'px';
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.bottom = '10px';
        div.style.position = 'absolute';
        div.style.zIndex = '1';
        contenedor.appendChild(div);

        animate(div);
    }, 150);
}

function animate(div) {
    var bottom = 10;
    var opacity = 1;

    var animationInterval = setInterval(function () {
        bottom += 2;
        opacity -= 0.007;
        div.style.bottom = bottom + '%';
        div.style.opacity = opacity;

        if (bottom >= 100) {
            clearInterval(animationInterval);
            div.remove();
        }
    }, 80);
}

function random(data) {
    return data[Math.floor(Math.random() * data.length)];
}
