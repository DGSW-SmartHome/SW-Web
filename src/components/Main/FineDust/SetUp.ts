import axios from "axios";
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { baseURL } from "src/API/SmartHome/SmartHomeConfig";
import { FineDustState, FineDustValue, FirstCityName, LastCityName } from "src/Store/Finedust";

export const SetUp = () => {
  const SET_FIRST_CITY_NAME = useSetRecoilState(FirstCityName);
  const SET_LAST_CITY_NAME = useSetRecoilState(LastCityName);
  const SET_FINE_DUST_VALUE = useSetRecoilState(FineDustValue);
  const SET_FINE_DUST = useSetRecoilState(FineDustState);
  useEffect(() => {
    axios.get(baseURL + ``)
  }, []);
}