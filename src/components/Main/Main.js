import Aircon from './Aircon/Aircon';
import Navbar from '../Nav/Navbar';
import Weather from "./Weather/Weather";
import News from './News/News';
import FineDust from './FineDust/FineDust';
import Calendar from './Calendar/Calendar';
import Light from './Light/Light';
import Security from './Security/Security';

const Main = () => {
  return (
    <>
      <Navbar />
      <Weather />
      <Aircon />  
      <News />
      <FineDust />
      <Calendar />
      <Light />
      <Security />
    </>
  );
};

export default Main;