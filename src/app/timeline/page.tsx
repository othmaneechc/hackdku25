import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <div className="container mt-20 relative max-w-6xl py-6 lg:py-10">
      <h2 className="text-4xl font-bold mb-6 font-mono">HackDKU Schedule</h2>
      {/* <hr className="my-8" /> */}
      <div className="mt-8 space-y-15">
        {/* March 23rd Schedule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 font-mono">April 26th</h2>
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Time</th>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Event</th>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Location</th>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">9:30-10:00</td>
                <td className="px-4 py-2 border">Registration</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
                <td className="px-4 py-2 border">Participants register for the event</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">10:10-10:20</td>
                <td className="px-4 py-2 border">Opening Ceremony</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
                <td className="px-4 py-2 border">Welcome speech and introduction</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">10:20-10:25</td>
                <td className="px-4 py-2 border">Hackathon Instructions</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
                <td className="px-4 py-2 border">Guanzhi (Allen) Su, HackDKU Organizer</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">10:30 - 11:00</td>
                <td className="px-4 py-2 border">Keynote Speech (Biotech)</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
                <td className="px-4 py-2 border">Christine Huang, Founder & CEO @ Quantum Life</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">11:00 - 11:30</td>
                <td className="px-4 py-2 border">Keynote speech (AI / Fintech)</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
                <td className="px-4 py-2 border">TBD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">11:30 - 12:00</td>
                <td className="px-4 py-2 border">Team formation session</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
                <td className="px-4 py-2 border">Participants form teams</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">12:00 - 13:00</td>
                <td className="px-4 py-2 border">Lunch Break</td>
                <td className="px-4 py-2 border">Executive Dining Hall</td>
                <td className="px-4 py-2 border">Lunch provided for participants</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">13:00 - 14:00</td>
                <td className="px-4 py-2 border">AI Workshop</td>
                <td className="px-4 py-2 border">TBD</td>
                <td className="px-4 py-2 border">Led by Amazon Web Services (AWS)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">14:00 - 15:00</td>
                <td className="px-4 py-2 border">Biotech Workshop</td>
                <td className="px-4 py-2 border">TBD</td>
                <td className="px-4 py-2 border">SnapGene</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">15:00 - 16:00</td>
                <td className="px-4 py-2 border">Fintech workshop</td>
                <td className="px-4 py-2 border">TBD</td>
                <td className="px-4 py-2 border">TBD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">16:00 - 18:00</td>
                <td className="px-4 py-2 border">Hacking continues...</td>
                <td className="px-4 py-2 border">AB Team Room</td>
                <td className="px-4 py-2 border">Teams work on their projects</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">18:00 - 22:00</td>
                <td className="px-4 py-2 border">Mentorship Office Hours</td>
                <td className="px-4 py-2 border">
                  AB Team rooms (check Instructions page)
                </td>
                <td className="px-4 py-2 border">Mentors available for guidance</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* March 24th Schedule */}
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-10 font-mono">April 27th</h2>
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Time</th>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Event</th>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Location</th>
                <th className="px-4 py-2 border bg-blue-500/70 font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">11:00 - 12:00</td>
                <td className="px-4 py-2 border">Deadline for Project Submission</td>
                <td className="px-4 py-2 border">TBD</td>
                <td className="px-4 py-2 border">Submission on DevPost</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">13:00 - 16:00</td>
                <td className="px-4 py-2 border">Judging and Project Presentations</td>
                <td className="px-4 py-2 border">IB Theatre</td>
                <td className="px-4 py-2 border">Teams present their projects</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">16:30 - 17:00</td>
                <td className="px-4 py-2 border">Closing Speech</td>
                <td className="px-4 py-2 border">TBD</td>
                <td className="px-4 py-2 border">Final remarks and thank you</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">17:00 - 17:30</td>
                <td className="px-4 py-2 border">Awarding and Closing Ceremony</td>
                <td className="px-4 py-2 border">AB Auditorium</td>
                <td className="px-4 py-2 border">Awards and recognition</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
