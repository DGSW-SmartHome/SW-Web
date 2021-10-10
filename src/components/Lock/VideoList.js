import axios from "axios";
import { useEffect, useState } from "react"
import Video from "./Video";

const VideoList = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get('http://10.80.163.68:8000/')
        .then((response) => {
          setArticle(response.data);
        }).catch((error) => {
          console.log(error);
        });
      setLoading(false);
    }
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div style={errorMessage}>불러오는 중...</div>
  }

  return (
    <>
      {
        article !== null ? article.article.map(article => {
          <Video article={article} />
        }) : <div style={errorMessage}>영상이 없습니다.</div>
      }
    </>
  )
}

// CSS
const errorMessage = {
  textAlign: 'center',
  verticalAilgn: 'middle',
  lineHeight: '80vh',
  fontSize: '7vmin'
}

export default VideoList;