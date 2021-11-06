import axios from 'axios';

import NewsItem from './NewsItem';

import { useEffect, useState } from 'react/cjs/react.development';
import { NewsListForm } from './News.style';
import { baseURL } from 'src/api/News/News.config';
import { SwalBadRequest, SwalUnauthorized, SwalServerError } from 'src/Utils/SweetAlert/Error';

const apiKey: string = '2de1f8590ab3470087b4f5e2d7d37e89';

const NewsList = () => {
  const [article, setArticle] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      await axios.get(`${baseURL}/v2/top-headlines?country=kr&apiKey=${apiKey}`)
        .then((respoense) => {
          setArticle(respoense.data['articles']);
        }).catch((error) => {
          if (error.response.status === 400) SwalBadRequest();
          else if (error.response.status === 401) SwalUnauthorized();
          else if (error.response.status >= 500) SwalServerError();
        });
      setLoading(false);
    }
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <NewsListForm>대기 중...</NewsListForm>
  }
  
  // 아직 article 값이 설정되지 않았을 때
  if (!article) {
    return null;
  }

  // article 값이 유효할 때
  return (
    <NewsListForm>
      {
        article.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      }
    </NewsListForm>
  )
}

export default NewsList;