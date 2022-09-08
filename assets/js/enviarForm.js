const btn = document.getElementById('button');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const email = document.getElementById('email');
const telefono = document.getElementById('tel');
const empresa = document.getElementById('empresa');
const web = document.getElementById('web');
const mensaje = document.getElementById('mensaje');

document.getElementById('form-contact').addEventListener('submit', function (event) {
	event.preventDefault();

	btn.value = 'Enviando...';

	const serviceID = 'default_service';
	const templateID = 'template_fsl8o69';

	emailjs.sendForm(serviceID, templateID, this)
		.then(() => {
			btn.value = 'Enviar';
			nombre.value = '';
			apellidos.value = '';
			email.value = '';
			telefono.value = '';
			empresa.value = '';
			web.value = '';
			mensaje.value = '';

			// Swal.fire(
			// 	'Consulta enviada',
			// 	'A la brevedad nos comunicaremos',
			// 	'success'
			// )

		}, (err) => {
			btn.value = 'Enviar';
			alert(JSON.stringify(err));
		});
});

emailjs.init('WUVodRdv02zVPiGM2');