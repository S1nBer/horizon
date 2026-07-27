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

    if (dayPart.currentStatus === DayPartStatus.Day) {
      this.ctx.fillStyle = '#87ceeb';
    } else if (dayPart.currentStatus === DayPartStatus.Night) {
      this.ctx.fillStyle = '#0C090A';
    } else {
      // Create gradient
      const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);

      gradient.addColorStop(0, '#1a1a3e');
      gradient.addColorStop(1, '#ff8c42');

      this.ctx.fillStyle = gradient;
    }

    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
