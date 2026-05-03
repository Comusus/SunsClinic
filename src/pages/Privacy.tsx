import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

export default function Privacy() {
  return (
    <>
      <section className="bg-clay-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Privacy"
            title="What this site collects"
            description="A short, plain-language summary of how this website handles your visit."
            align="left"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl space-y-8 text-ink-soft leading-relaxed">
          <p>
            This site is the public marketing website for Sun&rsquo;s Acupuncture &amp; Herbal
            Clinic. It is not a patient portal, and it does not collect, store, or transmit any
            patient health information. We do not run any forms or accounts on this site.
          </p>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">What we measure</h2>
            <p>
              To understand how visitors find and use the site, we use two privacy-friendly
              analytics tools:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-6">
              <li>
                <strong>Cloudflare Web Analytics</strong> counts page views, top pages, and where
                visitors arrive from (e.g. Google search, Yelp). It does not set cookies and does
                not collect any personal data.{' '}
                <a
                  href="https://www.cloudflare.com/web-analytics-privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clay-700 underline-offset-4 hover:underline"
                >
                  Cloudflare&rsquo;s privacy notice
                </a>
                .
              </li>
              <li>
                <strong>Microsoft Clarity</strong> records anonymized session interactions (mouse
                movements, scroll depth, button clicks) and produces aggregate heatmaps. We use
                this to find and fix usability issues, for example when visitors cannot easily
                locate our phone number or directions. Clarity masks form fields and personal
                information by default.{' '}
                <a
                  href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/cookie-consent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clay-700 underline-offset-4 hover:underline"
                >
                  Clarity privacy details
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">What we do not do</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>We do not sell, share, or trade visitor data with advertisers.</li>
              <li>We do not run targeted advertising or remarketing pixels.</li>
              <li>We do not use cookies for tracking.</li>
              <li>We do not collect names, emails, phone numbers, or health information through this site.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">Opting out</h2>
            <p>
              Most browsers offer an &ldquo;Enhanced Tracking Protection&rdquo; or content blocker
              that will block analytics scripts. Both Cloudflare Web Analytics and Microsoft
              Clarity respect those settings. If you would prefer not to be measured, enabling a
              content blocker or visiting in a private window is the simplest path.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink mb-3">Contacting us</h2>
            <p>
              If you have questions about this notice or about how we handle information at the
              clinic itself (which is governed separately by HIPAA), please reach us by phone via
              the <Link to="/contact" className="text-clay-700 underline-offset-4 hover:underline">Contact</Link> page.
            </p>
          </div>

          <p className="text-sm text-ink-soft">Last updated: May 2026.</p>
        </div>
      </section>
    </>
  )
}
