"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";
import s from "./instructions.module.scss";

const steps = [
  { number: 1, title: "Register for HackDKU" },
  { number: 2, title: "Form a team and register" },
  { number: 3, title: "Select a HackDKU track" },
  { number: 4, title: "Identify a problem to solve" },
  { number: 5, title: "Design a solution (e.g., UI/UX, code, app, web)" },
  { number: 6, title: "Develop a project plan" },
  { number: 7, title: "Present your solution" }
];

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
            Math.pow(x - canvas.width / 2, 2) +
              Math.pow(y - canvas.height / 2, 2)
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
      if (container) container.removeChild(canvas);
    };
  }, []);
  return null;
};

export default function Instructions() {
  // Shared button styling to be used for both buttons
  const sharedButtonClasses = cn(
    buttonVariants({ size: "lg", variant: "secondary" }),
    "text-xl rounded-xs font-bold backdrop-blur-sm hover:font-extralight border border-amber-500 transition-all hover:shadow-xl hover:shadow-amber-300 font-mono"
  );

  return (
    <main>
      {/* Steps Section with background */}
      <div className="relative">
        {/* Pixel background only covers the steps */}
        <div
          id="pixel-canvas-container"
          className="absolute inset-0 pointer-events-none z-0"
        />
        <PixelCanvas />
        {/* Wrap steps in a container with vertical padding */}
        <div className="relative z-10 py-12">
          <div className={s.stepContainer}>
            {steps.map((step) => (
              <div
                key={step.number}
                className={s.step}
                id={`step${step.number}`}
                style={{ zIndex: step.number }}
              >
                <div className={s.stepWord}>
                  STEP
                  <div className={s.stepNumber}>{step.number}</div>
                </div>
                <div className={s.stepTitle}>
                  <br />
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HackDKU Mentorship Section without the pixel background */}
      <section className="mt-12 px-[12vw] relative z-10">
        <h2 className="text-3xl font-bold">HackDKU Mentorship</h2>
        <p className="mt-4">
          See below schedule and locations to access HackDKU mentorship.
        </p>
        {/* Replace the existing anchor elements with two identically-styled buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 mt-4 mb-10">
          <Link
            href="https://docs.google.com/spreadsheets/d/14IsbKkEmOnrcA2wEi-LiJyfYWiTlwQOceX4-aKoyPd8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={sharedButtonClasses}
          >
            Mentorship Hours
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mt-8 text-center mb-4">
          Judging Criteria
        </h2>
        <div className="mt-2 space-y-4">
          <p>
            <strong>Feasibility and Impact:</strong> How well does the hack fit the track theme? How well thought-out is the concept itself concerning both the problem it aims to solve and the proposed solution?
          </p>
          <p>
            <strong>Innovation:</strong> Does the hack approach the problem from a fresh perspective, or address a unique aspect that isn't already implemented?
          </p>
          <p>
            <strong>Functionality:</strong> How effectively did the team translate their concept into a working prototype? Is the hack fully operational or limited to test cases?
          </p>
          <p>
            <strong>Overall Presentation:</strong> How convincing is the pitch? Was it well prepared, and did the hackers effectively articulate the scope and impact of their problem?
          </p>
        </div>
        <h2 className="text-2xl font-semibold mt-8 text-center mb-4">
          Submission
        </h2>
        <p>
          Team Projects must be submitted via the HackDKU DevPost platform (link below).
          Submissions should be a working code, application, website, or a UI/UX prototype.
          For projects that include code, please first upload/sync with a Git platform (e.g., GitHub, GitLab)
          and then link the relevant repository on DevPost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 mt-4 mb-10">
        <Link
            href="https://hackdku2025.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={sharedButtonClasses}
          >
            DevPost Website
        </Link>
        </div>
      </section>
    </main>
  );
}
