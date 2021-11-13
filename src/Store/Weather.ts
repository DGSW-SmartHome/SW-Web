import { atom } from "recoil";

export const WeatherArea = atom<string>({
  key: 'weatherArea',
  default: '지역이 설정되지 않았습니다.'
});

export const WeatherTempState = atom<number | string>({
  key: 'weatherTemp',
  default: 1000
});

export const WeatherState = atom<string | number>({
  key: 'weatherState',
  default: 1
})

export const WeatherImg = atom<string>({
  key: 'weatherImg',
  default: '',
})