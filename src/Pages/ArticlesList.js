import articles from "./article-content";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map(article => (
        //to make sure the link is to the article from the specific param
        <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0,150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;
