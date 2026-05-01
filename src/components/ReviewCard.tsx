import { Star } from 'lucide-react'
import type { Review } from '../types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
      <div className="flex items-center gap-1 text-clay-500" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm text-ink-soft">
        <span className="font-medium text-ink">{review.author}</span>
        <span className="mx-2">·</span>
        <span>{review.source}</span>
      </figcaption>
    </figure>
  )
}
