import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticlesList.scss';

const ArticlesList = ({articles}) => {

	console.log(articles);

	return (
		<div className="articles-list mt40">
			{ articles.length !== 0 ? 
			articles.map(
				article => (
					<ArticleCard article={article} />
				)
			) 
			: '' }
		</div>
	);
}

export default ArticlesList;