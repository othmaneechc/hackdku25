import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

// Available image items come from your assets; 
// For missing images, we use "/team/placeholder.png"

const organizingCommitteeChairs = [
  {
    name: "Guangzhi (Allen) Su",
    role: "Organizing Committee Chair",
    major: "Computer Science",
    email: "gs285@duke.edu",
    linkedin:
      "https://www.linkedin.com/in/allen-guangzhi-su-%E8%8B%8F%E5%B9%BF%E6%99%BA-613070244/?originalSubdomain=cn",
    picture: "/team/allen.png",
  },
  {
    name: "Othmane Echchabi",
    role: "Organizing Committee Chair",
    major: "Data Science",
    email: "oe23@duke.edu",
    linkedin: "https://www.linkedin.com/in/othmaneechchabi/",
    picture: "/team/othmane.png",
  },
  {
    name: "Anar Nyambayar",
    role: "Organizing Committee Chair",
    major: "AMaCS Computer Science",
    email: "an301@duke.edu",
    linkedin: "https://www.linkedin.com/in/anar-n/",
    picture: "/team/anar.png",
  },
];

const programCommitteeChairs = [
  {
    name: "Shaban Muhammad",
    role: "Program Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Jiahe Chen",
    role: "Program Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Zi Hu",
    role: "Program Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Yuanjun Du",
    role: "Program Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
];

const steeringCommitteeChairs = [
  {
    name: "Dr. Luyao Zhang",
    role: "Steering Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Dr. Linfeng Huang",
    role: "Steering Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Dr. Jiang Long",
    role: "Steering Committee Chair",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
];

const outreachTeam = [
  {
    name: "Wiam Benadder",
    role: "Outreach Team Member",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Ruisheng Sun",
    role: "Outreach Team Member",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Bouchra",
    role: "Outreach Team Member",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
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
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
  {
    name: "Andi Wan",
    role: "Design Team Member",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
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
    name: "Yanpei Yu",
    role: "Marketing Team Member",
    major: "Data Science",
    email: "yy475@duke.edu",
    linkedin: "https://www.linkedin.com/in/yanpei-yu/",
    picture: "/team/yanpei.png",
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
    name: "Samandar",
    role: "Marketing Team Member",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
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
    name: "Enqi Du",
    role: "Software Team Member",
    major: "",
    email: "placeholder@example.com",
    linkedin: "#",
    picture: "/team/placeholder.png",
  },
];

interface TeamMember {
  name: string;
  role: string;
  major: string;
  email: string;
  linkedin: string;
  picture: string;
}

function renderGrid(membersArray: TeamMember[]): JSX.Element | null {
  // If the array is empty, return null (or you could render a "Coming soon" message)
  if (!membersArray.length) return null;
  // If the array is not empty, render the grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 container max-w-4xl mt-12">
      {membersArray.map((member, index) => (
        <div
          key={index}
          className="w-full max-w-xs p-4 mx-auto rounded-lg transition-colors duration-300"
        >
          <img
            src={member.picture}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full object-cover"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold transition-colors">
              {member.name}
            </h3>
            <p className="hover:text-[#7C3AED] text-sm transition-colors">{member.role}</p>
            {member.major && (
              <p className="hover:text-[#D97706] text-sm transition-colors">{member.major}</p>
            )}
            <a
              href={`mailto:${member.email}`}
              className="text-[#059669] text-sm block mt-2 hover:text-[#059669]"
            >
              {member.email}
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] text-sm mt-2 hover:text-[#3B82F6]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="container mt-12 relative max-w-6xl py-6 lg:py-10">

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

      {/* Steering Committee Chairs */}
      <h2 className="text-center text-3xl font-bold mt-12">
        Steering Committee Chairs
      </h2>
      {renderGrid(steeringCommitteeChairs)}

      {/* Members Section */}
      <h2 className="text-center text-3xl font-bold mt-12">
      Program Committee Members
      </h2>
      <h3 className="text-center text-2xl font-bold mt-8">
        Outreach Team
      </h3>
      {renderGrid(outreachTeam)}

      <h3 className="text-center text-2xl font-bold mt-8">
        Design Team
      </h3>
      {renderGrid(designTeam)}

      <h3 className="text-center text-2xl font-bold mt-8">
        Marketing Team
      </h3>
      {renderGrid(marketingTeam)}

      <h3 className="text-center text-2xl font-bold mt-8">
        Software Team
      </h3>
      {renderGrid(softwareTeam)}
    </div>
  );
}
