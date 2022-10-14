import { useEffect, useState } from 'react';
import Pages from '../../services/pages.service';
import Articles from '../../services/articles.service';
import ArticlesList from '../ArticlesList/ArticlesList';
import './Section.scss';

const itemSetup = {picture: {lg: ''}, media: []};

const Section = ({ slug, theme = 'dark', align = 'left', segmentId = null, children = null }) => {

	const [page, setPage] = useState(itemSetup);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		Pages.getOne(slug).then(
			response => {
				if(response.item !== undefined) {
					setPage(response.item);
				}
			}
		);
		if(segmentId !== null){
			Articles.getByCategory(segmentId).then(
				response => {
					setArticles(response.items);
				}
			);
		}
	}, []);

	return (
		<section className={theme} id={ slug }>
			<div className={`container text-${align}`}>
				<div className="content">
					{ page.media.length !== 0 ? 
						(
							<figure className={ `image` }>
								<img src={ page.picture.lg } className="img-fluid" />
							</figure>
						)
						: ''
					}
					<h1>{ page.title }</h1>
					<div className="content-body" dangerouslySetInnerHTML={{ __html: page.content }}></div>
					{
						articles.length !== 0 
						? (<ArticlesList articles={articles} />)
						: ''
					}
					{ children }
				</div>
			</div>
		</section>
	);
}

export default Section;