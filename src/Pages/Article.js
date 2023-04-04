import { useParams } from "react-router-dom";
import articles from "./article-content";

const Article = () => {
  //pull article id straight from useParams
  const { articleId } = useParams();
  //using js find function to specify article with a name property equal to article id
  const article = articles.find(article => article.name === articleId);

  return (
    <>
      <h1>{article.title}</h1>
        {article.content.map(paragraph => (
          <p>{paragraph}</p>
        ))}
    </>
  );
};

export default Article;
