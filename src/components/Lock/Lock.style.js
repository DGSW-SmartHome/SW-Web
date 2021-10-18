import styled from "styled-components";

export const VideoBackground = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  width: 94vw;
  height: 80vh;
  top: 3vw;
  border-radius: 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SecurityVideo = styled.video`
  position: relative;
  top: 6vh;
  left: 1vw;
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