import MainNav from '../Nav/MainNav';
import Weather from "./Weather/Weather";
import News from './News/News';
import FineDust from './FineDust/FineDust';
import Calendar from './Calendar/Calendar';
import Light from './Light/Light';
import Electricity from './Electricity/Electricity';

const Index = ({ history }) => {
  return (
    <>
      <MainNav />
      <Weather history={history} />
      <News />
      <FineDust history={history} />
      <Calendar />
      <Light />
      <Electricity />
    </>
  );
};

export default Index;