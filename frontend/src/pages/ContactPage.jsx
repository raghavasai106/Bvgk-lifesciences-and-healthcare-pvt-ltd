import { useState } from "react";
import Reveal from "../components/Reveal";
import { sendContactMessage } from "../services/companyApi";

const initialForm = { name: "", email: "", phone: "", message: "" };

const contactDetails = [
  { icon: "📞", label: "Phone", value: "+91 96764 83331" },
  { icon: "📧", label: "Email", value: "info@bvgklifesciences.com" },
  { icon: "📍", label: "Location", value: "Hyderabad, Telangana, India" }
];

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending your inquiry..." });
    try {
      await sendContactMessage(form);
      setStatus({ state: "success", message: "Thank you. Our team will get back to you shortly." });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Unable to submit right now. Please try again." });
    }
  }

  function updateField(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <>
      <section className="inner-hero">
        <div className="page-container">
          <Reveal>
            <span className="section-eyebrow">Contact</span>
            <h1 className="section-title">Partner with us or inquire about our products</h1>
            <p className="section-sub">
              Whether you're a distributor, healthcare professional, or institution —
              our team is ready to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-frame">
        <div className="page-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>

            <Reveal>
              <span className="section-eyebrow">Reach us directly</span>
              <h2 className="section-title" style={{ fontSize: "1.4rem" }}>We'd love to hear from you</h2>
              <div style={{ display: "grid", gap: 20, marginTop: 32 }}>
                {contactDetails.map(c => (
                  <div key={c.label} style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    padding: "20px", background: "var(--bg-light)",
                    borderRadius: "var(--radius-lg)", border: "1px solid var(--border)"
                  }}>
                    <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
                    <div>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{c.label}</p>
                      <p style={{ color: "var(--text-dark)", fontWeight: 500 }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <span className="section-eyebrow">Send a message</span>
              <form className="contact-form" style={{ maxWidth: "100%", marginTop: 16 }} onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input name="name" value={form.name} onChange={updateField} placeholder="Your full name" required />
                </label>
                <label>
                  Email Address
                  <input type="email" name="email" value={form.email} onChange={updateField} placeholder="you@company.com" required />
                </label>
                <label>
                  Phone
                  <input name="phone" value={form.phone} onChange={updateField} placeholder="+91 00000 00000" />
                </label>
                <label>
                  Message
                  <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us about your inquiry" rows={5} required />
                </label>
                <button className="btn btn-primary" type="submit" disabled={status.state === "loading"} style={{ justifySelf: "flex-start" }}>
                  {status.state === "loading" ? "Sending..." : "Send Inquiry →"}
                </button>
                {status.state !== "idle" && <p className={`form-status ${status.state}`}>{status.message}</p>}
              </form>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
