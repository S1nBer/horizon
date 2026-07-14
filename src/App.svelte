<script>
  import * as SunCalc from 'suncalc';
    import { onMount } from 'svelte';

  let canvasRef = $state(null);

  onMount(() => {
    // Всё, что связано с DOM — переносим сюда
    const now = new Date();
    const times = SunCalc.getTimes(now, 54.58, 82.55);
    
    console.log(times); // Посмотрим, что пришло

    // test.js
    const x = 5 ; // лишние пробелы
    console.log(x);
    
    if (!canvasRef) return; // защита от null

    canvasRef.width = window.innerWidth;
    canvasRef.height = window.innerHeight;
    
    const ctx = canvasRef.getContext('2d');
    
    // Create gradient
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');
    
    // Fill with gradient
    ctx.fillStyle = grd;
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
