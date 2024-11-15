const totalBotones = 10; // Total de botones a mostrar
const paginaImagen = document.getElementById('pagina-imagen');
let imagenes = [
    'oso.jpg',
    'pan.jpg',
    'pastel.jpg',
    'perro.jpg',
    'sol.jpg',
    'us.jpg',
    'he.jpg',
    'he.jpg',
    'gatoo.jpg',
    'rana.jpg',
];
let paginaActual = 0;

function irASiguientePagina() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('gif-inicio').style.display = 'none';  // Ocultar el gif al ir a la página de botones
    document.getElementById('pagina-botones').style.display = 'block';
    posicionarBotones(); // Llama a la función para posicionar los botones
}




function posicionarBotones() {
    const botonesContainer = document.getElementById('botones');
    botonesContainer.innerHTML = ''; // Limpiar contenido anterior

    const positions = []; // Para almacenar posiciones de botones

    for (let i = 0; i < totalBotones; i++) {
        const boton = document.createElement('button');
        boton.innerText = `Botón ${i + 1}`;
        
        // Agregar evento de clic a cada botón
        boton.onclick = function() {
            if (i + 1 === 7) {
                mostrarCarta(); // Si es el botón 7, mostrar la carta
            } else {
                mostrarImagen(i); // Si es otro botón, mostrar una imagen
            }
        };
        
        botonesContainer.appendChild(boton);
        
        let position;
        do {
            // Generar una nueva posición aleatoria
            const x = Math.random() * (window.innerWidth - 150); // 150 es el ancho aproximado del botón
            const y = Math.random() * (window.innerHeight - 50); // 50 es la altura aproximada del botón
            position = { x, y };
        } while (positions.some(pos => {
            // Verificar si la nueva posición se superpone con las anteriores
            return (
                position.x < pos.x + 150 &&
                position.x + 150 > pos.x &&
                position.y < pos.y + 50 &&
                position.y + 50 > pos.y
            );
        }));

        // Almacenar la posición y aplicar estilo al botón
        positions.push(position);
        boton.style.position = 'absolute';
        boton.style.left = `${position.x}px`;
        boton.style.top = `${position.y}px`;
    }
}

function mostrarImagen(indice) {
    document.getElementById('pagina-botones').style.display = 'none';
    document.getElementById('libro').style.display = 'block';
    paginaImagen.src = imagenes[indice]; // Mostrar la imagen seleccionada
    
    // Cambiar el tamaño de la imagen
    paginaImagen.style.width = '400px'; // Establecer el ancho que desees
    paginaImagen.style.height = 'auto'; // Mantener la relación de aspecto original
}

function mostrarCarta() {
    document.getElementById('pagina-botones').style.display = 'none';
    document.getElementById('carta').style.display = 'block'; // Mostrar la carta
}

function volverBotones() {
    document.getElementById('libro').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('pagina-botones').style.display = 'block'; // Volver a la página de botones
}

function volverInicio() {
    // Ocultar todas las secciones excepto la de inicio
    document.getElementById('pagina-botones').style.display = 'none';
    document.getElementById('libro').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    
    // Mostrar la página de inicio
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('gif-inicio').style.display = 'block';  // Mostrar el gif cuando se vuelve a la página de inicio
}
    
    // Mostrar la página de inicio
    document.getElementById('inicio').style.display = 'block'; 


// Ejecutar la función de posicionamiento de botones al cargar la página
window.onload = function() {
    // Mostrar siempre la página de inicio
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('pagina-botones').style.display = 'none';
    document.getElementById('libro').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
};

