import styled from "styled-components";

export const CalendarContainer = styled.div`
  position: absolute;
  width: 32vw;
  height: 53.8vh;
  background: rgba(0, 0, 0, 0.4);
  top: 40.3vh;
  left: 34vw;
  border-radius: 30px;
`;

export const MonthControl = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 3vh;
  top: 3vh;

  button {
    font-size: 3.5vh;
    display: flex;
    color: white;
    align-items: center;
    border: 0px;
    background-color: transparent;
    border-radius: 5px;
    height: 3.7vh;
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
      color: rgba(0, 0, 0, 0.7);
    }
    span {
      line-height: 3.5vh;
      padding-bottom: 0.5vh;
    }
  }

  span {
    display: flex;
    vertical-align: middle;
  }
`;

export const PrevMonth = styled.button`
  position: relative;
  right: 1vw;
`;

export const NextMonth = styled.button`
  position: relative;
  left: 1vw;
`;

export const CalendarWeek = styled.tr`
  td {
    background-color: rgba(133, 187, 255, 0.6);
    height: 4vh;
  }
`;