import { Link } from 'react-scroll';
import './Footer.scss';

const Footer = ({ items, contact }) => {

	return (
		<footer className="container">
			<div className="row">
				<div className="col-md-4">
					<h3>Navegación</h3>
					<ul>
						{ items.lenght !== 0 
						? items.map(item => 
							(<Link to={ item.slug } key={ item.id } spy={true} offset={-70} duration={500}>{ item.menuitem }</Link>)
						) 
						: '' }
					</ul>
				</div>
				<div className="col-md-4">
					<h3>Nuestras redes</h3>
					<ul>
						{ contact.find(item => item.label === 'facebook') ?
						<li>
							<a href={ contact.find(item => item.label === 'facebook').value } target="_blank">
								{ contact.find(item => item.label === 'facebook').name }
							</a>
						</li>
						: '' }
						{ contact.find(item => item.label === 'instagram') ?
						<li>
							<a href={ contact.find(item => item.label === 'instagram').value } target="_blank">
								{ contact.find(item => item.label === 'instagram').name }
							</a>
						</li>
						: '' }
						{ contact.find(item => item.label === 'twitter') ?
						<li>
							<a href={ contact.find(item => item.label === 'twitter').value } target="_blank">
								{ contact.find(item => item.label === 'twitter').name }
							</a>
						</li>
						: '' }
						{ contact.find(item => item.label === 'youtube') ?
						<li>
							<a href={ contact.find(item => item.label === 'youtube').value } target="_blank">
								{ contact.find(item => item.label === 'youtube').name }
							</a>
						</li>
						: '' }
						{ contact.find(item => item.label === 'tiktok') ?
						<li>
							<a href={ contact.find(item => item.label === 'tiktok').value } target="_blank">
								{ contact.find(item => item.label === 'tiktok').name }
							</a>
						</li>
						: '' }
					</ul>
				</div>
				<div className="col-md-4">
					<h3>Contacto con nosotros</h3>
					<ul>
						{ contact.find(item => item.label === 'cellphone') && contact.find(item => item.label === 'whatsapp') ?
						<li>
							<a href={ contact.find(item => item.label === 'whatsapp').value } target="_blank">
								{ contact.find(item => item.label === 'cellphone').value }
							</a>
						</li>
						: '' }
						{ contact.find(item => item.label === 'email') ?
						<li>
							<a href={ contact.find(item => item.label === 'email').value } target="_blank">
								{ contact.find(item => item.label === 'email').name }
							</a>
						</li>
						: '' }
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;