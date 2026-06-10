/**
 * AquaOps droplet mark. By default the colours come from CSS (so the navbar
 * can recolour it on scroll via custom properties). Pass `drop`/`line` to
 * force specific colours (used on dark sections and in the footer).
 */
export function LogoMark({ className = "logo-mark", drop, line }) {
  const dropStyle = drop ? { fill: drop } : undefined;
  const lineStyle = line ? { stroke: line } : undefined;
  const dotStyle = line ? { fill: line } : undefined;

  return (
    <svg className={className} viewBox="0 0 160 160" aria-hidden="true">
      <g transform="translate(20,18)">
        <path
          className="drop"
          style={dropStyle}
          d="M 60 14 C 60 14, 94 50, 94 76 A 34 34 0 1 1 26 76 C 26 50, 60 14, 60 14 Z"
        />
        <path
          className="line"
          style={lineStyle}
          d="M 45 52 C 70 52, 50 78, 75 86"
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="dot" style={dotStyle} cx="45" cy="52" r="5.5" />
        <circle className="dot" style={dotStyle} cx="75" cy="86" r="5.5" />
      </g>
    </svg>
  );
}
