import React from 'react';
import ReactMarkdown from 'react-markdown';
import stringHash from 'string-hash';
import Footer from '../comps/footer';
import Header from '../comps/header';

const Articles = ({articles}) => (
  <div>
    {articles.map((e) => (
      <div key={stringHash(e)} className="article">
        <ReactMarkdown source={e} />
      </div>
    ))}
    <style jsx>
      {`
        .article {
          border: 1px solid darkcyan;
          border-radius: 5px;
          margin: 0px auto;
          padding: 0.3em;
          max-width: 600px;
        }
      `}
    </style>
  </div>
);

const NoArticle = () => (
  <div>
    <div className="message">No Article</div>
    <style jsx>
      {`
        .message {
          text-align: center;
          margin: 0px auto;
          color: darkred;
          border: 1px solid darkred;
          border-radius: 5px;
          max-width: 600px;
        }
      `}
    </style>
  </div>
);

const News = ({articles}) => (
  <div>
    <Header currentTitle="News" />
    {articles ? <Articles articles={articles} /> : <NoArticle />}
    <Footer />
  </div>
);

News.getInitialProps = async () => {
  const {default: index} = await import('../static/articles.json');
  const articles = await Promise.all(
    index.articles.map((e) =>
      import(`../static/articles/${e}`).then((res) => res.default)
    )
  );
  return {articles};
};

export default News;
