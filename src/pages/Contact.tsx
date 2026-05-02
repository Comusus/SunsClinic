import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { clinicInfo, acceptedInsurance } from '../data/clinicInfo'

export default function Contact() {
  const phoneHref = `tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`
  return (
    <>
      <section className="bg-clay-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get in touch"
            title="Visit, call, or send us a note"
            description="We're happy to answer questions and help you book your first visit."
            align="left"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
              <p className="eyebrow mb-4">Clinic</p>
              <ul className="space-y-4 text-ink">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-clay-500" />
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
                    <br />
                    <a
                      href={clinicInfo.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm text-clay-700 hover:underline"
                    >
                      Get directions →
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-clay-500" />
                  <a className="hover:text-clay-700" href={phoneHref}>
                    {clinicInfo.phone}
                  </a>
                </li>
                {clinicInfo.email && (
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-1 text-clay-500" />
                    <a className="hover:text-clay-700" href={`mailto:${clinicInfo.email}`}>
                      {clinicInfo.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
              <p className="eyebrow mb-4 flex items-center gap-2">
                <Clock size={14} /> Hours
              </p>
              <ul className="divide-y divide-clay-100 text-sm">
                {clinicInfo.hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-2">
                    <span className="text-ink">{h.day}</span>
                    <span className="text-ink-soft">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-clay-100 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-100 p-10 shadow-sm flex items-center justify-center text-center min-h-[420px]">
            <div className="max-w-sm">
              <p className="font-serif text-2xl text-ink">Booking by phone for now</p>
              <p className="mt-3 text-ink-soft">
                The fastest way to reach us is by calling directly. An online contact form will be
                added in a future update.
              </p>
              <a href={phoneHref} className="btn-primary mt-6">
                Call {clinicInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Insurance"
            title="Accepted insurance plans"
            description="Many plans cover acupuncture in network. Coverage varies by plan, so please verify your benefits with your insurer before your first visit."
            align="left"
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-clay-100 bg-cream-50 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-clay-50 text-ink">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck size={16} className="text-clay-600" aria-hidden />
                      Plan
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-clay-100">
                {acceptedInsurance.map((plan) => (
                  <tr key={plan} className="hover:bg-clay-50/40">
                    <td className="px-6 py-3 text-ink">{plan}</td>
                    <td className="px-6 py-3 text-ink-soft">In network</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            Don&rsquo;t see your plan? Give us a call. We can often check eligibility for you, and
            self-pay options are available at $50 per visit.
          </p>
        </div>
      </section>
    </>
  )
}
