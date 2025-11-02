import { Hospital, Users, FileText, Award } from "lucide-react";

export default function ImpactResearchTeam() {
  return (
    <section className="bg-white py-20" id="impact">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Impact</h2>
          <p className="mt-3 text-slate-600">
            Helping clinicians, hospitals, and patients make faster, smarter decisions with confidence.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ImpactCard icon={<Hospital className="h-6 w-6 text-emerald-600" />} title="Hospitals" desc="Reduce readmissions, streamline triage, and prioritize high-risk cases." />
          <ImpactCard icon={<Users className="h-6 w-6 text-emerald-600" />} title="Clinicians" desc="Objective risk scores and visual explanations to support diagnosis." />
          <ImpactCard icon={<Award className="h-6 w-6 text-emerald-600" />} title="Patients" desc="Earlier interventions, fewer complications, and personalized care." />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2" id="research">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-cyan-700" />
              <h3 className="text-xl font-semibold text-slate-900">Research & Insights</h3>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Ongoing multicenter study on early COPD phenotyping using CT and spirometry.</li>
              <li>Whitepaper: Explainable heatmaps for radiology decision support.</li>
              <li>Collaboration with academic hospitals to validate real-world performance.</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-cyan-700 hover:underline">Request whitepapers</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8" id="team">
            <h3 className="text-xl font-semibold text-slate-900">Team / About Us</h3>
            <p className="mt-3 text-sm text-slate-700">
              LungLife AI is built by a team of researchers, data scientists, and clinicians dedicated to respiratory health. We combine medical expertise with state-of-the-art machine learning to create safe, effective tools for real patient outcomes.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Profile name="Dr. A. Rivera" role="Chief Medical Officer" />
              <Profile name="J. Chen, PhD" role="Lead ML Scientist" />
              <Profile name="S. Patel" role="Head of Product" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function Profile({ name, role }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500" />
      <div className="mt-3">
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-slate-600">{role}</p>
      </div>
    </div>
  );
}
