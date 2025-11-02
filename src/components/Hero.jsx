import { Brain, Shield, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-cyan-200 ring-1 ring-white/20 backdrop-blur">
            <Brain className="h-4 w-4" /> Powered by AI & Deep Learning
          </span>
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl">
            LungLife AI
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Predict. Prevent. Protect. LungLife AI analyzes patient data, medical images, and respiratory patterns to detect COPD, asthma, and lung cancer earlier—powering personalized treatment decisions.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Feature icon={<Activity className="h-5 w-5" />} title="Early Detection" desc="Find subtle signals before symptoms worsen." />
            <Feature icon={<Shield className="h-5 w-5" />} title="Personalized Care" desc="Tailored risk scores and treatment suggestions." />
            <Feature icon={<Brain className="h-5 w-5" />} title="Clinical-Grade AI" desc="Built with medical datasets and expert review." />
          </div>

          <a href="#contact" className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-1px] hover:bg-cyan-400">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
      <div className="flex items-center gap-3 text-cyan-300">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  );
}
