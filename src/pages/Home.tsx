import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ReviewCard from '../components/ReviewCard'
import { services } from '../data/services'
import { reviews } from '../data/reviews'
import { clinicInfo } from '../data/clinicInfo'

export default function Home() {
  const featuredServices = services.slice(0, 3)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28">
        <div className="container-page space-y-14">
          <SectionHeading
            eyebrow="What we offer"
            title="Care rooted in tradition, tailored to you"
            description="Every visit begins with listening. From there, we draw on acupuncture, herbal medicine, and complementary therapies to build a treatment plan that fits your body and your goals."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-ghost">View all services</Link>
          </div>
        </div>
      </section>

      <section className="bg-clay-50 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Meet your practitioner</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {clinicInfo.practitioner}, {clinicInfo.practitionerCredentials}
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              With years of training in classical acupuncture and Chinese herbal medicine,{' '}
              {clinicInfo.practitioner.split(' ')[0]} brings warmth, precision, and deep clinical
              experience to every patient she sees in {clinicInfo.city}.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-primary">Read her story</Link>
            </div>
          </div>
          <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-[28px] bg-gradient-to-br from-clay-200 via-cream-100 to-sage-200 shadow-md ring-1 ring-clay-100" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page space-y-14">
          <SectionHeading
            eyebrow="Patient stories"
            title="What our patients say"
            description="A few words from people we've had the privilege to care for."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/reviews" className="btn-ghost">Read more reviews</Link>
          </div>
        </div>
      </section>

      <section className="bg-sage-50 py-20 sm:py-24">
        <div className="container-page text-center">
          <SectionHeading
            eyebrow="Begin your visit"
            title="Ready to feel like yourself again?"
            description="New patients are warmly welcomed. Reach out to book a consultation and we'll find a time that works for you."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="btn-primary">
              Call {clinicInfo.phone}
            </a>
            <Link to="/contact" className="btn-ghost">Contact the clinic</Link>
          </div>
        </div>
      </section>
    </>
  )
}
