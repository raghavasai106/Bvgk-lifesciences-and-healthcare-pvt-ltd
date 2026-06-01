const divisions = [
  {
    title: "Critical Care",
    description:
      "Life-saving formulations for ICU and emergency settings. Our critical care portfolio covers injectables, infusions, and supportive therapies designed for high-acuity clinical environments."
  },
  {
    title: "Oncology",
    description:
      "Specialised oncology products supporting chemotherapy and supportive care protocols. We ensure consistent availability of oncology formulations for hospitals and cancer treatment centres."
  },
  {
    title: "Nutraceuticals",
    description:
      "Science-backed nutraceutical products covering vitamins, minerals, and therapeutic nutrition. Designed to complement clinical treatment and support long-term wellness."
  }
];

export default function ServicesPage() {
  return (
    <section className="page-frame">
      <div className="page-container">
        <article className="feature-panel">
          <p className="chip">Divisions</p>
          <h1>Three divisions. One standard of quality.</h1>
          <p>
            BVGK Lifesciences operates across Critical Care, Oncology, and
            Nutraceuticals — each division built around a commitment to product
            quality, reliable distribution, and meaningful clinical outcomes.
          </p>
        </article>

        <div className="card-grid">
          {divisions.map((division) => (
            <article className="glass-card" key={division.title}>
              <h2>{division.title}</h2>
              <p>{division.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
