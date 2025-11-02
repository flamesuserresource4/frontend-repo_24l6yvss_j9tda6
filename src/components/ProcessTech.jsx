import { Upload, Images, Stethoscope, BarChart3, CheckCircle2, Cpu, Database, LineChart } from "lucide-react";

export default function ProcessTech() {
  return (
    <section className="relative bg-slate-50 py-20" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How It Works</h2>
          <p className="mt-3 text-slate-600">
            From data input to prediction, LungLife AI simplifies complex diagnostics into clear, actionable insights.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          <Step icon={<Upload className="h-5 w-5" />} title="1. Input" desc="Securely ingest EHR data, spirometry, and imaging (CT/X-ray)." />
          <Step icon={<Cpu className="h-5 w-5" />} title="2. Analyze" desc="Deep models process signals and images for pathology markers." />
          <Step icon={<BarChart3 className="h-5 w-5" />} title="3. Predict" desc="Generate risk scores for COPD, asthma, and lung cancer." />
          <Step icon={<CheckCircle2 className="h-5 w-5" />} title="4. Recommend" desc="Personalized pathways and follow-up suggestions." />
        </div>

        <div className="mt-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card
              icon={<Images className="h-6 w-6 text-cyan-600" />}
              title="Vision + Signal Models"
              desc="CNNs for CT/X-ray, transformers for clinical notes, and temporal models for respiratory patterns."
            />
            <Card
              icon={<Database className="h-6 w-6 text-cyan-600" />}
              title="Curated Medical Data"
              desc="Trained on de-identified multicenter datasets with radiology reports and spirometry tests."
            />
            <Card
              icon={<LineChart className="h-6 w-6 text-cyan-600" />}
              title="Proven Accuracy"
              desc="Internal validation shows high AUCs across diseases; calibrated for clinical decision support."
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-8 text-slate-600">
          <Badge icon={<Stethoscope className="h-4 w-4" />} text="Clinician-in-the-loop" />
          <Badge icon={<Cpu className="h-4 w-4" />} text="Explainable AI visualizations" />
          <Badge icon={<Images className="h-4 w-4" />} text="Heatmaps & feature importances" />
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-cyan-700">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
      {icon}
      <span>{text}</span>
    </div>
  );
}
