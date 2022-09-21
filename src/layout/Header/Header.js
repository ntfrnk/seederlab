import { Link } from 'react-scroll';
import Icon from '../../components/Icon/Icon';
import logoh from '../../assets/img/logoh.svg';

import './Header.scss';

const Header = ({ items }) => {

	return (
		<>
			<header>
				<div className="container header-content">
					<div className="logo">
						<Link to={'top'} offset={-100}>
							<img src={ logoh } />
						</Link>
					</div>
					<div className="menu">
						<div className="mobile d-block d-md-none">
							<Icon name="menu" size="36" color="#FFF" style={{ marginTop: '3px' }} />
						</div>
						<div className="desktop d-none d-md-block">
							<nav>
								{ items.lenght !== 0 
								? items.map(item => 
									(<Link to={ item.slug } key={ item.id } spy={true} offset={-70} duration={500}>{ item.menuitem }</Link>)
								) 
								: '' }
							</nav>
						</div>
					</div>
				</div>
			</header>
			<nav className="menu-mobile">
				{ items.lenght !== 0 
				? items.map(item => 
					(<Link to={ item.slug } key={ item.id } spy={true} offset={-70} duration={500} onSetActive="">{ item.menuitem }</Link>)
				) 
				: '' }
			</nav>
		</>
	);
}

export default Header;