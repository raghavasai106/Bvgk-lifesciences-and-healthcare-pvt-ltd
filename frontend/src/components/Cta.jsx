import { Link } from "react-router-dom";

export default function Cta({
  to,
  href,
  onClick,
  type,
  variant = "primary",
  hint,
  arrow = false,
  className = "",
  disabled,
  style,
  children
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <span className="btn-stack">
      <span className="btn-label">
        {children}
        {arrow && <span className="btn-arrow">→</span>}
      </span>
      {hint && <span className="btn-hint">{hint}</span>}
    </span>
  );

  if (to) return <Link to={to} className={classes} style={style}>{content}</Link>;
  if (href) return <a href={href} className={classes} style={style}>{content}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} style={style}>
      {content}
    </button>
  );
}
