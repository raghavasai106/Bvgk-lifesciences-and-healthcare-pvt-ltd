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
    setStatus({ state: "loading", message: "Sending your request..." });

    try {
      const response = await sendContactMessage(form);
      setStatus({
        state: "success",
        message:
          response.message || "Your message has been sent. We will contact you shortly."
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error.message ||
          "Unable to submit your request right now. Please try again."
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
        <h1>Book a test or get in touch</h1>
        <p>
          Book a lab test, request home sample collection, or enquire about our
          gene diagnostic services. We will get back to you shortly.
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
            placeholder="Tell us about the test you need or your query"
            rows={5}
            required
          />
        </label>

        <button className="btn btn-primary" type="submit" disabled={status.state === "loading"}>
          {status.state === "loading" ? "Sending..." : "Book / Enquire"}
        </button>

        {status.state !== "idle" && (
          <p className={`form-status ${status.state}`}>{status.message}</p>
        )}
      </form>
      </div>
    </section>
  );
}
