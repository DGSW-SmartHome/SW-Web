import moment from 'moment';
import { useState } from 'react';
import './Calendar.scss';
import {
  CalendarContainer,
  MonthControl,
  PrevMonth,
  NextMonth,
  CalendarWeek,
} from './Calendar.style';

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  const firstWeek: number = today.clone().startOf('month').week();
  const lastWeek: number = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result: any[] = [];
    let week: number = firstWeek;
    
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            // eslint-disable-next-line no-loop-func
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{ backgroundColor: 'rgba(163, 212, 247, 0.5)' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if(days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                )
              }
            })
          }
        </tr>
      );
    }
    return result;
  }

  return (
    <CalendarContainer>
      <MonthControl>
        <PrevMonth 
          onClick={ () => {
            setMoment(getMoment.clone().subtract(1, 'month'))
          } }
        >
          <span>‹</span>
        </PrevMonth>
        <span>{today.format('YYYY년 M월')}</span>
        <NextMonth 
          onClick={ () => {
            setMoment(getMoment.clone().add(1, 'month'))
          } }
        >
          <span>›</span>
        </NextMonth>
      </MonthControl>
      <table>
        <tbody>
          <CalendarWeek className='week'>
            <td><span>일</span></td>
            <td><span>월</span></td>
            <td><span>화</span></td>
            <td><span>수</span></td>
            <td><span>목</span></td>
            <td><span>금</span></td>
            <td><span>토</span></td>
          </CalendarWeek>
          {calendarArr()}
        </tbody>
      </table>
    </CalendarContainer>
  );
};

export default Calendar;