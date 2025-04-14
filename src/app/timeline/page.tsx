import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "timeline",
};

export default function TimelinePage() {
  return (
    <div className="container mt-12 relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="Hackathon Schedule"/>
      {/* <hr className="my-8" /> */}

      <div className="mt-8 space-y-12">
        {/* March 23rd Schedule */}
        <section>
          <h2 className="text-2xl font-bold mb-4">April 26th</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="px-4 py-2 border"
                  style={{ backgroundColor: "#3B82F6", fontWeight: "bold" }}
                >
                  Time
                </th>
                <th
                  className="px-4 py-2 border"
                  style={{ backgroundColor: "#3B82F6", fontWeight: "bold" }}
                >
                  Event
                </th>
                <th
                  className="px-4 py-2 border"
                  style={{ backgroundColor: "#3B82F6", fontWeight: "bold" }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">9:30</td>
                <td className="px-4 py-2 border">Registration</td>
                <td className="px-4 py-2 border">AB Auditorium (2220)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">10:10</td>
                <td className="px-4 py-2 border">Opening Ceremony</td>
                <td className="px-4 py-2 border">
                  TBD (AB Auditorium)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">10:25</td>
                <td className="px-4 py-2 border">Hackathon Instructions</td>
                <td className="px-4 py-2 border">
                  Guanzhi (Allen) Su, HackDKU Organizer
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">10:30</td>
                <td className="px-4 py-2 border">Keynote Speech (Biotech)</td>
                <td className="px-4 py-2 border">
                  Christine Huang (AB Auditorium)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">11:00</td>
                <td className="px-4 py-2 border">Keynote speech (AI / Fintech)</td>
                <td className="px-4 py-2 border">
                  TBD (AB Auditorium)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">11:30</td>
                <td className="px-4 py-2 border">Team formation session</td>
                <td className="px-4 py-2 border">AB Auditorium</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">12:00</td>
                <td className="px-4 py-2 border">Lunch Break</td>
                <td className="px-4 py-2 border">Executive Dining Hall</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">13:00</td>
                <td className="px-4 py-2 border">AI Workshop by AWS</td>
                <td className="px-4 py-2 border">AWS (TBD)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">14:00</td>
                <td className="px-4 py-2 border">Biotech Workshop</td>
                <td className="px-4 py-2 border">
                SnapGene (TBD)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">15:00</td>
                <td className="px-4 py-2 border">Fintech workshop</td>
                <td className="px-4 py-2 border">
                TBD &amp; (TBD)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">16:00</td>
                <td className="px-4 py-2 border">Hacking continues...</td>
                <td className="px-4 py-2 border">AB Team Room</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">18:00 - 22:00</td>
                <td className="px-4 py-2 border">Mentorship Office Hours</td>
                <td className="px-4 py-2 border">
                  AB Team rooms (check Instructions page)
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* March 24th Schedule */}
        <section>
          <h2 className="text-2xl font-bold mb-4">April 27th</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="px-4 py-2 border"
                  style={{ backgroundColor: "#3B82F6", fontWeight: "bold" }}
                >
                  Time
                </th>
                <th
                  className="px-4 py-2 border"
                  style={{ backgroundColor: "#3B82F6", fontWeight: "bold" }}
                >
                  Event
                </th>
                <th
                  className="px-4 py-2 border"
                  style={{ backgroundColor: "#3B82F6", fontWeight: "bold" }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">12:00</td>
                <td className="px-4 py-2 border">Deadline for Project Submission</td>
                <td className="px-4 py-2 border">Submission on DevPost</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">13:00</td>
                <td className="px-4 py-2 border">Judging and Project presentations</td>
                <td className="px-4 py-2 border">IB Theatre</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">16:30</td>
                <td className="px-4 py-2 border">Closing Speech</td>
                <td className="px-4 py-2 border">
                  TBD (TBD)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">17:30</td>
                <td className="px-4 py-2 border">Awarding and Closing Ceremony</td>
                <td className="px-4 py-2 border">AB Auditorium</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
