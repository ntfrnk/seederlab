import { useContext, useState, useEffect } from 'react';
import { DataProvider, DataContext } from './services/data.context';
import Router from './pages/Router';
import Data from './services/data.service';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Loader from './components/Loader/Loader';
import './App.scss';

function App() {

	const [ dataSite, setDataSite ] = useState({status: 2});
	const [ navigation, setNavigation ] = useState([]);
	const [ contact, setContact ] = useState([]);

	const data_context = useContext(DataContext);

	const findData = (dataGroup, dataLabel, datatype = 'value') => {
		return data_context.dataFinder(dataSite, dataGroup, dataLabel, datatype);
	}

	useEffect(() => {
		
		Data.getData().then(
			response => {
				setDataSite(response.item);
				setContact(response.item.groups.find(item => item.label === 'contact').data);
				document.title = response.item.name;
			}
		);

		Data.getNavigation().then(
			response => {
				setNavigation(response.items.filter(item => item.menuitem !== '----'));
			}
		);
		
	}, []);

	return (
		<DataProvider>
			<Header items={ navigation } />
			<Router status={ dataSite.status } />
			<Footer items={ navigation } contact={ contact } />
		</DataProvider>

	);
}

export default App;
