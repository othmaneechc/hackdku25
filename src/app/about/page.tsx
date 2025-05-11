import PixelCanvas from "@/components/PixelCanvas"; // Import the PixelCanvas component
import { Metadata } from "next";

// Example for Next.js 13+ route: /about

export const metadata: Metadata = {
  title: "About",
};

// ----- Data Arrays -----
const steeringCommitteeChairs = [
  {
    name: "Dr. Luyao Zhang",
    role: "Steering Committee Chair",
    major: "Assistant Professor of Economics",
    email: "luyao.zhang@dukekunshan.edu.cn",
    linkedin: "#",
    picture: "/chairs/luyao.png",
  },
  {
    name: "Dr. Linfeng Huang",
    role: "Steering Committee Chair",
    major: "Associate Professor of Biology",
    email: "linfeng.huang@dukekunshan.edu.cn",
    linkedin: "#",
    picture: "/chairs/linfeng.png",
  },
  {
    name: "Dr. Jiang Long",
    role: "Steering Committee Chair",
    major: "Senior Lecturer in Computer Science",
    email: "jiang.long@dukekunshan.edu.cn",
    linkedin: "#",
    picture: "/chairs/long.png",
  },
];

const organizingCommitteeChairs = [
  {
    name: "Guangzhi (Allen) Su",
    role: "Organizing Committee Chair",
    major: "AMaCS Computer Science",
    email: "guangzhi.su@duke.edu",
    linkedin:
      "https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
    picture: "/team/allen.png",
  },
  {
    name: "Othmane Echchabi",
    role: "Organizing Committee Chair",
    major: "Data Science",
    email: "othmane.echchabi@duke.edu",
    linkedin: "https://www.linkedin.com/in/othmaneechchabi/",
    picture: "/team/othmane.png",
  },
  {
    name: "Anar Nyambayar",
    role: "Organizing Committee Chair",
    major: "AMaCS Computer Science",
    email: "anar.nyambayar@duke.edu",
    linkedin: "https://www.linkedin.com/in/anar-n/",
    picture: "/team/anar.png",
  },
];

const programCommitteeChairs = [
  {
    name: "Shaban Muhammad",
    role: "iGEM Representative",
    major: "Molecular Bioscience: Genetics & Genomics",
    email: "shaban.muhammad@duke.edu",
    linkedin: "https://www.linkedin.com/in/shabanmuhammad/",
    picture: "/team/shaban.png",
  },
  // {
  //   name: "Jiahe Chen",
  //   role: "AI Club Representative",
  //   major: "Computation & Design",
  //   email: "jiahe.chen@duke.edu",
  //   linkedin: "https://www.linkedin.com/in/chenjiahe0331",
  //   picture: "/team/jiahe.png",
  // },
  {
    name: "Ruisheng (Rosa) Sun",
    role: "AI Club Representative",
    major: "AMaCS Mathematics",
    email: "rs689@duke.edu",
    linkedin: "https://www.linkedin.com/in/rose-7956b12b2",
    picture: "/team/rosa.png",
  },
  {
    name: "Yuanjun Du",
    role: "Finance Club Representative",
    major: "Economics",
    email: "yuanjun.du@duke.edu",
    linkedin: "#",
    picture: "/team/du.png",
  },
  {
    name: "Zi Hu",
    role: "Programming Contest Club Representative",
    major: "AMaCS Computer Science",
    email: "zi.hu@duke.edu",
    linkedin: "#",
    picture: "/team/zihu.png",
  },
];

const outreachTeam = [
  {
    name: "Wiam Benadder",
    role: "Outreach Team Member",
    major: "Data Science",
    email: "wiam.benadder@duke.edu",
    linkedin: "#",
    picture: "/team/wiam1.png",
  },
  {
    name: "Bouchra Daddaoui",
    role: "Outreach Team Member",
    major: "AMaCS Computer Science",
    email: "bouchra.daddaoui@duke.edu",
    linkedin: "#",
    picture: "/team/bouchra.png",
  },
  {
    name: "Zhuohang Liu",
    role: "Outreach Team Member",
    major: "AMaCS Computer Science",
    email: "zl429@duke.edu",
    linkedin: "https://www.linkedin.com/in/zhuohang-anthony-liu-%E5%88%98%E5%8D%93%E8%88%AA-9357b5362/",
    picture: "/team/zhuohang.png",
  },
];

const designTeam = [
  {
    name: "Avidikhuu Altangerel",
    role: "Design Team Member",
    major: "Computer Science",
    email: "aa846@duke.edu",
    linkedin: "https://www.linkedin.com/in/avidikhuu/",
    picture: "/team/avidi.png",
  },
  {
    name: "Ximing Yu",
    role: "Design Team Member",
    major: "Computation & Design",
    email: "xy170@duke.edu.cn",
    linkedin: "https://www.linkedin.com/in/ximing-333109342/",
    picture: "/team/ximing.png",
  },
  {
    name: "Andi Wan",
    role: "Design Team Member",
    major: "Computation & Design",
    email: "andi.wan@duke.edu",
    linkedin: "https://www.linkedin.com/in/andi-wan-3261ba346/",
    picture: "/team/andi.png",
  },
];

