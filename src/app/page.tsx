"use client";
import Splash from "@/components/splash";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// List of sponsor logos with both light and dark versions
const sponsors = [
  { lightSrc: "/sponsors/igem.png", darkSrc: "/sponsors/igemwhite.png", alt: "iGEM" },
  { lightSrc: "/sponsors/snapgene.png", darkSrc: "/sponsors/snapgene.png", alt: "SnapGene" },
  { lightSrc: "/sponsors/csclubblack.png", darkSrc: "/sponsors/csclub.png", alt: "CS Club" },
  { lightSrc: "/sponsors/finance.png", darkSrc: "/sponsors/finance.png", alt: "Finance Club" },
  { lightSrc: "/sponsors/aiclub.png", darkSrc: "/sponsors/aiclub.png", alt: "AI Club" },
  { lightSrc: "/sponsors/prog.png", darkSrc: "/sponsors/prog.png", alt: "Programming Contest Club" },
  { lightSrc: "/sponsors/dnas.png", darkSrc: "/sponsors/dnas.png", alt: "DNAS" },
  { lightSrc: "/sponsors/ca.png", darkSrc: "/sponsors/ca.png", alt: "CA" },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  // Triple clone for seamless loop
  const loopLogos = [...sponsors, ...sponsors, ...sponsors];

  return (
    <>
      <section>
        <div className="mb-20" />
        <Splash />

        {/* Introductory Text */}
        <div className="container mt-0 p-10 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
          <h2 className="text-4xl font-bold mt-6 mb-6">Welcome to HackDKU!</h2>
          <p className="max-w-5xl text-sm sm:text-base leading-7 text-muted-foreground">
            Duke Kunshan University’s <strong>Computer Science</strong>, AI, iGEM,
            Programming Contest, and Finance Clubs are thrilled to introduce <em>HackDKU</em>,
            an event that redefines the hackathon ethos—cultivating innovations,
            inclusive collaboration, and lasting change.
          </p>
          <p className="max-w-5xl text-sm sm:text-base leading-7 text-muted-foreground">
            Beyond coding sprints, enjoy speaker sessions, hands-on workshops, and project tracks in{' '}
            <code className="text-amber-600">Finance</code>,{' '}
            <code className="text-violet-600">Healthcare/Biotech</code>,{' '}
            and <code className="text-green-600">Environment/Sustainability</code>. All backgrounds welcome!
          </p>
        </div>

        {/* Hackathon Tracks Section */}
        <div id="sponsors-carousel" className="container mt-20 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Hackathon Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-4 border-amber-500 rounded-lg">
              <h3 className="text-xl font-bold">Finance</h3>
              <p className="mt-2 text-sm">Innovative financial technologies & new approaches.</p>
            </div>
            <div className="p-6 border-4 border-violet-500 rounded-lg">
              <h3 className="text-xl font-bold">Healthcare / Biotech</h3>
              <p className="mt-2 text-sm">Advances in healthcare, biotech & life sciences.</p>
            </div>
            <div className="p-6 border-4 border-green-500 rounded-lg">
              <h3 className="text-xl font-bold">Environment / Sustainability</h3>
              <p className="mt-2 text-sm">Solutions for environmental protection.</p>
            </div>
          </div>
        </div>

        {/* Sponsors Infinite Marquee Section */}
        <div className="container mt-20 mb-10 max-w-5xl mx-auto text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-6">Our Sponsors</h2>
          <div className="marquee">
            <div className="marquee__inner">
              {loopLogos.map((s, idx) => (
                <img
                  key={idx}
                  src={isDark ? s.darkSrc : s.lightSrc}
                  alt={s.alt}
                  className="h-20 object-contain mx-6"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Keynote Speakers Section */}
        <div className="container mt-20 mb-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Keynote Speakers</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 border-4 rounded-lg p-6">
            <div className="w-48 h-48 flex-shrink-0">
              <img
                src="/speakers/drchristine.png"
                alt="Dr. Christine Yuan HUANG"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold">Dr. Christine Yuan Huang</h3>
              <p className="mt-2 text-sm">
                Dr. Christine Yuan HUANG is Founder & CEO of Quantum Life and Technology Transfer Director at the Hong Kong Quantum AI Lab. An MD (Southern Medical University) and MPH (HKU Li Ka Shing Faculty of Medicine), she led development of an AI‑driven healthy‑aging platform that won Gold at the 2025 Geneva International Invention Exhibition. She serves as Vice President (Longevity) of the Hong Kong Biotechnology Association and Founding President of the Asia Longevity Professionals Association, and advises the Wing Wah Charity Foundation.               </p>
              <p className="mt-4 text-sm">
              A Forbes China “30 Under 30” honoree and Fellow of both the Royal Society of Medicine (UK) and European Society of Preventive Medicine, she contributes as a Forbes columnist and speaks globally on AI in medicine.</p>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="container mt-20 mb-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Speakers</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 border-4 rounded-lg p-6">
            <div className="w-48 h-48 flex-shrink-0">
              <img
                src="/speakers/yoon.png"
                alt="Dr. Joong-Tak Yoon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold">Dr. Joong-Tak Yoon</h3>
              <p className="mt-2 text-sm">
              Dr. Joong‑Tak Yoon is a postdoctoral research fellow in biology at Duke Kunshan University. He earned both his B.S. and Ph.D. in Systems Biology from Yonsei University—publishing in journals like Journal of Experimental Botany and Planta—and won the Brain Korea 21 Grand Prize. </p>
              <p className="mt-4 text-sm">
               With extensive experience as a lab instructor and presenter at international conferences, he specializes in plant molecular biology, protein function and genetic engineering. Dr. Yoon will lead HackDKU ’25’s hands‑on plasmid‑design workshop using SnapGene, sharing practical insights from his award‑winning research and teaching. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
