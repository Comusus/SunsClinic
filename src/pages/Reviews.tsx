import { ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../data/reviews'
import { REVIEW_PROFILE_URLS } from '../types'
import { trackEvent } from '../lib/analytics'

export default function Reviews() {
  return (
    <>
      <section className="bg-clay-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient stories"
            title="Voices from our community"
            description="A small selection of feedback from patients we've had the privilege to care for. We're grateful for every story shared."
            align="left"
          />
        </div>
      </section>

      {reviews.length > 0 ? (
        <section className="py-16 sm:py-20">
          <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-20">
          <div className="container-page max-w-2xl rounded-2xl border border-dashed border-clay-200 bg-cream-50 p-10 text-center">
            <p className="font-serif text-2xl text-ink">Reviews coming soon</p>
            <p className="mt-3 text-ink-soft">
              In the meantime, you can read what patients are saying directly on Google and Yelp.
            </p>
          </div>
        </section>
      )}

      <section className="bg-cream-100 py-16">
        <div className="container-page text-center space-y-6">
          <p className="eyebrow">Read more</p>
          <h2 className="font-serif text-3xl sm:text-4xl">See reviews on the platforms you trust</h2>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={REVIEW_PROFILE_URLS.Google}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => trackEvent('outbound_clicked', { platform: 'google', location: 'reviews_cta' })}
            >
              Google Reviews <ExternalLink size={14} aria-hidden />
            </a>
            <a
              href={REVIEW_PROFILE_URLS.Yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              onClick={() => trackEvent('outbound_clicked', { platform: 'yelp', location: 'reviews_cta' })}
            >
              Yelp <ExternalLink size={14} aria-hidden />
            </a>
            <a
              href={REVIEW_PROFILE_URLS.HealthProfs}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              onClick={() => trackEvent('outbound_clicked', { platform: 'healthprofs', location: 'reviews_cta' })}
            >
              HealthProfs <ExternalLink size={14} aria-hidden />
            </a>
          </div>
          <p className="pt-4 text-xs text-ink-soft">
            Reviews shown on this site are quoted from public sources with attribution and a link
            back to the original.
          </p>
        </div>
      </section>
    </>
  )
}
