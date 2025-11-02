import Hero from "./components/Hero";
import ProcessTech from "./components/ProcessTech";
import ImpactResearchTeam from "./components/ImpactResearchTeam";
import ContactCTA from "./components/ContactCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProcessTech />
        <ImpactResearchTeam />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-cyan-500 to-emerald-500" />
          LungLife AI
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
          <a href="#how-it-works" className="hover:text-white">How It Works</a>
          <a href="#impact" className="hover:text-white">Impact</a>
          <a href="#research" className="hover:text-white">Research</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#contact" className="rounded-lg bg-cyan-500 px-3 py-1.5 font-semibold text-slate-900 hover:bg-cyan-400">Request Demo</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>© {new Date().getFullYear()} LungLife AI. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#research" className="hover:text-slate-900">Research & Insights</a>
          <a href="#team" className="hover:text-slate-900">About Us</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
