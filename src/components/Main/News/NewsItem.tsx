import { 
  NewsMainContent,
  NewsContentThumnail,
  NewsContents,
  NewsContentsTitle,
  NewsContentsSubTitle 
} from './News.style';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsMainContent>
      { urlToImage && (
        <NewsContentThumnail>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt='newsThumnail' />
          </a>
        </NewsContentThumnail>
      )}
      <NewsContents>
        <h2>
          <NewsContentsTitle href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </NewsContentsTitle>
          <NewsContentsSubTitle>{description}</NewsContentsSubTitle>
        </h2>
      </NewsContents>
    </NewsMainContent>
  )
}

export default NewsItem;