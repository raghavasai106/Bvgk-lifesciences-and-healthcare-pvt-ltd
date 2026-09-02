export default function Faq({ items }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details className="faq-item" key={i}>
          <summary className="faq-question">
            <span>{item.q}</span>
            <span className="faq-chevron" aria-hidden="true">⌄</span>
          </summary>
          <p className="faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
