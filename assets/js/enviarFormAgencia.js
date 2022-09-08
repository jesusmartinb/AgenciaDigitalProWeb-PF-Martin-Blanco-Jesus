const btn = document.getElementById('button');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('tel');
const email = document.getElementById('email');
const vacante = document.getElementById('vacante');
const actual = document.getElementById('actual');
const portfolio = document.getElementById('portfolio');
const cv = document.getElementById('cv');

document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();

	btn.value = 'Enviando...';

	const serviceID = 'default_service';
	const templateID = 'template_jzeozyh';

	emailjs.sendForm(serviceID, templateID, this)
		.then(() => {
			btn.value = 'Enviar Candidatura';
			nombre.value = '';
			telefono.value = '';
			email.value = '';
			vacante.value = '';
			// actual.value = '';
			portfolio.value = '';
			// cv.value = '';

			// Swal.fire(
			// 	'Consulta enviada',
			// 	'A la brevedad nos comunicaremos',
			// 	'success'
			// )

		}, (err) => {
			btn.value = 'Enviar Candidatura';
			alert(JSON.stringify(err));
		});
});

emailjs.init('WUVodRdv02zVPiGM2');
