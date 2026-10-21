import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import CtaButton from "@/components/ui/CtaButton";

const PROJECT_TYPES = [
  "Graphic Design",
  "Branding",
  "Website Design",
  "Front-End Development",
  "Social Media Design",
  "Other",
];

const inputClass =
  "w-full bg-transparent border-b border-white/15 px-0 py-3 text-white placeholder-white/30 focus:border-crg-magenta focus:outline-none transition-colors text-base";

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project_type: "",
    message: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await base44.entities.Inquiry.create({
        ...form,
        status: "new",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border border-white/10 rounded-sm p-10 md:p-14 text-center bg-white/[0.02]"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-crg-magenta/15 border border-crg-magenta/40 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-crg-magenta" />
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
          Message Received.
        </h3>
        <p className="mt-4 text-white/65 max-w-md mx-auto">
          Thank you for reaching out. I'll review your project details and get back to you within
          1–2 business days.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", company: "", project_type: "", message: "" });
          }}
          className="mt-8 text-sm uppercase tracking-[0.18em] text-crg-magenta hover:text-white transition-colors"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-8 min-w-0">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label className="text-[0.7rem] uppercase tracking-[0.2em] text-white/85">Name *</label>
          <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="text-[0.7rem] uppercase tracking-[0.2em] text-white/85">Email *</label>
          <input required type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
        </div>
        <div>
          <label className="text-[0.7rem] uppercase tracking-[0.2em] text-white/85">Phone</label>
          <input value={form.phone} onChange={update("phone")} className={inputClass} placeholder="Optional" />
        </div>
        <div>
          <label className="text-[0.7rem] uppercase tracking-[0.2em] text-white/85">Company / Organization</label>
          <input value={form.company} onChange={update("company")} className={inputClass} placeholder="Company name" />
        </div>
      </div>

      <div>
        <label className="text-[0.7rem] uppercase tracking-[0.2em] text-white/85 block mb-3">Project Type *</label>
        <div className="flex flex-wrap gap-2.5">
          {PROJECT_TYPES.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setForm({ ...form, project_type: t })}
              className={`px-4 py-2.5 text-sm rounded-sm border transition-all ${
                form.project_type === t
                  ? "border-crg-magenta bg-crg-magenta/10 text-white"
                  : "border-white/15 text-white/75 hover:border-white/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[0.7rem] uppercase tracking-[0.2em] text-white/85">What Can We Help You Create? *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project, goals, and vision..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please try again or email directly.
        </p>
      )}

      <CtaButton type="submit" disabled={status === "loading"} arrow={status !== "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>Let's Get Started</>
        )}
      </CtaButton>
    </form>
  );
}