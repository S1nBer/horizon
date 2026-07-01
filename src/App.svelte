<script>
  import * as SunCalc from 'suncalc';
    import { onMount } from 'svelte';

  let canvasRef = $state(null);

  onMount(() => {
    // Всё, что связано с DOM — переносим сюда
    const now = new Date();
    const times = SunCalc.getTimes(now, 54.58, 82.55);
    
    console.log(times); // Посмотрим, что пришло


    
    
    if (!canvasRef) return; // защита от null
    
    const ctx = canvasRef.getContext("2d");
    
    // Create gradient
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
  });
</script>

<div>
  This is start of project
</div>

  <canvas bind:this={canvasRef}></canvas>