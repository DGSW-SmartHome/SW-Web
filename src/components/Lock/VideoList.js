import axios from "axios";
import { useEffect, useState } from "react"
import Video from "./Video";
import { Error } from './Lock.style';

const VideoList = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get('http://192.168.0.18:8000/')
        .then((response) => {
          setArticle(response.data['article']);
        }).catch((error) => {
          console.log(error);
        });
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(article);
  }, [article]);

  // 대기 중일 때
  if (loading) {
    return <Error>불러오는 중...</Error>
  }

  return (
    <>
      {
        article ? article.map((article, index) => {
          return ( <Video key={index} article={article} /> )
        }) : <Error>영상이 없습니다.</Error>
      }
    </>
  )
}

// CSS

export default VideoList;