import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'compact' | 'full'
  asLink?: boolean
  className?: string
}

function Mark({ size }: { size: number }) {
  // Yin-yang built from layered shapes so both eyes land cleanly on solid
  // backgrounds: cream base, dark right half, dark lower-left bump, cream
  // upper-right bump, then the two opposing eye dots, then a final outline.
  const cream = '#fdfbf6'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="100" cy="100" r="98" fill={cream} />
      <path d="M100,2 A98,98 0 0,1 100,198 L100,2 Z" fill="currentColor" />
      <circle cx="100" cy="149" r="49" fill="currentColor" />
      <circle cx="100" cy="51" r="49" fill={cream} />
      <circle cx="100" cy="51" r="14" fill="currentColor" />
      <circle cx="100" cy="149" r="14" fill={cream} />
      <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

export default function Logo({ variant = 'compact', asLink = true, className = '' }: LogoProps) {
  const isFull = variant === 'full'
  const markSize = isFull ? 56 : 36
  const wordmarkClass = isFull
    ? 'font-serif text-2xl sm:text-3xl text-ink'
    : 'font-serif text-xl text-ink'

  const inner = (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label="Sun's Acupuncture & Herbal Clinic"
    >
      <Mark size={markSize} />
      <div className="flex flex-col leading-[1.05]">
        {isFull ? (
          <>
            <span className={wordmarkClass}>Sun&rsquo;s Acupuncture</span>
            <span className={wordmarkClass}>&amp; Herbal Clinic</span>
          </>
        ) : (
          <>
            <span className={wordmarkClass}>Sun&rsquo;s Clinic</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-clay-500">
              Acupuncture &amp; Herbal Medicine
            </span>
          </>
        )}
      </div>
    </div>
  )

  if (asLink) {
    return (
      <Link to="/" className="inline-flex items-center transition hover:opacity-90">
        {inner}
      </Link>
    )
  }
  return inner
}
