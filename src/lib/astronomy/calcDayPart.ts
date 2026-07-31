import * as SunCalc from 'suncalc';
import { DayPartStatus } from './calcDayPart.types';

export const calcDayPart = () => {
  const now = new Date();
  // Novosibirsk coords
  // Later I might make it so that you can enter the coordinates yourself
  const position = SunCalc.getPosition(now, 54.58, 82.55);
  const { altitude } = position;

  let currentStatus: DayPartStatus = DayPartStatus.Night;

  switch (true) {
    case altitude > 10:
      currentStatus = DayPartStatus.Day;
      break;
    case altitude <= 10 && altitude >= 0:
      currentStatus = DayPartStatus.GoldHour;
      break;
    case altitude < 0 && altitude >= -6:
      currentStatus = DayPartStatus.CivilTwilight;
      break;
    case altitude < -6 && altitude >= -12:
      currentStatus = DayPartStatus.NavigationalTwilight;
      break;
    case altitude < -12 && altitude >= -18:
      currentStatus = DayPartStatus.AstronomicalTwilight;
      break;
    default:
      break;
  }

  return {
    currentStatus,
  };
};
