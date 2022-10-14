import Slider from '../../components/Slider/Slider';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactData from '../../components/ContactData/ContactData';
import './Home.scss';

const Home = () => {

	document.body.style.background = '#013448';

	return (
		<div className='App'>
			<Slider />
			<Section slug="about-us" theme="light" align="start">
				<a href="" className="button mt20">
					<span>¿Te gustaría preguntar algo?</span>
				</a>
			</Section>
			<Section slug="projects" theme="dark" align="center" segmentId="42" items="3" />
			<Section slug="contact" theme="light" align="center">
				<div className="contact pt20">
					<div className="row">
						<div className="col-6">
							<ContactForm />
						</div>
						<div className="col-6">
							<ContactData />
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}

export default Home;