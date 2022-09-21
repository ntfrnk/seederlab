import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../services/data.context';
import Data from '../../services/data.service';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import './Temporary.scss';
import logo from '../../assets/img/logo.svg';

const Temporary = () => {

	const [ social, setSocial ] = useState();

	const data_context = useContext(DataContext);

	const findData = (dataGroup, dataLabel, datatype = 'value') => {
		return data_context.dataFinder(social, dataGroup, dataLabel, datatype);
	}

	useEffect(() => {
		
		Data.getData().then(response => {
			setSocial(response.item);
			document.title = response.item.name;
		});
		
	}, []);

	return (
		<div className="container component">
			<div className="">

				<div className="logo">
					<img src={ logo } className="img-fluid" />
				</div>

				<div className="building">
					<p>{ findData('texts', 'building_1') }</p>
					<p>{ findData('texts', 'building_2') }</p>
				</div>

				<SocialIcons data={ social } />

			</div>

		</div>
	);
}

export default Temporary;