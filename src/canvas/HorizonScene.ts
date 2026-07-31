// import * as SunCalc from 'suncalc';
import { calcDayPart } from '../lib/astronomy/calcDayPart';
import { DayPartStatus } from '../lib/astronomy/calcDayPart.types';

export class HorizonScene {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number,
  ) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  public init() {
    // Всё, что связано с DOM — переносим сюда
    // const now = new Date();
    // const times = SunCalc.getTimes(now, 54.58, 82.55);
    this.skyRender();
  }

  private skyRender() {
    if (!this.ctx) {
      return;
    }

    const dayPart = calcDayPart();

    if (!dayPart) {
      return;
    }

    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);

    switch (dayPart.currentStatus) {
      case DayPartStatus.Day:
        gradient.addColorStop(0, '#4A90D9');
        gradient.addColorStop(1, '#B0D4F1');
        break;
      case DayPartStatus.Night:
        gradient.addColorStop(0, '#0A0809');
        gradient.addColorStop(1, '#141012');
        break;
      case DayPartStatus.GoldHour:
        gradient.addColorStop(0, '#6B8FBF');
        gradient.addColorStop(0.5, '#D4A373');
        gradient.addColorStop(1, '#F4A460');
        break;
      case DayPartStatus.CivilTwilight:
        gradient.addColorStop(0, '#4A5F7A');
        gradient.addColorStop(0.5, '#C06C84');
        gradient.addColorStop(1, '#F0803A');
        break;
      case DayPartStatus.NavigationalTwilight:
        gradient.addColorStop(0, '#1A2530');
        gradient.addColorStop(1, '#3B4D61');
        break;
      case DayPartStatus.AstronomicalTwilight:
        gradient.addColorStop(0, '#0C0E12');
        gradient.addColorStop(1, '#1E2835');
        break;
      default:
        console.error('Ошибка, Неккоректная часть дня');
        break;
    }

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
