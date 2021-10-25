import axios from "axios";
import { useEffect, useState } from "react"
import Video from "./Video";
import { Error } from './Lock.style';
import { SmartHomeURL } from "src/api/SmartHome/SmartHomeConfig";

const VideoList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [article, setArticle] = useState<string[]>([]);

  // Component가 렌더링 될 때 한 번만 실행
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get(SmartHomeURL + '/mockup/video/')  // 목업 서버에서 영상을 받아옴
        .then((response) => {
          setArticle(response.data.data.article);
        }).catch((error) => {
          console.log(error.response);
        });
      setLoading(false);
    }
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <Error>불러오는 중...</Error>
  }

  return (
    <>
      {
        article ? article.map((article, index) => {
          return (
            <Video key={index} article={article} />
          )
        }) : (
          <Error>저장된 영상이 없습니다.</Error>
        )
      }
    </>
  )
}

export default VideoList;