<script lang="ts">
  import { onMount } from 'svelte';
  import { HorizonScene } from './canvas/HorizonScene';

  let canvasRef: HTMLCanvasElement | null = $state(null);

  let horizonInstance: HorizonScene | null = $state(null);

  onMount(() => {
    canvasRef.width = window.innerWidth;
    canvasRef.height = window.innerHeight;
    const ctx = canvasRef.getContext('2d');

    if (!ctx) {
      // eslint-disable-next-line no-console
      console.error('Oops, cannot find canvas');

      return;
    }

    horizonInstance = new HorizonScene(ctx, window.innerWidth, window.innerHeight);

    horizonInstance.init();
  });
</script>

<canvas class="canvas" bind:this={canvasRef}></canvas>

<!-- <style>
  /* .canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: block;
  } */
</style> -->
