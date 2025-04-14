import Splash from "@/components/splash";

// import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      {/* <Background /> */}
      {/* <h3 className="text-clip bg-clip-content text-right text-4xl lg:text-6xl opacity-50 text-green-500">
      <span className="animate-ping delay-0 duration-1000 hover:text-blue-800">*</span>
      <span className="animate-ping delay-75 duration-1000 hover:text-blue-800">*</span>
      <span className="animate-ping delay-100 duration-1000 hover:text-blue-800">*</span>
      <span className="animate-ping delay-150 duration-1000 hover:text-blue-800">*</span>
      <span className="animate-ping delay-200 duration-1000 hover:text-blue-800">*</span>
      <span className="animate-ping delay-300 duration-1000 hover:text-blue-800">*</span>
      </h3> */}
      <section className="">
        <div className="mb-20"></div>
        <Splash />
        <div className="container mt-0 p-10 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
          <p className="max-w-2xl font-sans text-left leading-normal text-muted-foreground text-sm sm:text-base sm:leading-7">
            Duke Kunshan University’s{" "}
            <span className="font-bold">Computer Science</span>, AI, iGEM,
            Programming Contest, and Finance Clubs are thrilled to introduce{" "}
            <span className="italic">HackDKU</span>, an event that’s not just
            another hackathon but a transformative experience designed to
            redefine the hackathon ethos. At HackDKU, we’re not just developing
            technology; we’re cultivating innovations that matter, fostering
            inclusive collaboration, and inspiring lasting change.
          </p>
          {/* Might consider adding cool logos for the 3 innovation tracks */}
          <p className="max-w-2xl text-left leading-normal text-muted-foreground text-sm sm:text-base sm:leading-7">
            This event goes beyond the traditional hackathon format. It’s an
            arena for stimulating speaker sessions, hands-on workshops, and
            project development across three key tracks: <span className="text-amber-600 font-mono">Finance</span>, <span className="text-violet-600 font-mono">Healthcare /
            Biotech</span>, and <span className="text-green-600 font-mono">Environment / Sustainability</span>. We invite innovators of
            all hues – whether tech enthusiasts or non-tech thinkers, students
            fresh on their academic journey or seasoned experts, representatives
            of centralized entities or advocates of decentralized systems.
          </p>
        </div>
      </section>
    </>
  );
}
