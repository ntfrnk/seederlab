import Slider from '../../components/Slider/Slider';
import Section from '../../components/Section/Section';
import './Home.scss';

const Home = () => {

	return (
		<div className='App'>
			<Slider />
			<Section slug="about-us" theme="light" />
			<Section slug="teamwork" />
			<Section slug="projects" theme="light" />
			<Section slug="contact" />
		</div>
	);
}

export default Home;