<template>
  <div ref="container" class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <canvas ref="canvas" class="block w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  color: { type: String, default: '#81ecff' }, // สีหลัก (RGB เท่านั้น เช่น #1dcd9f)
  fontSize: { type: Number, default: 20 },
  speed: { type: Number, default: 3 },
  trailLength: { type: Number, default: 15 }   // ความยาวของหางตัวอักษร
});

const canvas = ref(null);
const container = ref(null);
let ctx = null;
let animationId = null;
let columns = 0;
let drops = [];
let frameCount = 0;

const chars = '01アイウエオカキクケコサシスセソタチツテト...'; // (ตัวอักษรเดิมของคุณ)
const charArray = chars.split('');

// ฟังก์ชันแปลง Hex เป็น RGB เพื่อเอาไปทำความจาง (Opacity)
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : '29, 205, 159';
};

const resize = () => {
  if (!canvas.value || !container.value) return;
  canvas.value.width = container.value.offsetWidth;
  canvas.value.height = container.value.offsetHeight;
  columns = Math.floor(canvas.value.width / props.fontSize);
  drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -20)); // สุ่มจุดเริ่มต้นให้เหลื่อมกัน
};

const draw = () => {
  frameCount++;
  if (frameCount % props.speed !== 0) {
    animationId = requestAnimationFrame(draw);
    return;
  }

  // 1. ล้างจอให้โปร่งใส 100% ทุกเฟรม
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  const rgb = hexToRgb(props.color);
  ctx.font = `${props.fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    // 2. วาดตัวอักษรไล่จาก "หาง" ไปหา "หัว"
    for (let j = 0; j < props.trailLength; j++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * props.fontSize;
      const y = (drops[i] - j) * props.fontSize;

      if (y < 0 || y > canvas.value.height + props.fontSize) continue;

      // คำนวณความจาง: หัวสว่างสุด (j=0), หางจางสุด (j=trailLength)
      const opacity = 1 - (j / props.trailLength);
      ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
      
      // ถ้าเป็นตัวหัวสุด ให้สว่างเป็นพิเศษ (ขาวนิดๆ)
      if (j === 0) ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;

      ctx.fillText(char, x, y);
    }

    // รีเซ็ตหยดน้ำ
    if (drops[i] * props.fontSize > canvas.value.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  animationId = requestAnimationFrame(draw);
};

onMounted(() => {
  ctx = canvas.value.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
  draw();
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
  cancelAnimationFrame(animationId);
});
</script>