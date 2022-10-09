import Slider from '../../components/Slider/Slider';
import Section from '../../components/Section/Section';
import './Home.scss';

const Home = () => {

	return (
		<div className='App'>
			<Slider />
			<Section slug="about-us" theme="light" align="start">
				<a href="" className="button mt20">
					<span>¿Te gustaría preguntar algo?</span>
				</a>
			</Section>
			<Section slug="projects" theme="dark" align="center" segmentId="42" items="3" />
			<Section slug="contact" theme="light">
				<div className="">

				</div>
			</Section>
		</div>
	);
}

export default Home;