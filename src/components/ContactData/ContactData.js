import { useState, useEffect } from 'react';
import DataService from '../../services/data.service';
import Icon from '../../components/Icon/Icon';
import './ContactData.scss';

const ContactData = () => {

	const [dataSite, setDataSite] = useState([]);

	useEffect(() => {
		DataService.getData().then(
			response => {
				let data = response.item.data;
				setDataSite({
					cellphone: data.find(item => item.label === 'cellphone').value,
					email: data.find(item => item.label === 'email').value,
					facebook: data.find(item => item.label === 'facebook').value,
					instagram: data.find(item => item.label === 'instagram').value,
					twitter: data.find(item => item.label === 'twitter').value,
					tiktok: data.find(item => item.label === 'tiktok').value,
					youtube: data.find(item => item.label === 'youtube').value
				});
			}
		);
	});

	return (
		<div className="contact-data text-start">
			
			<p>
				<span>Celular:</span>
				{ dataSite.cellphone }
			</p>
			<p>
				<span>Correo electrónico:</span>
				{ dataSite.email }
			</p>
			<p>
				<span>Redes sociales:</span>
				<a href={ dataSite.facebook } target="_blank"><Icon name="facebook" size="32" vp="25" color="#555" /></a>
				<a href={ dataSite.instagram } target="_blank"><Icon name="instagram" size="24" vp="32" color="#555" style={{ marginBottom: '5px'  }} /></a>
				<a href={ dataSite.twitter } target="_blank"><Icon name="twitter" size="25" vp="30" style={{ marginBottom: '9px', marginLeft: '7px' }} color="#555" /></a>
				<a href={ dataSite.tiktok } target="_blank"><Icon name="tiktok" size="24" vp="34" color="#555" style={{ marginBottom: '4px', marginLeft: '5px'  }} /></a>
				<a href={ dataSite.youtube } target="_blank"><Icon name="youtube" size="28" vp="34" color="#555" style={{ marginBottom: '4px', marginLeft: '5px'  }} /></a>
			</p>

		</div>
	);
}

export default ContactData;