import { atom } from 'recoil';

export const FineDustState = atom<string>({
  key: 'FineDustState',
  default: '좋음'
});

export const FirstCityName = atom<string>({
  key: 'FirstCityName',
  default: '지역이 설정되지 않았습니다.'
});

export const LastCityName = atom<string>({
  key: 'LastCityName',
  default: ''
});

export const FineDustValue = atom<number>({
  key: 'FineDustValue',
  default: 999
});