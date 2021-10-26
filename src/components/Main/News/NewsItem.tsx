import { 
  NewsMainContent,
  NewsContentThumnail,
  NewsContents,
  NewsContentsTitle,
  NewsContentsSubTitle 
} from './News.style';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  
  const stringProcessing = (description) => {
    let subtitle = '' + description;
    let Description = '';
    if (subtitle.length >= 120) {
      Description = subtitle.substr(0, 120);
      subtitle = Description + '...';
      console.log(subtitle);
    }
    return subtitle
  }

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
          <NewsContentsSubTitle>{stringProcessing(description)}</NewsContentsSubTitle>
        </h2>
      </NewsContents>
    </NewsMainContent>
  )
}

export default NewsItem;