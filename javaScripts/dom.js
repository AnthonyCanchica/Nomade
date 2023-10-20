
const footerContainer = document.getElementById("contenedor-footer");
footerContainer.innerHTML = `
<div id="horarios">
    <a href="#top" class="volver-arriba">Volver arriba</a>
	<img src="../imagenesDos/logos/tiempo.png" class="logoutm">
	<h3>HORARIO DE APERTURA</h3>
	<h3>Miercoles a Sabados 19 HRS</h3>
</div>
<div class="contenedor-info">
	<!-- Direccion -->
	<div id="direccion">
	<img src="../imagenesDos/logos/alfiler.png" class="logoutm" >
		<h3>DIRECCIÓN</h3>
		<p><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.263507090625!2d-58.428881825005966!3d-34.57219845583303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb585ebbf48ed%3A0x73350aa5aaadc57f!2sNomade%20-%20F%26D!5e0!3m2!1ses!2sar!4v1694689456606!5m2!1ses!2sar" target="_blank">Av. Dorrego 3300<br>
			Recoleta, Ciudad de Buenos Aires<br> Argentina</a>
        </p>
	</div>
	<!-- Numeros -->
	<div id="telefono">
		<img src="../imagenesDos/logos/informacion.png" class="logoutm" >
		<h3>TELÉFONO</h3>
		<p><b>(+549) 1156074972<b></p>
		<br>
		<br>
	</div>
	<!-- Emails -->
	<div id="email">
		<img src="../imagenesDos/logos/correo-electronico.png" class="logoutm" >
		<h3>Email</h3>
		<p><b><a href="mailto:info@parrillaNomade.com.ar" target="_blank">info@parrillaNomade.com.ar</a><b></p>
		<br>
		<br>
	</div>
</div>
	<!-- Social icons -->
<div class="social">
	<!-- Facebook -->
	<a href="https://www.facebook.com/parrillaNomade/" target="_blank">
		<i class="fa fa-facebook"></i>
	</a>
	<!-- Instagram-->
	<a href="https://www.instagram.com/parrillaNomade/" target="_blank">
		<i class="fa fa-instagram"></i>
	</a>
</div>
`; 

const headerContainer = document.getElementById("contenedor-header");
headerContainer.innerHTML = `
<h1>NOMADE</h1>
<H2>Food & Drinks</H2>
`;

const navContainer = document.getElementById("contenedor-nav");
navContainer.innerHTML = `
<nav class="nav-principal">
    <a href="index.html">Inicio</a>
    <a href="menu.html">Menu</a>
    <a href="reservas.html">Reservas</a>
	<a href="Quienes.html">Quienes Somos</a>
    <a href="eventos.html">Eventos</a>
</nav>
`;

var nav = document.getElementById("contenedor-nav");

var navOffsetTop = nav.offsetTop;

function fijarBarraNavegacion() {
    if (window.pageYOffset > navOffsetTop) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    } else {
        nav.style.position = "static";
    }
}

window.addEventListener("scroll", fijarBarraNavegacion);



