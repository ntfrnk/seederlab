import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Sliders from '../../services/sliders.service';
import SliderItem from './SliderItem';
import './Slider.scss';

const Slider = () => {

	const [sliders, setSliders] = useState([]);
	const [device, setDevice] = useState('mobile');

	useEffect(() => {
		Sliders.getAll().then(
			response => {
				if(response.items !== undefined){
					setSliders(response.items);
					setDevice(window.innerWidth <= 768 ? 'mobile' : 'desktop');
				}
			}
		);
	}, []);

	const options = {
		loop: true,
		margin: 0,
		items: 1,
		autoplay: true,
		dots: false
	};

	return (
		<OwlCarousel className="owl-theme" id="top" {...options}>
			{ 
			sliders.length > 0 
			? sliders.map(item => <SliderItem item={item} device={device} key={item.id} />)
			: ''
			}
		</OwlCarousel>
	);
}

export default Slider;