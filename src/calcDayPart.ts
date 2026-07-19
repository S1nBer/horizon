import * as SunCalc from 'suncalc';
import { DayPartStatus } from './calcDayPart.types';

export const calcDayPart = () => {
  const now = new Date();
  const times = SunCalc.getTimes(now, 54.58, 82.55);

  if (!times || !times.sunset || !times.sunrise) {
    return;
  }

  let currentStatus: DayPartStatus = DayPartStatus.Night;

  if (now < times.sunset && now > times.sunrise) {
    currentStatus = DayPartStatus.Day;
  }

  return {
    currentStatus,
  }
};