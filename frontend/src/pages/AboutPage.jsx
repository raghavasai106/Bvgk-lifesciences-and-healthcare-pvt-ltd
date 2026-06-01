const values = [
  "Consistent product quality across all therapeutic segments",
  "Reliable supply chain and distribution partnerships",
  "Compliance with GMP and regulatory standards",
  "Patient outcomes at the centre of every decision"
];

export default function AboutPage() {
  return (
    <section className="page-frame">
      <div className="page-container">
        <article className="feature-panel">
          <p className="chip">About Us</p>
          <h1>Pharmaceutical excellence across critical therapies</h1>
          <p>
            BVGK Lifesciences and Healthcare Pvt Ltd is a pharmaceutical company
            focused on bringing quality-driven products to healthcare professionals
            and institutions across India. We operate across three core divisions —
            Critical Care, Oncology, and Nutraceuticals — ensuring both clinical
            efficacy and supply reliability.
          </p>
          <p>
            Our mission is to support better patient outcomes through consistent
            product quality, ethical business practices, and strong partnerships
            with the healthcare ecosystem.
          </p>
        </article>

        <article className="feature-panel">
          <h2 className="section-title">Our Core Values</h2>
          <ul className="clean-list">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
