<script lang="ts">
  import * as SunCalc from 'suncalc';
    import { onMount } from 'svelte';
  import { calcDayPart } from './calcDayPart';
  import { DayPartStatus } from './calcDayPart.types';

  let canvasRef: HTMLCanvasElement | null = $state(null);

  onMount(() => {
    // Всё, что связано с DOM — переносим сюда
    const now = new Date();
    const times = SunCalc.getTimes(now, 54.58, 82.55);
    
    if (!canvasRef) {
      return; 
    };

    canvasRef.width = window.innerWidth;
    canvasRef.height = window.innerHeight;
    
    const ctx = canvasRef.getContext('2d');

    if (!ctx) {
      return;
    }

    const dayPart = calcDayPart();

    if (!dayPart) {
      return;
    }

    if (dayPart.currentStatus === DayPartStatus.Day) {
          ctx.fillStyle = '#87ceeb';
    } else {
      ctx.fillStyle = '#0C090A';
    }
    
    // Create gradient
    // const grd = ctx.createLinearGradient(0, 0, 200, 0);
    // grd.addColorStop(0, 'red');
    // grd.addColorStop(1, 'white');
    
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  });
</script>

<canvas class="canvas" bind:this={canvasRef}></canvas>

<style>
  /* .canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: block;
  } */
</style>
