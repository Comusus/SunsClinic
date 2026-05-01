import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <section className="bg-clay-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we offer"
            title="Services & specialties"
            description="From acupuncture and herbal medicine to cupping and bodywork, every modality we offer is grounded in tradition and tailored to you."
            align="left"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-16">
        <div className="container-page text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">Not sure what's right for you?</h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            Most patients begin with an initial consultation, where we listen, ask questions, and
            recommend a path forward based on what your body needs.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Book a consultation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
