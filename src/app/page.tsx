"use client";
import Splash from "@/components/splash";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="mb-20"></div>
        <Splash />
        {/* Introductory Text */}
        <div className="container mt-0 p-10 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
          <h2 className="text-center text-4xl font-bold mt-6 mb-6">
            Welcome to HackDKU!
          </h2>
          <p className="max-w-5xl font-sans text-left leading-normal text-muted-foreground text-sm sm:text-base sm:leading-7">
            Duke Kunshan University’s{" "}
            <span className="font-bold">Computer Science</span>, AI, iGEM,
            Programming Contest, and Finance Clubs are thrilled to introduce{" "}
            <span className="italic">HackDKU</span>, an event that’s not just
            another hackathon but a transformative experience designed to
            redefine the hackathon ethos. At HackDKU, we’re not just developing
            technology; we’re cultivating innovations that matter, fostering
            inclusive collaboration, and inspiring lasting change.
          </p>
          <p className="max-w-5xl font-sans text-left leading-normal text-muted-foreground text-sm sm:text-base sm:leading-7">
            This event goes beyond the traditional hackathon format. It’s an arena for
            stimulating speaker sessions, hands-on workshops, and project development across three key tracks:{" "}
            <span className="text-amber-600 font-mono">Finance</span>,{" "}
            <span className="text-violet-600 font-mono">Healthcare / Biotech</span>, and{" "}
            <span className="text-green-600 font-mono">Environment / Sustainability</span>.
            We invite innovators of all hues – whether tech enthusiasts or non-tech thinkers,
            students fresh on their academic journey or seasoned experts.
          </p>
        </div>

        {/* Hackathon Tracks Section */}
        <div className="container mt-20 flex max-w-5xl flex-col items-center gap-6 text-center xl:mt-0">
          <h2 className="text-center text-4xl font-bold mt-6 mb-6">
            Hackathon Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-4 border-solid border-amber-500 rounded-lg">
              <h3 className="text-xl font-bold">Finance</h3>
              <p className="mt-2 text-sm">
                Innovative financial technologies and new approaches to finance.
              </p>
            </div>
            <div className="p-6 border-4 border-solid border-violet-500 rounded-lg">
              <h3 className="text-xl font-bold">Healthcare / Biotech</h3>
              <p className="mt-2 text-sm">
                Advances in healthcare, biotechnology, and life sciences.
              </p>
            </div>
            <div className="p-6 border-4 border-solid border-green-500 rounded-lg">
              <h3 className="text-xl font-bold">Environment / Sustainability</h3>
              <p className="mt-2 text-sm">
                Solutions for environmental protection and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="container mt-20 mb-10 flex max-w-5xl flex-col items-center gap-6 text-center xl:mt-0">
          <h2 className="text-center text-4xl font-bold mt-20 mb-6">Keynote Speakers</h2>
          {/* Keynote Speaker Card */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-4 rounded-lg p-6">
            {/* Speaker Photo */}
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <img
                src="/speakers/drchristine.png"
                alt="Dr. Christine Yuan HUANG"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Speaker Information and Description */}
            <div className="text-left">
            <h3 className="text-2xl font-bold">Dr. Christine Yuan HUANG</h3>
            <p className="mt-2 text-sm">
              Dr. Christine Yuan HUANG is the Founder &amp; CEO of Quantum Life, Technology Transfer Director at Hong Kong Quantum AI Lab, Managing Director of HK Longevity Medical Centre, and Venture Partner at LongeVC. She is also a Fellow of both the Royal Society of Medicine (UK) and the European Society of Preventive Medicine, serving as Vice President (Longevity) of the Hong Kong Biotechnology Association and the Founding President of Asia Longevity Professionals Association (ALPA). Her remarkable achievements have earned her recognition as one of Forbes China’s “30 Under 30” for Healthcare &amp; Science, Deloitte Outstanding Female Entrepreneur, and a member of Goldman Sachs 10000 Women.
            </p>
            <p className="mt-4 text-sm">
              Dr. Huang leads the development of the first AI‑enabled precision healthy longevity system—a breakthrough that garnered the Gold Medal at the 50th Geneva International Invention Exhibition in 2025. She also lends her expertise as an Advisory Board member for Wing Wah Charity Foundation Hong Kong and as a Forbes China columnist, holding an MD from Southern Medical University and an MPH from the University of Hong Kong’s Li Ka Shing Faculty of Medicine.
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
