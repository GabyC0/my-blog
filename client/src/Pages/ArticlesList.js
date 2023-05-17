import ArticlesFromList from "../Components/ArticlesFromList";
import articles from "./article-content";

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesFromList articles={articles}/>
    </>
  );
};

export default ArticlesList;
