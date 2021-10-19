import styled from "styled-components";

export const NewsContainer = styled.div`
  position: absolute;
  width: 32vw;
  height: 20.5vh;
  background: rgba(0, 0, 0, 0.4);
  top: 73.4vh;
  left: 1vw;
  border-radius: 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NewsMainContent = styled.div`
  display: flex;
  margin-bottom: 10vh;
`;

export const NewsContentThumnail = styled.div`
  position: absolute;
  margin-left: 0.5rem;

  img {
    display: block;
    width: 140px;
    height: 100px;
    object-fit: cover;
  }
`;

export const NewsContents = styled.div`
  font-family: 'Nanum700';
  width: 30vw;
  
  h2 {
    margin: 0;
  }

  & + & {
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
`;

export const NewsContentsTitle = styled.a`
  position: absolute;
  color: white;
  left: 10vw;
  text-decoration: none;
  font-size: 2vmin;
`;

export const NewsContentsSubTitle = styled.p`
  position: relative;
  width: 20vw;
  left: 9.2vw;
  top: 7vh;
  margin: 0;
  line-height: 1.5;
  word-wrap: break-word;
  font-size: 12px;
`;

export const NewsListForm = styled.div `
  box-sizeing: border-box;
  padding-bottom: 3rem;
  width: 30vw;
  margin: 0 auto;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
`;