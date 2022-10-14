import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticlesList.scss';

const ArticlesList = ({articles}) => {

	return (
		<div className="articles-list mt40">
			{ articles.length !== 0 ? 
			articles.map(
				article => (
					<ArticleCard key={ article.id } article={ article } />
				)
			) 
			: '' }
		</div>
	);
}

export default ArticlesList;