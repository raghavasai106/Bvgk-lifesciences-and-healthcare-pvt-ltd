const PATHS = {
  "shield-check": (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      <path d="M8.5 12 11 14.5 16 9" />
    </>
  ),
  flask: (
    <>
      <path d="M10 2h4" />
      <path d="M10 2v6.2L5 18a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9.8V2" />
      <circle cx="9" cy="17" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="13" cy="19" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="8" width="12" height="8" rx="1" />
      <path d="M14 11h4l3 3v2h-7z" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 14c2.3 0.3 4 2 4 5" />
    </>
  ),
  virus: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.8 5.8l2.1 2.1M16.1 16.1l2.1 2.1M18.2 5.8l-2.1 2.1M7.9 16.1l-2.1 2.1" />
    </>
  ),
  nutrition: (
    <>
      <path d="M4 12a8 8 0 0 0 16 0Z" />
      <path d="M4 12h16" />
      <path d="M9 5.5c.5 1-.5 1.5 0 2.5M12 4.5c.5 1-.5 1.5 0 2.5M15 5.5c.5 1-.5 1.5 0 2.5" />
    </>
  ),
  dna: (
    <>
      <path d="M7 3c0 4 10 4 10 8s-10 4-10 8" />
      <path d="M17 3c0 4-10 4-10 8s10 4 10 8" />
      <path d="M8 7h8M7.3 12h9.4M8 17h8" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 5h4" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M3 6.5 12 13l9-6.5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 7h1.5M11.25 7h1.5M14.5 7h1.5M8 11h1.5M11.25 11h1.5M14.5 11h1.5" />
    </>
  ),
  package: (
    <>
      <path d="M12 3 21 7.5v9L12 21 3 16.5v-9Z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </>
  )
};

export default function Icon({ name, size = 24 }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
