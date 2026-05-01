import SectionHeading from '../components/SectionHeading'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../data/reviews'

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

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-12">
        <div className="container-page text-center text-sm text-ink-soft">
          <p>
            These reviews are curated from public sources and patient feedback. We'll add live
            review aggregation in a future update.
          </p>
        </div>
      </section>
    </>
  )
}
