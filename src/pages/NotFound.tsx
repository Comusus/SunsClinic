import { Link } from 'react-router-dom'
import { clinicInfo } from '../data/clinicInfo'
import { trackEvent } from '../lib/analytics'

export default function NotFound() {
  const phoneHref = `tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-2xl text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-tight">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-5 text-lg text-ink-soft">
          The link may have moved or been mistyped. Try one of the pages below, or give us a call.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Back to home</Link>
          <Link to="/services" className="btn-ghost">Services</Link>
          <Link to="/contact" className="btn-ghost">Contact &amp; hours</Link>
          <a
            href={phoneHref}
            className="btn-ghost"
            onClick={() => trackEvent('phone_call_clicked', { location: 'not_found' })}
          >
            Call {clinicInfo.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
