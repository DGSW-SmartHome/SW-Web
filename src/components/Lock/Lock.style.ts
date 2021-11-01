import styled from "styled-components";

export const VideoBackground = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  width: 94vw;
  height: 80vh;
  top: 3vw;
  border-radius: 30px;
`;

export const ScrollContainer = styled.div`
  position: relative;
  width: 99%;
  height: 96%;
  top: 2vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 10px;
    transform: rotate(-90deg);
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    transform: rotate(-90deg);
  }
`;

export const SecurityVideo = styled.video`
  position: relative;
  top: 1vh;
  left: 0.6vw;
  width: 28vw;
  float: left;
  margin-left: 2vw;
  margin-bottom: 3vh;
`;

export const Error = styled.div`
  text-align: center;
  vertival-align: middle;
  line-height: 80vh;
  font-size: 7vmin;
`;