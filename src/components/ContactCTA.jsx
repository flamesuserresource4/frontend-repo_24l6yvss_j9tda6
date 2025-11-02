import { Mail, Building2, Phone } from "lucide-react";

export default function ContactCTA() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // In a full application, send this to the backend.
    console.log("Demo request submitted:", data);
    alert("Thanks! We received your request and will contact you shortly.");
    e.currentTarget.reset();
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact / Demo Request</h2>
            <p className="mt-3 text-slate-600">
              Hospitals, startups, or researchers—partner with us to bring AI to respiratory care.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-600" /> contact@lunglife.ai</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-600" /> +1 (555) 555-0117</p>
              <p className="flex items-center gap-2"><Building2 className="h-4 w-4 text-cyan-600" /> Global research partners</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Organization" name="organization" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">How can we help?</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell us about your use case" />
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-500">
              Request Access
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">We respond within 2 business days.</p>
          </form>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold text-slate-900">Predict. Prevent. Protect. <span className="text-cyan-600">Your Lungs Matter.</span></p>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:ring-2 focus:ring-cyan-500" />
    </div>
  );
}
