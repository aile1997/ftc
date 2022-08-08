<script setup>
import { swarmBackground } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
import { onMounted } from "vue";

onMounted(() => {
  const customCursor = document.querySelector(".cursor");
  const bg = swarmBackground({
    el: document.getElementById("apps"),
    eventsEl: document.body,
    gpgpuSize: 256,
    color: [Math.random() * 0xffffff, Math.random() * 0xffffff],
    geometry: "default",
  });
  bg.setColors([12137205.412663601, 4868132.430458719]);
  bg.three.camera.position.set(0, 0, 200);

  document.body.addEventListener("click", () => {
    bg.setColors([Math.random() * 0xffffff, Math.random() * 0xffffff]);
    console.log([Math.random() * 0xffffff, Math.random() * 0xffffff]);
  });

  document.addEventListener(
    "mousemove",
    (event) => {
      event.preventDefault();
      handleCursor(event);
    },
    false,
  );

  const handleCursor = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    customCursor.style.cssText = `left: ${x}px; top: ${y}px;`;
  };
});
</script>
<template>
  <div id="apps">
    <div id="hero">
      <h1>PLEASE<br />WRITE KYC</h1>
    </div>
  </div>
</template>

<style scoped>
#apps {
  overflow: hidden;
  touch-action: pan-up;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  text-shadow: 0 0 5px #000000, 0 0 20px #000;
  user-select: none;
  height: 100vh;
}

#apps h1 {
  --fontSize: 50px;
  --lineHeight: 70px;
  width: auto;
  height: calc(2 * var(--lineHeight));
  line-height: var(--lineHeight);
  margin: calc(50vh - var(--lineHeight)) auto 0;
  font-size: var(--fontSize);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#apps a {
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
}
</style>
