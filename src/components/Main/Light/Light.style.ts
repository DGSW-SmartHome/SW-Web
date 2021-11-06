import styled from "styled-components";

export const LightContainer = styled.div`
  position: absolute;
  width: 32vw;
  height: 37vh;
  background: rgba(0, 0, 0, 0.4);
  top: 17.8vh;
  left: 67vw;
  border-radius: 30px;
`;

export const LightItemContainer = styled.div`
  position: relative;
  float: left;
  left: 3vmin;
  top: 2.5vmin;
  padding: 0 2.5vw;
  padding-bottom: 1vh;

  .off {
    padding-bottom: 2vh;
  }
`;

export const LightItemImage = styled.img`
  width: 9vmin;
`;

export const LightRoomName = styled.div`
  font-size: 2.2vmin;
  text-align: center;
`;