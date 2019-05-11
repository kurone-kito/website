import ReactMarkdown from 'react-markdown';

const Articles = ({articles}) => (
  <div>
    {articles.map((e) => (
      <div className="article">
        <ReactMarkdown source={e} />
      </div>
    ))}
    <style jsx>{`
      .article {
        border: 1px solid darkcyan;
        border-radius: 5px;
        margin: 0px auto;
        padding: 0.3em;
        max-width: 600px;
      }
    `}</style>
  </div>
);

const NoArticle = () => (
  <div>
    <div className="message">No Article</div>
    <style jsx>{`
      .message {
        text-align: center;
        margin: 0px auto;
        color: darkred;
        border: 1px solid darkred;
        border-radius: 5px;
        max-width: 600px;
      }
    `}</style>
  </div>
);

import Header from '../comps/header';
import Footer from '../comps/footer';

const News = ({articles}) => (
  <div>
    <Header currentTitle={'News'} />
    {articles ? <Articles articles={articles} /> : <NoArticle />}
    <Footer />
  </div>
);

import fetch from 'isomorphic-unfetch';

News.getInitialProps = async () => {
  const indexJson = await fetch(
    'http://localhost:3000/static/articles/_index.json'
  );
  const index = await indexJson.json();
  const articles = await Promise.all(
    index.articles.map((e) =>
      fetch(`http://localhost:3000/static/articles/${e}`).then((res) =>
        res.text()
      )
    )
  );
  return {articles};
};

export default News;
