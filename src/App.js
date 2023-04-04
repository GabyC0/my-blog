import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Article from './Pages/Article';
import ArticlesList from './Pages/ArticlesList';
//import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<Article />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
