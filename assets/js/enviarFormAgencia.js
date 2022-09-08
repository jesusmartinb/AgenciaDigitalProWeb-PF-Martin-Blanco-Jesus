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

	const serviceID = 'service_q6q8ost';
	const templateID = 'template_jzeozyh';

	emailjs.sendForm(serviceID, templateID, this, 'WUVodRdv02zVPiGM2')
		.then(() => {
			btn.value = 'Enviar Candidatura';
			alert('Enviado');
			nombre.value = '';
			telefono.value = '';
			email.value = '';
			vacante.value = '';
			actual.selectIndex = 0;
			portfolio.value = '';
			cv.value = '';
			alert('Enviado correctamente');

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

// emailjs.init('');