const marketingTeam = [
  {
    name: "Guangzhi (Allen) Su (Lead)",
    role: "Marketing Team Lead",
    major: "Computer Science",
    email: "gs285@duke.edu",
    linkedin:
      "https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
    picture: "/team/allen.png",
  },
  {
    name: "Sattor Khamroev",
    role: "Marketing Team Member",
    major: "Data Science",
    email: "sk960@duke.edu",
    linkedin: "https://www.linkedin.com/in/sattor-khamroev/",
    picture: "/team/sattor.png",
  },
  {
    name: "Sam Akhmedjonov",
    role: "Marketing Team Member",
    major: "Data Science",
    email: "sam.akhmedjonov@duke.edu",
    linkedin: "#",
    picture: "/team/sam.png",
  },
];

const softwareTeam = [
  {
    name: "Othmane Echchabi",
    role: "Software Team Member",
    major: "Data Science",
    email: "oe23@duke.edu",
    linkedin: "https://www.linkedin.com/in/othmaneechchabi/",
    picture: "/team/othmane.png",
  },
  {
    name: "Anar Nyambayar",
    role: "Software Team Member",
    major: "AMaCS Computer Science",
    email: "an301@duke.edu",
    linkedin: "https://www.linkedin.com/in/anar-n/",
    picture: "/team/anar.png",
  },
  {
    name: "Yanpei Yu",
    role: "Software Team Member",
    major: "Data Science",
    email: "yy475@duke.edu",
    linkedin: "https://www.linkedin.com/in/yanpei-yu/",
    picture: "/team/yanpei.png",
  },
  // {
  //   name: "Enqi Du",
  //   role: "Software Team Member",
  //   major: "",
  //   email: "placeholder@example.com",
  //   linkedin: "#",
  //   picture: "/team/placeholder.png",
  // },
];

const mediaTeam = [
  {
    name: "Tianyao Wang",
    role: "Media Team Member",
    major: "AMaCS Mathematics",
    email: "Jerome6066@gmail.com",
    linkedin: "/",
    picture: "/team/tianyao.png",
  },
  {
    name: "Chenlei (Sarah) Tao",
    role: "Media Team Member",
    major: "AMaCS Mathematics",
    email: "ct368@duke.edu",
    linkedin: "www.linkedin.com/in/ChenleiTao",
    picture: "/team/chenlei.png",
  },
  // {
  //   name: "Enqi Du",
  //   role: "Software Team Member",
  //   major: "",
  //   email: "placeholder@example.com",
  //   linkedin: "#",
  //   picture: "/team/placeholder.png",
  // },
];

// ----- Helper to Render Each Grid -----
interface TeamMember {
  name: string;
  role: string;
  major: string;
  email: string;
  linkedin: string;
  picture: string;
}

function renderGrid(membersArray: TeamMember[]): JSX.Element | null {
  if (!membersArray.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 container max-w-5xl mt-12">
      {membersArray.map((member, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-4 mx-auto rounded-lg transition-colors duration-300"
        >
          <img
            src={member.picture}
            alt={member.name}
            className="w-40 h-40 mx-auto rounded-full object-cover"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold transition-colors">
              {member.name}
            </h3>
            <p className="hover:text-[#7C3AED]  italic text-sm transition-colors">
              {member.role}
            </p>
            {member.major && (
              <p className="hover:text-[#D97706]  italic text-sm transition-colors">
                {member.major}
              </p>
            )}
            <a
              href={`mailto:${member.email}`}
              className="text-[#059669] text-sm italic block mt-2 hover:text-[#059669]"
            >
              {member.email}
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] italic text-sm mt-2 hover:text-[#3B82F6]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ----- Page Component -----
export default function AboutPage() {
  return (
    // Main wrapper for the pixel background effect
    <main className="relative">
      {/* Pixel background container behind the content */}
      <div
        id="pixel-canvas-container"
        className="absolute inset-0 pointer-events-none z-0"
      />
      <PixelCanvas />

      {/* Main content on top (z-10) */}

      <div className="container mt-12 relative max-w-6xl py-6 lg:py-10 z-10">

        {/* Steering Committee Chairs */}
        <h2 className="text-center text-3xl font-bold mt-12">
          Steering Committee Chairs
        </h2>
        {renderGrid(steeringCommitteeChairs)}

        {/* Organizing Committee Chairs */}
        <h2 className="text-center text-3xl font-bold mt-12">
          Organizing Committee Chairs
        </h2>
        {renderGrid(organizingCommitteeChairs)}

        {/* Program Committee Chairs */}
        <h2 className="text-center text-3xl font-bold mt-12">
          Program Committee Chairs
        </h2>
        {renderGrid(programCommitteeChairs)}

        {/* Program Committee Members */}
        <h2 className="text-center text-3xl font-bold mt-12">
          Program Committee Members
        </h2>

        <h3 className="text-center text-2xl font-bold mt-8">Outreach Team</h3>
        {renderGrid(outreachTeam)}

        <h3 className="text-center text-2xl font-bold mt-8">Design Team</h3>
        {renderGrid(designTeam)}

        <h3 className="text-center text-2xl font-bold mt-8">Marketing Team</h3>
        {renderGrid(marketingTeam)}

        <h3 className="text-center text-2xl font-bold mt-8">Software Team</h3>
        {renderGrid(softwareTeam)}

        <h3 className="text-center text-2xl font-bold mt-8">Media Team</h3>
        {renderGrid(mediaTeam)}
      </div>
    </main>
  );
}
