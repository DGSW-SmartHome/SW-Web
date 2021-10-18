import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './font.scss';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);
