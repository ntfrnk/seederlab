import { useEffect, useState } from 'react';
import Pages from '../../services/pages.service';
import './Section.scss';

const itemSetup = {picture: {lg: ''}};

const Section = ({ slug, theme = 'dark' }) => {

	const [page, setPage] = useState(itemSetup);

	useEffect(() => {
		Pages.getOne(slug).then(
			response => {
				if(response.item !== undefined){
					setPage(response.item);
				}
			}
		);
	}, []);

	return (
		<section className={theme} id={ slug }>
			<div className="container">
				<h1>{ page.title }</h1>
				<div className="row">
					{ page.picture.lg !== "" ? 
						(
							<div className="col-12 col-md-4 order-last">
								<img src={ page.picture.lg } className="img-fluid" />
							</div>
						)
						: ''
					}
					{ page.content }
				</div>
			</div>
		</section>
	);
}

export default Section;