document.addEventListener('DOMContentLoaded', function () {
    const contenidoNosotros = document.querySelector('.contenido-nosotros');
    const videoElement = document.querySelector('.video-nosotros video');
    const audioElement = document.querySelector('.video-nosotros audio');

    contenidoNosotros.addEventListener('mouseenter', function () {
        // Reproducir el video y la música cuando el mouse entra
        videoElement.play();
        audioElement.play();
    });

    contenidoNosotros.addEventListener('mouseleave', function () {
        // Pausar el video y la música cuando el mouse sale
        videoElement.pause();
        audioElement.pause();
    });
});









