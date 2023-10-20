function validaform() {
    if (document.formulario.nombre.value.length <3) {
        alert("Tiene que escribir su nombre. Debe tener 3 caracteres o más");
        document.formulario.nombre.focus();
        return false;
    }

    let apellido = document.getElementById("ape").value;
	if( apellido.length < 3)
	{
		alert("El apellido tiene que tener al menos 3 letras. Ingrese nuevamente.");
        document.formulario.apellido.focus();
        return false;
    }

    let correo = document.getElementById("mail").value;
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
        alert("Ingrese un correo válido en el formato xxx@yyy.com.");
        document.formulario.mail.focus();
        return false;
    }

    let comensales = document.getElementById("cant").value;
	
    if(comensales <1 || comensales>12){
		alert ("No es valida la cantidad de comensales. Ingrese una cantidad entre 1 y 12 personas.");
        document.formulario.comensales.focus();
        return false;
	}
    
    let fecha = document.formulario.fecha.value;
    let fechaActual = new Date().toISOString().split('T')[0]; 

    if (fecha < fechaActual) {
        alert("La fecha debe ser igual o posterior a la fecha actual.");
        document.formulario.fecha.focus();
        return false;
    }

    let horarios = document.getElementsByName("horario");
    let horarioSeleccionado = false;

    for (let i = 0; i < horarios.length; i++) {
        if (horarios[i].checked) {
            horarioSeleccionado = true;
            break;
        }
    }

    if (!horarioSeleccionado) {
        alert("Debe seleccionar un horario.");
        return false;
    }


    else {
        alert("Muchas gracias por elegirnos. Su reverva ha sido registrada");
        document.formulario.submit();
        return;
    }
    }
    
    

