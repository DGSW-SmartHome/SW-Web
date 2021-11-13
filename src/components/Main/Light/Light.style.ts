import styled from "styled-components";

export const LightContainer = styled.div`
  position: absolute;
  width: 32vw;
  height: 52vmin;
  background: rgba(0, 0, 0, 0.4);
  top: 17.8vh;
  left: 67vw;
  border-radius: 30px;
`;

export const LightItemContainer = styled.div`
  position: relative;
  float: left;
  left: 3vmin;
  top: 7vmin;
  padding: 0 2.5vw;
  padding-bottom: 7vmin;

  .off {
    padding-bottom: 2vmin;
  }
`;

export const LightItemImage = styled.img`
  width: 9vmin;
`;

export const LightRoomName = styled.div`
  font-size: 2.2vmin;
  text-align: center;
`;