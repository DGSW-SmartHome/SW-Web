import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import NewsItem from './NewsItem';

const apiKey = '2de1f8590ab3470087b4f5e2d7d37e89';

const NewsList = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`)
        .then((respoense) => {
          setArticle(respoense.data['articles']);
        }).catch((error) => {
          console.log(error);
        });
      setLoading(false);
    }
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div style={newsList}>대기 중...</div>
  }
  
  // 아직 article 값이 설정되지 않았을 때
  if (!article) {
    return null;
  }

  // article 값이 유효할 때
  return (
    <div style={newsList}>
      {
        article.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      }
    </div>
  )
}

// css
const newsList = {
  boxSizing: 'border-box',
  paddingBottom: '3rem',
  width: '30vw',
  margin: '0 auto',
  marginTop: '2rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  borderRadius: '10px'
}

export default NewsList;