// Inicializa EmailJS con tu user_id
(function() {
    emailjs.init("kiIZ1HZkplpy6CETH");  // Aquí va tu public_key de EmailJS
})();
function enviarFormulario(event) {
    event.preventDefault();  // Evita que la página se recargue al enviar el formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje').value;
    const contacto = document.getElementById('contacto').value;

    // Validar que todos los campos requeridos estén llenos
    if (!nombre || !servicio || !fecha || !hora || !contacto) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;  // Detener el envío si falta algún campo
    }

    // Preparar los datos del formulario para enviarlos a EmailJS
    const formData = {
        nombre: nombre,        // Coincide con los campos del template en EmailJS
        servicio: servicio,
        fecha: fecha,
        hora: hora,
        mensaje: mensaje,
        contacto: contacto
    };


    // Enviar el correo utilizando EmailJS
    emailjs.send('service_3brmozo', 'template_b7ccfpg', formData) // Usando tu servicio y template
        .then(function(response) {
            console.log('Correo enviado con éxito:', response);
            alert('¡Tu reserva ha sido enviada correctamente! Te contactaremos pronto.');  // Confirmación de éxito
            document.getElementById('formReserva').reset();  // Resetear el formulario después de enviarlo
        }, function(error) {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un problema al enviar tu reserva. Por favor, intenta nuevamente.');  // Alerta en caso de error
        });
}