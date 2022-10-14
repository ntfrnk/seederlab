import './ArticleCard.scss';

let model_article = {
	title: '',
	summary: '',
	picture: {
		md: null
	}
}

const ArticleCard = ({article}) => {

	article = {...model_article, ...article};

	return (
		<div className="article">
			{ article.picture.sm !== null 
			? (
				<figure>
					<img src={article.picture.sm} alt="" className="img-fluid" />
				</figure>
			)
			: '' }
			<div>
				<h3>{article.title}</h3>
				<p>{article.summary}</p>
				<a href="" className="button mt10">
					<span>Leer más</span>
				</a>
			</div>
		</div>
	);
}

export default ArticleCard;