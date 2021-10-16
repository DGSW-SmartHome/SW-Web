import axios from "axios";
import { useEffect, useState } from "react"
import Video from "./Video";

const VideoList = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get('http://192.168.150.189:8000/')
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
    return <div style={errorMessage}>불러오는 중...</div>
  }

  return (
    <>
      {
        article ? article.map((article, index) => {
          return ( <Video key={index} article={article} /> )
        }) : null
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