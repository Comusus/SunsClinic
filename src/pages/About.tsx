import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { clinicInfo } from '../data/clinicInfo'

const credentials = [
  'Licensed Acupuncturist (L.Ac.), New York State',
  'NCCAOM Diplomate of Oriental Medicine',
  'Trained in Traditional Chinese Medicine in China',
  'Years of clinical experience in acupuncture and herbal medicine',
]

const philosophy = [
  {
    title: 'Listen first',
    body: 'Every body is different. We take time to understand your full picture — symptoms, lifestyle, history — before recommending care.',
  },
  {
    title: 'Treat the whole person',
    body: 'Pain, sleep, digestion, and stress are connected. Treatment plans are designed to support all of them, not just the loudest symptom.',
  },
  {
    title: 'Respect the tradition',
    body: 'Chinese medicine has thousands of years of recorded wisdom. We bring that legacy together with modern clinical understanding.',
  },
]

export default function About() {
  return (
    <>
      <section className="bg-clay-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="About the practice"
            title={`${clinicInfo.practitioner}, ${clinicInfo.practitionerCredentials}`}
            description={`Founder and lead practitioner at ${clinicInfo.name}, serving ${clinicInfo.city}, ${clinicInfo.state} and the surrounding community.`}
            align="left"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="prose-content space-y-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            <p>
              {clinicInfo.practitioner} is a licensed acupuncturist and herbalist trained in
              Traditional Chinese Medicine. She founded {clinicInfo.name} to bring thoughtful,
              personalized Eastern medicine to families on Long Island.
            </p>
            <p>
              Patients come to the clinic for a wide range of concerns — chronic pain, fertility
              support, anxiety, insomnia, digestive issues, headaches, and more. Each treatment is
              shaped around the person in front of her, not a checklist.
            </p>
            <p className="italic text-ink">
              Note: this is placeholder biography copy. Replace with the practitioner's actual story,
              education timeline, and specialties when ready.
            </p>
          </div>

          <aside className="rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
            <p className="eyebrow mb-3">Credentials</p>
            <ul className="space-y-3 text-sm text-ink">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 inline-block h-1 w-1 rounded-full bg-clay-500" />
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Our philosophy"
            title="Care that meets you where you are"
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {philosophy.map((p) => (
              <div key={p.title} className="rounded-2xl bg-cream-50 p-7 shadow-sm border border-clay-100">
                <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page text-center">
          <p className="eyebrow mb-4">Ready to begin?</p>
          <h2 className="font-serif text-3xl sm:text-4xl">We'd be glad to meet you.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact the clinic</Link>
            <Link to="/services" className="btn-ghost">Browse services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
