"use client";
import { useEffect } from "react";

/**
 * Linear interpolation helper: lerp(a, b, t) = a + t * (b - a)
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Pixel represents a single square pixel in the grid.
 * Each pixel has:
 *   - (x, y) coordinates,
 *   - dist: distance from the canvas center (used for timing offsets),
 *   - color: base color,
 *   - random alpha properties for flickering,
 *   - and maximum size.
 */
class Pixel {
  x: number;
  y: number;
  dist: number;
  color: string;

  alphaBase: number;
  alphaShimmerSpeed: number;
  alphaShimmerOffset: number;
  alphaShimmerAmplitude: number;

  maxSize: number;
  size: number;
  alpha: number;

  constructor(
    x: number,
    y: number,
    dist: number,
    color: string,
    maxSize: number
  ) {
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.color = color;
    this.maxSize = maxSize;
    // Random base alpha in [0.3, 1.0]
    this.alphaBase = 0.3 + 0.7 * Math.random();
    // Random parameters for alpha shimmer effect
    this.alphaShimmerSpeed = 0.01 + 0.05 * Math.random();
    this.alphaShimmerOffset = 2 * Math.PI * Math.random();
    this.alphaShimmerAmplitude = 0.3 * this.alphaBase;
    // Initialize current values
    this.size = 0;
    this.alpha = 0;
  }
}

/**
 * PixelCanvas creates a canvas element within the container
 * with ID "pixel-canvas-container", then renders an animated
 * wave effect where pixels turn on and off (with flickering intensity)
 * in a coordinated sequence.
 */
export default function PixelCanvas() {
  useEffect(() => {
    // Get the container element and exit if null
    const container: HTMLElement | null =
      document.getElementById("pixel-canvas-container");
    if (!container) {
      console.error(
        "Container element with id 'pixel-canvas-container' not found."
      );
      return;
    }

    // Create and append a canvas element
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    container.appendChild(canvas);

    // Acquire 2D rendering context; assert it is non-null.
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    // --- Wave timing/durations ---
    const appearTime = 150; // frames for pixel to grow from 0 to max size
    const holdTime = 100; // frames to hold at max size (with flicker)
    const disappearTime = 150; // frames to shrink from max size to 0
    const offTime = 100; // frames all remain off before repeating

    // Total cycle duration
    const cycleTime = appearTime + holdTime + disappearTime + offTime;
    // Offset factor: pixels further from center start later
    const offsetFactor = 0.05;
    // Base maximum size for a pixel
    const baseMaxSize = 2;

    // Array to store all Pixel objects
    let pixels: Pixel[] = [];

    // Populate (or re-populate) the pixels
    function populatePixels() {
      // Sync canvas size to container dimensions
      const rect = container!.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      pixels = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gap = 10;
      const colors = ["#2E46E6", "#5780AA", "#4AAA54"];

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const color = colors[Math.floor(Math.random() * colors.length)];
          const maxSize = baseMaxSize + Math.random() * 1.5;
          pixels.push(new Pixel(x, y, dist, color, maxSize));
        }
      }
    }

    populatePixels();

    // Handle window resize by re-populating pixels.
    function handleResize() {
      populatePixels();
    }
    window.addEventListener("resize", handleResize);

    // --- Animate the pixel wave ---
    let globalFrame = 0;
    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      globalFrame++;

      for (const p of pixels) {
        // Calculate the local time for pixel p in the current cycle.
        const tCycle = globalFrame % cycleTime;
        const localT = tCycle - p.dist * offsetFactor;

        let size = 0;
        let alpha = 0;

        if (localT >= 0) {
          // Appear phase: 0 <= localT < appearTime.
          if (localT < appearTime) {
            const progress = localT / appearTime;
            size = lerp(0, p.maxSize, progress);
            alpha = lerp(0, p.alphaBase, progress);
          }
          // Hold phase: appearTime <= localT < appearTime + holdTime.
          else if (localT < appearTime + holdTime) {
            size = p.maxSize;
            const holdFrame = localT - appearTime;
            const sine = Math.sin(
              holdFrame * p.alphaShimmerSpeed + p.alphaShimmerOffset
            );
            alpha = p.alphaBase + sine * p.alphaShimmerAmplitude;
            alpha = Math.max(0, Math.min(1, alpha));
          }
          // Disappear phase: appearTime+holdTime <= localT < appearTime+holdTime+disappearTime.
          else if (localT < appearTime + holdTime + disappearTime) {
            const dt = localT - (appearTime + holdTime);
            const progress = dt / disappearTime;
            size = lerp(p.maxSize, 0, progress);
            alpha = lerp(p.alphaBase, 0, progress);
          }
          // Off phase: Else remain off (size and alpha = 0)
        }

        p.size = size;
        p.alpha = alpha;

        if (p.alpha > 0 && p.size > 0) {
          ctx.globalAlpha = p.alpha;
          const halfSize = p.size * 0.5;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x - halfSize, p.y - halfSize, p.size, p.size);
        }
      }

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup: remove event listener and canvas.
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return null;
}
