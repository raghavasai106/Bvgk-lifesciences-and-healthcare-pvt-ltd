import { useState } from "react";
import { sendContactMessage } from "../services/companyApi";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending your inquiry..." });

    try {
      await sendContactMessage(form);
      setStatus({
        state: "success",
        message: "Thank you for your inquiry. Our team will get back to you shortly."
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error.message ||
          "Unable to submit your inquiry right now. Please try again."
      });
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <section className="page-frame">
      <div className="page-container">
        <article className="feature-panel">
          <p className="chip">Contact</p>
          <h1>Partner with us or inquire about our products</h1>
          <p>
            Whether you are a distributor, healthcare professional, or institution
            looking to partner with BVGK Lifesciences, reach out and our team will
            respond promptly.
          </p>
        </article>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Your full name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@company.com"
              required
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              placeholder="+91 00000 00000"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Tell us about your inquiry or how we can help"
              rows={5}
              required
            />
          </label>

          <button className="btn btn-primary" type="submit" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Sending..." : "Send Inquiry"}
          </button>

          {status.state !== "idle" && (
            <p className={`form-status ${status.state}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
