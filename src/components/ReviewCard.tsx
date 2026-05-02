import { Star, ExternalLink } from 'lucide-react'
import type { Review } from '../types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
      <div
        className="flex items-center gap-1 text-clay-500"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
        <span className="font-medium text-ink">{review.author}</span>
        <span aria-hidden>·</span>
        {review.sourceUrl ? (
          <a
            href={review.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-clay-700 hover:text-clay-800 hover:underline"
          >
            {review.source}
            <ExternalLink size={12} aria-hidden />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        ) : (
          <span>{review.source}</span>
        )}
        {review.date && (
          <>
            <span aria-hidden>·</span>
            <span>{review.date}</span>
          </>
        )}
      </figcaption>
    </figure>
  )
}
