import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { clinicInfo } from '../data/clinicInfo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-clay-100 bg-clay-50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{clinicInfo.name}</p>
          <p className="mt-3 text-sm text-ink-soft max-w-sm">
            {clinicInfo.tagline}. Practitioner: {clinicInfo.practitioner},{' '}
            {clinicInfo.practitionerCredentials}.
          </p>
        </div>

        <div className="text-sm space-y-3">
          <p className="eyebrow mb-3">Visit</p>
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 text-clay-500" />
            <span>
              {clinicInfo.addressLine1 || 'Address coming soon'}
              {clinicInfo.addressLine2 && (
                <>
                  <br />
                  {clinicInfo.addressLine2}
                </>
              )}
              <br />
              {clinicInfo.city}, {clinicInfo.state} {clinicInfo.zip}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-clay-500" />
            <a className="hover:text-clay-700" href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}>
              {clinicInfo.phone}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-clay-500" />
            <a className="hover:text-clay-700" href={`mailto:${clinicInfo.email}`}>
              {clinicInfo.email}
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow mb-3">Explore</p>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-clay-700">About</Link></li>
            <li><Link to="/services" className="hover:text-clay-700">Services</Link></li>
            <li><Link to="/reviews" className="hover:text-clay-700">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-clay-700">Contact &amp; Hours</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-clay-100">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between py-6 text-xs text-ink-soft gap-2">
          <p>© {year} {clinicInfo.name}. All rights reserved.</p>
          <p>Information on this site is for educational purposes and is not medical advice.</p>
        </div>
      </div>
    </footer>
  )
}
