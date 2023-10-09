class Comida {
    constructor(name, species, status, location, image) {
        this.name = name;
        this.species = species;
        this.status = status;
        this.location = location;
        this.image = image;
    }
}

let datosJsonFetch;

fetch('../Jsons/menu.json', { method: 'GET' })
    .then(resp => resp.json())
    .then((salida) => {
        datosJsonFetch = salida;

        // Supongamos que deseas mostrar la primera comida en el JSON
        const primeraComida = datosJsonFetch[0];

        const imagen = document.getElementById("imagen");
        imagen.setAttribute("src", primeraComida.image);

        document.getElementById("name").textContent = primeraComida.name;
        document.getElementById("species").textContent = primeraComida.species;
        document.getElementById("status").textContent = primeraComida.status;
        document.getElementById("location").textContent = primeraComida.location.name;
});

// Supongamos que tienes el JSON almacenado en una variable llamada "menuData"
const menuData = [
    // ... Tus datos del menú
  ];
  
  // Función para mostrar un grupo de productos en la página
  function mostrarProductosEnPagina(productos) {
    const listadoProductos = document.querySelector('.listado-productos');
    listadoProductos.innerHTML = '';
  
    productos.forEach(producto => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('producto');
  
      const imagen = document.createElement('img');
      imagen.src = producto.image || 'img/default.jpg';
      imagen.alt = 'Imagen Producto';
      productoDiv.appendChild(imagen);
  
      const textoProducto = document.createElement('div');
      textoProducto.classList.add('texto-producto');
  
      const titulo = document.createElement('h3');
      titulo.textContent = producto.food || 'Nombre del Producto';
      textoProducto.appendChild(titulo);
  
      const descripcion = document.createElement('p');
      descripcion.textContent = producto.description || 'Descripción del Producto';
      textoProducto.appendChild(descripcion);
  
      const precio = document.createElement('p');
      precio.classList.add('precio');
      precio.textContent = `$${producto.price.toFixed(2)}`;
      textoProducto.appendChild(precio);
  
      const boton = document.createElement('a');
      boton.classList.add('btn');
      boton.href = '#';
      boton.textContent = 'Agregar al Carrito';
      textoProducto.appendChild(boton);
  
      productoDiv.appendChild(textoProducto);
      listadoProductos.appendChild(productoDiv);
    });
  }
  
  // Función para paginar el menú
  function paginarMenu(menu, itemsPorPagina) {
    const paginas = [];
    for (let i = 0; i < menu.length; i += itemsPorPagina) {
      paginas.push(menu.slice(i, i + itemsPorPagina));
    }
    return paginas;
  }
  
  const itemsPorPagina = 6;
  const paginasMenu = paginarMenu(menuData, itemsPorPagina);
  
  // Inicialmente, muestra la primera página de productos
  mostrarProductosEnPagina(paginasMenu[0]);
  
  // Función para cambiar de página
  function cambiarPagina(pagina) {
    mostrarProductosEnPagina(paginasMenu[pagina]);
  }
  
  // Crea botones de paginación
  const paginacionContainer = document.querySelector('.paginacion');
  for (let i = 0; i < paginasMenu.length; i++) {
    const botonPagina = document.createElement('button');
    botonPagina.textContent = i + 1; // Página 1, 2, 3, ...
    botonPagina.addEventListener('click', () => cambiarPagina(i));
    paginacionContainer.appendChild(botonPagina);
  }


// Mostrar la primera página al cargar la página
cambiarPagina(0);

