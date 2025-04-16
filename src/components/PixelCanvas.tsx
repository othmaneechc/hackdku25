"use client";
import { useEffect } from "react";

/**
 * Linear interpolation helper:
 * lerp(a, b, t) = a + t * (b - a)
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Pixel class contains all the properties for each square pixel.
 * Each pixel stores its position, the distance from the center,
 * a base color, a random alpha (intensity) value plus some parameters
 * for flickering during the "on" phase, plus its maximum size.
 */
class Pixel {
  x: number;
  y: number;
  dist: number;
  color: string;

  // Base alpha & parameters for alpha shimmer effect.
  alphaBase: number;
  alphaShimmerSpeed: number;
  alphaShimmerOffset: number;
  alphaShimmerAmplitude: number;

  maxSize: number;
  size: number;
  alpha: number;

  constructor(x: number, y: number, dist: number, color: string, maxSize: number) {
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.color = color;
    this.maxSize = maxSize;
    // Random base alpha in the range [0.3, 1.0]
    this.alphaBase = 0.3 + 0.7 * Math.random();
    // Random parameters for the shimmer (flicker) during the hold phase
    this.alphaShimmerSpeed = 0.01 + 0.05 * Math.random();
    this.alphaShimmerOffset = 2 * Math.PI * Math.random();
    this.alphaShimmerAmplitude = 0.3 * this.alphaBase;
    // Initialize current size and alpha
    this.size = 0;
    this.alpha = 0;
  }
}

/**
 * PixelCanvas component creates a canvas inside a container element
 * identified by 'pixel-canvas-container'. It animates a wave that makes
 * pixels "turn on" (from the center outward) and then "turn off" in the same order.
 * Each pixel gets a random flicker (alpha intensity) in the hold phase.
 */
export default function PixelCanvas() {
  useEffect(() => {
    // Get the container. If null, exit early.
    const container: HTMLElement | null = document.getElementById("pixel-canvas-container");
    if (!container) {
      console.error("Container element with id 'pixel-canvas-container' not found.");
      return;
    }

    // Create the canvas and append to container.
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    container.appendChild(canvas);

    // Get the 2D drawing context. If null, remove the canvas and exit.
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (!ctx) {
      console.error("Could not acquire 2D context.");
      container.removeChild(canvas);
      return;
    }

    // --- 1) Wave timing/durations ---
    const appearTime = 150;     // frames to grow from 0 to max size
    const holdTime = 100;       // frames at max size (with alpha flicker)
    const disappearTime = 150;  // frames to shrink from max to 0
    const offTime = 100;        // frames when the pixel stays off

    // Total cycle duration.
    const cycleTime = appearTime + holdTime + disappearTime + offTime;
    // Wave offset factor: pixels further from the center start later.
    const offsetFactor = 0.05;
    // Base maximum size for a pixel.
    const baseMaxSize = 2;

    // Array for storing all pixel objects.
    let pixels: Pixel[] = [];

    // --- 2) Populate pixels based on canvas dimensions ---
    function populatePixels() {
      // Sync canvas size with container.
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      pixels = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gap = 10;
      const colors = ["#2E46E6", "#5780AA", "#4AAA54"];

      // Create a grid of pixels with spacing of "gap"
      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const color = colors[Math.floor(Math.random() * colors.length)];
          // Randomize the max size slightly.
          const maxSize = baseMaxSize + Math.random() * 1.5;
          pixels.push(new Pixel(x, y, dist, color, maxSize));
        }
      }
    }
    populatePixels();

    // Re-populate pixels when window is resized.
    function handleResize() {
      populatePixels();
    }
    window.addEventListener("resize", handleResize);

    // --- 3) Animate pixels with a global wave ---
    let globalFrame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      globalFrame++;

      for (const p of pixels) {
        // Calculate the pixel's local time in the wave cycle.
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
            // Apply a sine-based shimmer to vary alpha randomly.
            const holdFrame = localT - appearTime;
            const sine = Math.sin(holdFrame * p.alphaShimmerSpeed + p.alphaShimmerOffset);
            alpha = p.alphaBase + sine * p.alphaShimmerAmplitude;
            // Clamp the alpha value to [0, 1]
            alpha = Math.max(0, Math.min(1, alpha));
          }
          // Disappear phase: appearTime + holdTime <= localT < appearTime + holdTime + disappearTime.
          else if (localT < appearTime + holdTime + disappearTime) {
            const dt = localT - (appearTime + holdTime);
            const progress = dt / disappearTime;
            size = lerp(p.maxSize, 0, progress);
            alpha = lerp(p.alphaBase, 0, progress);
          }
          // Off phase: otherwise, remain off (size and alpha remain 0).
        }

        // Update pixel values.
        p.size = size;
        p.alpha = alpha;

        // Draw the pixel if visible.
        if (p.alpha > 0 && p.size > 0) {
          ctx.globalAlpha = p.alpha;
          const halfSize = p.size * 0.5;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x - halfSize, p.y - halfSize, p.size, p.size);
        }
      }
      // Reset global alpha for next frame.
      ctx.globalAlpha = 1.0;
      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup effect: Remove resize event listener and canvas on unmount.
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return null;
}
