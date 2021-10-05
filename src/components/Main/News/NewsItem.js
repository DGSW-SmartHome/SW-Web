import './News.scss';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div className='news-main-content'>
      { urlToImage && (
        <div className='news-thumnail'>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt='newsThumnail' />
          </a>
        </div>
      )}
      <div className='news-contents'>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <p>{description}</p>
        </h2>
      </div>
    </div>
  )
}

export default NewsItem;