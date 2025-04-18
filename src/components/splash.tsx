"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

export interface SplashProps {
  backgroundOnly?: boolean;
}

class Pixel {
  private width: number;
  private height: number;
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private color: string;
  private speed: number;
  private size: number;
  private sizeStep: number;
  private minSize: number;
  private maxSizeInteger: number;
  private maxSize: number;
  private delay: number;
  private counter: number;
  private counterStep: number;
  private isIdle: boolean;
  private isReverse: boolean;
  private isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  private getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private draw(): void {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear(): void {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  private shimmer(): void {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

const PixelCanvas = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    const container = document.getElementById("pixel-canvas-container");
    if (!container) return;

    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixels: Pixel[] = [];
    const colors = ["#2E46E6", "#5780AA", "#4AAA54"];
    const gap = 10;
    const speed = 0.035;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      pixels.length = 0;

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const delay = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          pixels.push(new Pixel(canvas, ctx, x, y, color, speed, delay));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const pixel of pixels) {
        pixel.appear();
      }
      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeChild(canvas);
    };
  }, []);

  return null;
};

export default function Splash({ backgroundOnly = false }: SplashProps) {
  return (
    <div className="relative">
      {/* Pixel canvas background */}
      <div id="pixel-canvas-container" className="absolute inset-0 pointer-events-none" />
      
      {/* Render splash text and links only if backgroundOnly is false */}
      {!backgroundOnly && (
        <div className="container flex max-w-4xl flex-col items-center gap-8 rounded-3xl text-center xl:mt-0 relative z-10">
          <br />
          <h1 className="text-6xl font-mono text-blue-600 dark:text-white font-bold sm:text-7xl md:text-8xl leading-none">
            <span className="font-code transition-all hover:text-violet-600 dark:hover:text-violet-500">
              HΔCK
            </span>
            <br />
            &nbsp;
            <span className="align-super text-3xl tracking-[-0.1rem] italic font-helvetica transition-all hover:text-yellow-500 dark:hover:text-yellow-400 sm:text-5xl leading-none">
              2025
            </span>
            <span className="animate-pulse font-code transition-colors hover:text-green-500 text-6xl sm:text-7xl md:text-8xl">
              &lt;
            </span>
            <span className="font-code text-primary leading-none transition-colors hover:text-blue-500 dark:hover:text-blue-600">
              DKU
            </span>
            <span className="animate-pulse font-code transition-colors hover:text-green-500 text-6xl sm:text-7xl md:text-8xl">
              &gt;
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 font-mono">
            <Link
              href="#sponsors-carousel"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "text-xl rounded-xs font-bold backdrop-blur-sm hover:font-extralight hover:text-amber-600 border border-amber-500 transition-all hover:shadow-xl hover:shadow-amber-300"
              )}
            >
              SPONSORS
            </Link>
            <Link
              href="https://duke.qualtrics.com/jfe/form/SV_0IAf8DEnmOLA3Zk"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "text-xl rounded-xs font-bold hover:backdrop-blur-sm bg-blue-600 text-white hover:font-extralight hover:text-blue-600 border border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-300"
              )}
            >
              SIGN UP
            </Link>
          </div>
          <br />
        </div>
      )}
      <PixelCanvas />
    </div>
  );
}
