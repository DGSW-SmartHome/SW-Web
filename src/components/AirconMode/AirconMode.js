import { atom } from 'recoil';

export const AirconMode = atom({
  key: 'airconMode',
  default: window.localStorage.getItem('controlMode') ? window.localStorage.getItem('controlMode') : 'setting'
})