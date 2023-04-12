const pianoTeclas = document.querySelectorAll('.tecla') // Seleciona todas las teclas 

function playSound(newUrl) {    // Función para reproducir el sonido
    console.log(newUrl) // Imprime la url del sonido
    new Audio(newUrl).play()    // Reproduce el sonido
}


pianoTeclas.forEach((pianoTeclas, i) => {   // Recorre todas las teclas
    const numero = i < 9 ? '0' + (i + 1) : (i + 1)  // Si el número es menor a 9, le agrega un 0 delante
    const newUrl = 'sounds/key' + numero + '.mp3'    // Crea la url del sonido
    pianoTeclas.addEventListener('click', () => playSound(newUrl))  // Agrega un evento click a cada tecla
})