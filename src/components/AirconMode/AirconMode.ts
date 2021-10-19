import { atom } from 'recoil';

export const AirconMode = atom<string>({
  key: 'airconMode',
  default: 'setting'
})