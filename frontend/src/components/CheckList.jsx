export default function CheckList({ items }) {
  return (
    <ul className="clean-list">
      {items.map(item => {
        const label = typeof item === "string" ? item : item.label;
        const detail = typeof item === "string" ? null : item.detail;
        return (
          <li key={label}>
            {detail ? (
              <button type="button" className="clean-list-row">
                <span className="clean-list-label">{label}</span>
                <span className="clean-list-detail">{detail}</span>
              </button>
            ) : (
              <span className="clean-list-label">{label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
