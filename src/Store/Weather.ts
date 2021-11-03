import { atom } from "recoil";

export const WeatherArea = atom<string>({
  key: 'WeatherArea',
  default: '지역이 입력되지 않았습니다.'
});

export const WeatherTempState = atom<number | string>({
  key: 'WeatherTemp',
  default: 1000
});

export const WeatherState = atom<string | number>({
  key: 'WeatherState',
  default: 1
})

export const WeatherImg = atom<string>({
  key: 'WeatherImg',
  default: '',
})