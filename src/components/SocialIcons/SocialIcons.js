import { useContext } from 'react';
import { DataContext } from '../../services/data.context';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import tiktok from '../../assets/icons/tiktok.svg';
import youtube from '../../assets/icons/youtube.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import './SocialIcons.scss';

const SocialIcons = ({ data }) => {

	const data_context = useContext(DataContext);

	const findData = (dataLabel, datatype = 'value') => {
		return data_context.dataFinder(data, 'contact', dataLabel, datatype);
	}

	return (
		<div className="icons">

			{ // Se muestra si está activada desde el admin
			findData('facebook', 'status') === 1 ?
			<a href={ findData('facebook') } target="_blank">
				<img src={ facebook } className="icon" />
			</a> : ''
			}

			{ // Se muestra si está activada desde el admin
			findData('instagram', 'status') === 1 ?
			<a href={ findData('instagram') } target="_blank">
				<img src={ instagram } className="icon" />
			</a> : ''
			}

			{ // Se muestra si está activada desde el admin
			findData('twitter', 'status') === 1 ?
			<a href={ findData('twitter') } target="_blank">
				<img src={ twitter } className="icon" />
			</a> : ''
			}

			{ // Se muestra si está activada desde el admin
			findData('tiktok', 'status') === 1 ?
			<a href={ findData('tiktok') } target="_blank">
				<img src={ tiktok } className="icon" />
			</a> : ''
			}

			{ // Se muestra si está activada desde el admin
			findData('youtube', 'status') === 1 ?
			<a href={ findData('youtube') } target="_blank">
				<img src={ youtube } className="icon" />
			</a> : ''
			}

			{ // Se muestra si está activada desde el admin
			findData('whatsapp', 'status') === 1 ?
			<a href={ findData('whatsapp') } target="_blank">
				<img src={ whatsapp } className="icon" />
			</a> : ''
			}

		</div>
	);
}

export default SocialIcons;