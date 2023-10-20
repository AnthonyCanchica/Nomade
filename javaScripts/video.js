document.addEventListener('DOMContentLoaded', function () {
    const contenidoNosotros = document.querySelector('.contenido-nosotros');
    const videoElement = document.querySelector('.video-nosotros video');
    const audioElement = document.querySelector('.video-nosotros audio');

    contenidoNosotros.addEventListener('mouseenter', function () {
        
        videoElement.play();
        audioElement.play();
    });

    contenidoNosotros.addEventListener('mouseleave', function () {
        
        videoElement.pause();
        audioElement.pause();
    });
});









