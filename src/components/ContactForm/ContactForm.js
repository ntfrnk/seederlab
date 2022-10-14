import './ContactForm.scss';

const ContactForm = () => {

	return (
		<div className="contact-form">
			<div className="form-group mb10">
				<label htmlFor="">Nombre completo:</label>
				<input type="text" className="form-control former" placeholder="Escribe tu nombre..." />
			</div>
			<div className="form-group mb10">
				<label htmlFor="">Celular:</label>
				<input type="tel" className="form-control former" placeholder="Escribe tu número..." />
			</div>
			<div className="form-group mb10">
				<label htmlFor="">Consulta:</label>
				<textarea className="form-control former" rows="5" placeholder="Escribe tu número..."></textarea>
			</div>
			<div className="form-group pt10">
				<button className="button">
					<span>Enviar consulta</span>
				</button>
			</div>
		</div>
	);
}

export default ContactForm;