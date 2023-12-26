import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PaginationComponent from './PaginationComponent';
import './ArticleList.css';

const pageSize = 6;

const ArticleList = ({ articles }) => {
  articles = articles || [];
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastArticle = currentPage * pageSize;
  const indexOfFirstArticle = indexOfLastArticle - pageSize;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const truncateText = (text, words) => {
    if (text == null) {
      return '';
    }

    const wordArray = text.split(' ');
    if (wordArray.length > words) {
      return `${wordArray.slice(0, words).join(' ')}...`;
    }
    return text;
  };

  const extractDate = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);
    return dateObject.toDateString();
  };

  const handleOpenArticle = (url) => {
    window.open(url, '_blank');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4 rower">
        {currentArticles.map((article) => (
          <Col key={article.url}>
            <div className="card my-4 mx-2" style={{ width: '18rem' }}>
              {article.urlToImage && (
                <img variant="top" src={article.urlToImage} alt={article.title} />
              )}
              <div className="card-body">
                <h5 className="card-title">{truncateText(article.title, 12)}</h5>
                <p className="card-text">{truncateText(article.description, 16)}</p>
                <p className="card-text">Source: {article.source?.name}</p>
                <p className="card-text">Published: {extractDate(article.publishedAt)}</p>
                <Button className="btn-primary" onClick={() => handleOpenArticle(article.url)}>
                  Read More
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / pageSize)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArticleList;
