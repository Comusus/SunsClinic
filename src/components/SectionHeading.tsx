interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
