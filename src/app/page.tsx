"use client";
import Splash from "@/components/splash";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/************************
 *  Countdown Component *
 ************************/
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Simple ticking countdown.  Updates every second.
 * Change `target` to your desired hackathon start time
 * (YYYY‑MM‑DDThh:mm:ss in local time).
 */
function Countdown({ target }: { target: string }) {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const distance = new Date(target).getTime() - now.getTime();

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
    // eslint‑disable‑next‑line react‑hooks/exhaustive‑deps
  }, [target]);

  // Once the countdown finishes
  if (Object.values(timeLeft).every((v) => v === 0)) {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">HackDKU has ended! See you next year!</h2>
      </div>
    );
  }

  return (
    <div className="flex countdown flex-wrap items-center justify-center gap-6">
      {([
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ] as const).map(({ label, value }) => (
        <div
          key={label}
          className="w-20 sm:w-28 md:w-32 rounded-2xl shadow-lg p-4 bg-white/80 dark:bg-white/10 backdrop-blur"
        >
          <p className="text-3xl md:text-4xl font-bold leading-none">
            {value.toString().padStart(2, "0")}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

/***********************
 *  Data & Interfaces  *
 **********************/
// List of sponsor logos with both light and dark versions
const sponsors = [
  { lightSrc: "/sponsors/igem.png", darkSrc: "/sponsors/igemwhite.png", alt: "iGEM" },
  { lightSrc: "/sponsors/snapgene.png", darkSrc: "/sponsors/snapgenewhite.png", alt: "SnapGene" },
  { lightSrc: "/sponsors/csclub.png", darkSrc: "/sponsors/csclubwhite.png", alt: "CS Club" },
  { lightSrc: "/sponsors/finance.png", darkSrc: "/sponsors/financewhite.png", alt: "Finance Club" },
  { lightSrc: "/sponsors/aiclub.png", darkSrc: "/sponsors/aiclubwhite.png", alt: "AI Club" },
  { lightSrc: "/sponsors/prog.png", darkSrc: "/sponsors/progwhite.png", alt: "Programming Contest Club" },
  { lightSrc: "/sponsors/dnas.png", darkSrc: "/sponsors/dnaswhite.png", alt: "DNAS" },
  { lightSrc: "/sponsors/ca.png", darkSrc: "/sponsors/cawhite.png", alt: "CA" },
  { lightSrc: "/sponsors/aws.png", darkSrc: "/sponsors/awswhite.png", alt: "AWS" },
  { lightSrc: "/sponsors/wangcai.png", darkSrc: "/sponsors/wangcaiwhite.png", alt: "lab" },
];

// ---- Judges ----
interface Judge {
  name: string;
  role: string;
  major: string;
  email: string;
  linkedin: string;
  picture: string;
}

const judges: Judge[] = [
  {
    name: "Dr. Christine Yuan Huang",
    role: "",
    major: "Founder & CEO @ Quantum Life",
    email: "",
    linkedin: "https://www.linkedin.com/in/christineyuanhuang1005/",
    picture: "/speakers/drchristine.png",
  },
  {
    name: "Juan Camilo Sanabria",
    role: "",
    major: "AI/ML Engineering Specialist @ L'Oreal",
    email: "",
    linkedin: "https://www.linkedin.com/in/jksmb/?originalSubdomain=cn",
    picture: "/speakers/camilo.png",
  },
  {
    name: "Nick Ponomarev",
    role: "",
    major: "Senior Investment Analyst @ ORBIT Startups",
    email: "",
    linkedin: "https://www.linkedin.com/in/nikitaponomarev/",
    picture: "/speakers/nick.png",
  },
];

// ---- Speakers ----
interface Speaker {
  name: string;
  title: string; // short role / position
  bio: string; // longer description (can include "\n\n" for paragraph breaks)
  picture: string;
}

const keynoteSpeakers: Speaker[] = [
  {
    name: "Dr. Christine Yuan Huang",
    title: "Founder & CEO • Quantum Life",
    bio: `Dr. Christine Yuan HUANG is Founder & CEO of Quantum Life and Technology Transfer Director at the Hong Kong Quantum AI Lab. An MD (Southern Medical University) and MPH (HKU Li Ka Shing Faculty of Medicine), she led development of an AI‑driven healthy‑aging platform that won Gold at the 2025 Geneva International Invention Exhibition. She serves as Vice President (Longevity) of the Hong Kong Biotechnology Association and Founding President of the Asia Longevity Professionals Association, and advises the Wing Wah Charity Foundation. A Forbes China “30 Under 30” honoree and Fellow of both the Royal Society of Medicine (UK) and European Society of Preventive Medicine, she contributes as a Forbes columnist and speaks globally on AI in medicine.`,
    picture: "/speakers/drchristine.png",
  },
];

const speakers: Speaker[] = [
  {
    name: "Dr. Joong‑Tak Yoon",
    title: "Postdoctoral Research Fellow in Biology • DKU",
    bio: `Dr. Joong‑Tak Yoon is a postdoctoral research fellow in biology at Duke Kunshan University. He earned both his B.S. and Ph.D. in Systems Biology from Yonsei University—publishing in journals like Journal of Experimental Botany and Planta—and won the Brain Korea 21 Grand Prize. With extensive experience as a lab instructor and presenter at international conferences, he specializes in plant molecular biology, protein function and genetic engineering. Dr. Yoon will lead HackDKU ’25’s hands‑on plasmid‑design workshop using SnapGene, sharing practical insights from his award‑winning research and teaching.`,
    picture: "/speakers/yoon.png",
  },
  {
    name: "Liang Guo",
    title: "Co-founder • Guoshu (Huzhou) Intelligent Technology Co., Ltd.",
    bio: `Liang Guo is a co-founder of Guoshu (Huzhou) Intelligent Technology Co., Ltd. He has extensive experience in the field of artificial intelligence and has worked on various projects related to AI applications in different industries. Guoshu Intelligence is a company focusing on the application of brain-inspired intelligence in the financial field, and has carried out cooperation with the ISTBI of Fudan University. Liang Guo will lead a workshop about the application of brain-inspired intelligence in the financial field`,
    picture: "/speakers/liangguo.png",
  },
  {
    name: "Luyao Zhang",
    title: "Assistant Professor of Economics • DKU",
    bio: `Dr. Luyau Zhang is an Assistant Professor of Economics at DKU, Senior Research Scientist at the Digital Innovation Research Center, Founding Advisor of DKU Finance and AI Clubs, and Pioneering Interdisciplinary Research at the interplay of computational and economic science on groundbreaking technologies. Dr. Zhang will lead workshop where she plans to introduce the concept of agentic finance, focusing on the development of multi-agent intelligence systems to address global financial sustainability challenges. Participants will learn about the principles and applications of agentic finance, and how it can be used to create innovative solutions for sustainable financial practices.`,
    picture: "/chairs/luyao.png",
  },
  {
    name: "Xu Tingyu",
    title: "Business Development Representative • AWS",
    bio: `Xu Tingyu is a Business Development Representative at AWS. He specializes in go-to-market strategies for GenAI solutions and will present on the GenAI-powered Coding Assistant, demonstrating how developers can seamlessly integrate AI-driven code generation into their workflows using AWS services.`,
    picture: "/speakers/xutingyu.png",
  },
  {
    name: "Shi Qiao",
    title: "Senior GenAI GTM Specialist • AWS",
    bio: `Shi Qiao is a Senior Go-to-Market Specialist for Generative AI at AWS. With a focus on developer enablement and AI adoption, he will co-present the GenAI-powered Coding Assistant, sharing best practices for leveraging AWS’s AI stack to accelerate coding productivity.`,
    picture: "/speakers/shiqiao.png",
  },
];

/************************
 *  Helper Components   *
 ************************/
function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const paragraphs = speaker.bio.split(/\n\n+/);
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 border-4 rounded-lg p-6 mb-8">
      <div className="w-48 h-48 flex-shrink-0">
        <img
          src={speaker.picture}
          alt={speaker.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-bold">{speaker.name}</h3>
        <p className="mt-1 italic text-[#D97706] text-sm">{speaker.title}</p>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-sm mt-${i === 0 ? "2" : "4"} leading-5 text-muted-foreground`}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function renderJudgeGrid(members: Judge[]) {
  if (!members.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 container max-w-5xl mt-12">
      {members.map((m, idx) => (
        <div
          key={idx}
          className="w-full max-w-sm p-4 mx-auto rounded-lg transition-colors duration-300"
        >
          <img
            src={m.picture}
            alt={m.name}
            className="w-40 h-40 mx-auto rounded-full object-cover"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">{m.name}</h3>
            {m.role && (
              <p className="hover:text-[#7C3AED] italic text-sm">{m.role}</p>
            )}
            {m.major && (
              <p className="hover:text-[#D97706] text-[#059669] italic text-sm">
                {m.major}
              </p>
            )}
            {m.email && (
              <a
                href={`mailto:${m.email}`}
                className="text-[#059669] text-sm italic block mt-2 hover:text-[#059669]"
              >
                {m.email}
              </a>
            )}
            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B82F6] italic text-sm mt-2 hover:text-[#3B82F6]"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/***********************
 *   Page Component    *
 **********************/
export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  // Triple‑clone sponsors list for an infinite marquee loop
  const loopLogos = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section>
      {/* Spacer before hero */}
      <div className="mb-20" />
      <Splash />

      {/* Intro */}
      <div className="container p-10 flex max-w-5xl flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold mt-6 mb-6">Welcome to HackDKU!</h2>
        <p className="max-w-5xl text-sm sm:text-base leading-7 text-muted-foreground">
          Duke Kunshan University’s <strong>Computer Science</strong>, AI, iGEM, Programming Contest, and Finance Clubs present
          <em> HackDKU</em>—a hackathon redefining innovation through inclusive collaboration and lasting change.
        </p>
        <p className="max-w-5xl text-sm sm:text-base leading-7 text-muted-foreground">
          Beyond coding sprints, enjoy speaker sessions, workshops, and tracks in{' '}
          <code className="text-amber-600">Finance</code>,{' '}
          <code className="text-violet-600">Healthcare/Biotech</code>, and{' '}
          <code className="text-green-600">Environment/Sustainability</code>. All backgrounds welcome!
        </p>
      </div>

      {/* Countdown to hackathon */}
      <div className="container max-w-5xl mx-auto mb-4 text-center">
        <h2 className="text-3xl font-bold mb-4"></h2>
        {/* Adjust start time here */}
        <Countdown target="2025-04-27T17:00:00" />
      </div>

      {/* Tracks */}
      <div id="tracks" className="container mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hackathon Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div key="Finance" className={`p-6 border-4 border-amber-600 rounded-lg`}>
              <h3 className="text-xl font-bold">Finance</h3>
              <p className="mt-2 text-sm">Innovative financial technologies & new approaches.</p>
        </div>
        <div key="Healthcare / Biotech" className={`p-6 border-4 border-violet-600 rounded-lg`}>
              <h3 className="text-xl font-bold">Healthcare / Biotech</h3>
              <p className="mt-2 text-sm">Advances in healthcare, biotech & life sciences.</p>
        </div>
        <div key="Environment / Sustainability" className={`p-6 border-4 border-green-600 rounded-lg`}>
              <h3 className="text-xl font-bold">Environment / Sustainability</h3>
              <p className="mt-2 text-sm">Solutions for environmental protection.</p>
        </div>
        </div>
      </div>

      {/* Sponsors */}
      <div id="sponsors-carousel" className="w-full mt-20 mb-10 text-center">
        <h2 className="text-4xl font-bold mb-10 container mx-auto">Our Sponsors</h2>
        <div className="marquee-container">
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
      </div>

      {/* Keynote Speaker */}
      <div className="container mt-20 mb-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Keynote Speakers</h2>
        {keynoteSpeakers.map((s) => (
          <SpeakerCard key={s.name} speaker={s} />
        ))}
      </div>

      {/* Speakers */}
      <div className="container mt-20 mb-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Speakers</h2>
        {speakers.map((s) => (
          <SpeakerCard key={s.name} speaker={s} />
        ))}
      </div>

      {/* Judges */}
      <div className="container mt-20 mb-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Judges</h2>
        {renderJudgeGrid(judges)}
      </div>
    </section>
  );
}
