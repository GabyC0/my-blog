import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const Article = () => {
  //pull article id straight from useParams, which is an object with keys of "articleId" value: whatever the current string at the specific part of URL
  const { articleId } = useParams();
  //using js find function to specify article with a name property equal to article id
  const article = articles.find(article => article.name === articleId);

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
          //since list will never change, we can add i here as the key
          <p key={i}>{paragraph}</p>
        ))}
    </>
  );
};

export default Article;
