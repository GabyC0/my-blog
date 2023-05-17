import { Link } from "react-router-dom";

//passing {articles} as a prop, hlep
const ArticlesFromList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        //to make sure the link is to the article from the specific param
        <Link
          key={article.name}
          className="article-list-item"
          to={`/articles/${article.name}`}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};
export default ArticlesFromList;
