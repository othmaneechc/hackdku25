"use client";
import Splash from "@/components/splash";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// -------------------- Data --------------------
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
    name: "TBC",
    role: "",
    major: "",
    email: "",
    linkedin: "#",
    picture: "/team/sam.png",
  },
];

// ---- Speakers ----
interface Speaker {
  name: string;
  title: string; // short role / position
  bio: string;   // longer description (can include "\n\n" for paragraph breaks)
  picture: string;
}

const keynoteSpeakers: Speaker[] = [{
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
  // ←–– Add more speakers here by appending to this array.
];

// -------------------- Helper Components --------------------
function SpeakerCard({ speaker }: { speaker: Speaker }) {
  // Split bio into paragraphs on double line breaks for nicer formatting
  const paragraphs = speaker.bio.split(/\n\n+/);
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 border-4 rounded-lg p-6 mb-8">
      <div className="w-48 h-48 flex-shrink-0">
        <img src={speaker.picture} alt={speaker.name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-bold">{speaker.name}</h3>
        <p className="mt-1 italic text-[#D97706] text-sm">{speaker.title}</p>
        {paragraphs.map((p, i) => (
          <p key={i} className={`text-sm mt-${i === 0 ? '2' : '4'} leading-5 text-muted-foreground`}>
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
        <div key={idx} className="w-full max-w-sm p-4 mx-auto rounded-lg transition-colors duration-300">
          <img src={m.picture} alt={m.name} className="w-40 h-40 mx-auto rounded-full object-cover" />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">{m.name}</h3>
            {m.role && <p className="hover:text-[#7C3AED] italic text-sm">{m.role}</p>}
            {m.major && <p className="hover:text-[#D97706] text-[#059669] italic text-sm">{m.major}</p>}
            {m.email && (
              <a href={`mailto:${m.email}`} className="text-[#059669] text-sm italic block mt-2 hover:text-[#059669]">
                {m.email}
              </a>
            )}
            {m.linkedin && (
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] italic text-sm mt-2 hover:text-[#3B82F6]">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// -------------------- Page Component --------------------
export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  // Triple‑clone sponsors list for an infinite marquee loop
  const loopLogos = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section>
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

      {/* Tracks */}
      <div id="tracks" className="container mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hackathon Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Finance', color: 'amber', blurb: 'Innovative financial technologies & new approaches.' },
            { title: 'Healthcare / Biotech', color: 'violet', blurb: 'Advances in healthcare, biotech & life sciences.' },
            { title: 'Environment / Sustainability', color: 'green', blurb: 'Solutions for environmental protection.' },
          ].map((t) => (
            <div key={t.title} className={`p-6 border-4 border-${t.color}-500 rounded-lg`}>
              <h3 className="text-xl font-bold">{t.title}</h3>
              <p className="mt-2 text-sm">{t.blurb}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors */}
      <div className="w-full mt-20 mb-10 text-center">
        <h2 className="text-4xl font-bold mb-10 container mx-auto">Our Sponsors</h2>
        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee__inner">
              {loopLogos.map((s, idx) => (
                <img key={idx} src={isDark ? s.darkSrc : s.lightSrc} alt={s.alt} className="h-20 object-contain mx-6" />
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
