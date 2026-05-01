import { Link } from 'react-router-dom'
import { clinicInfo } from '../data/clinicInfo'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-clay-200/60 to-sage-200/40 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-24 lg:grid-cols-2 lg:py-32 lg:gap-16">
        <div className="flex flex-col justify-center max-w-xl">
          <p className="eyebrow mb-5">Sun's Acupuncture &amp; Herbal Clinic</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.05] text-ink">
            {clinicInfo.tagline}
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Personalized acupuncture and Chinese herbal medicine in {clinicInfo.city},{' '}
            {clinicInfo.state}. Compassionate care from {clinicInfo.practitioner},{' '}
            {clinicInfo.practitionerCredentials}, supporting pain relief, fertility, stress, sleep,
            and whole-body wellness.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">Schedule a Visit</Link>
            <Link to="/services" className="btn-ghost">Explore Services</Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[28px] bg-gradient-to-br from-sage-200 via-cream-100 to-clay-200 shadow-xl ring-1 ring-clay-100">
            <div className="flex h-full w-full items-center justify-center text-center px-8">
              <div>
                <p className="font-serif text-2xl text-ink">A calm, intentional space.</p>
                <p className="mt-3 text-sm text-ink-soft">
                  Hero imagery placeholder — drop a clinic photo into{' '}
                  <code className="rounded bg-cream-100 px-1.5 py-0.5">public/images/</code> and
                  swap this block in <code className="rounded bg-cream-100 px-1.5 py-0.5">Hero.tsx</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
