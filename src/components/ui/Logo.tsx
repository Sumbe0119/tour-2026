export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path
        d="M8 28 L20 10 L32 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="14" r="2.5" fill="currentColor" opacity="0.8" />
      <line x1="12" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
