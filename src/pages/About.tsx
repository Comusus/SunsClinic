import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { clinicInfo } from '../data/clinicInfo'

const RESEARCHGATE_URL = 'https://www.researchgate.net/profile/Xiurong-Sun-2'

const credentials = [
  'Oriental Medical Doctor (OMD), Department of Traditional Chinese Medicine, North China Medical College (1982)',
  'Licensed Acupuncturist (L.Ac.), New York License #001163',
  'NCCA Board Certified in Acupuncture & Herbology',
  'TCM physician at North China Medical College affiliated hospital, 1982 to 1989',
  'Research Scientist (part-time), SUNY at Stony Brook School of Medicine, 1995 to 2020',
  'Clinical practice in the United States since 1989',
  'Languages: Mandarin, Spanish, and Japanese',
]

const treatsConditions = [
  'Back, neck, shoulder, and knee pain',
  'Headaches, migraines, and facial pain',
  "Bell's palsy, sciatica, and paralysis support",
  'Tennis elbow, carpal tunnel, and TMJ',
  'Stress, anxiety, depression, and insomnia',
  'Allergies, sinusitis, and hypertension',
  'Menopause, infertility, and fatigue',
  'Weight management, smoking and alcohol cessation',
]

const philosophy = [
  {
    title: 'Listen first',
    body: 'Every body is different. We take time to understand your full picture, including symptoms, lifestyle, and history, before recommending care.',
  },
  {
    title: 'Treat the whole person',
    body: 'Pain, sleep, digestion, and stress are connected. Treatment plans are designed to support all of them, not just the loudest symptom.',
  },
  {
    title: 'Respect the tradition',
    body: 'Chinese medicine has thousands of years of recorded wisdom. Dr. Sun comes from a third-generation family of TCM physicians and brings that legacy together with modern clinical understanding.',
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
            description={`Founder and lead practitioner at ${clinicInfo.name}, serving ${clinicInfo.city}, ${clinicInfo.state} and the surrounding community for over four decades.`}
            align="left"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="space-y-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            <p>
              Dr. {clinicInfo.practitioner.split(' ')[1]} is a third-generation Traditional Chinese
              Medicine physician. She entered the Department of Traditional Chinese Medicine at
              North China Medical College in September 1977, and after five years of study earned
              her Oriental Medical Doctor (OMD) degree there in September 1982. She then practiced
              as a TCM physician at the medical college&rsquo;s affiliated hospital for over seven
              years before relocating to the United States in 1989.
            </p>
            <p>
              Alongside her clinical work, Dr. Sun was a part-time Research Scientist at the SUNY
              at Stony Brook School of Medicine from June 1995 until 2020, contributing to research
              that bridges Traditional Chinese Medicine and Western medical science. A list of her
              peer-reviewed publications is available on her{' '}
              <a
                href={RESEARCHGATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay-700 underline-offset-4 hover:underline"
              >
                ResearchGate profile
              </a>
              .
            </p>
            <p>
              At {clinicInfo.name}, Dr. Sun draws on a wide range of modalities to offer care that
              is both rigorous and deeply personalized. These include classical Chinese acupuncture,
              five element and auricular acupuncture, electro-acupuncture, custom herbal medicine,
              cupping, moxibustion, and the warming TDP &ldquo;magic lamp.&rdquo;
            </p>
            <p>
              She speaks Mandarin, Spanish, and Japanese, and welcomes patients of all ages, from
              children and teenagers to elders. Many treatments are covered in-network by major
              insurance plans including BlueCross/BlueShield, Cigna, Empire BlueCross, MagnaCare,
              NYSHIP, Optum, Oxford, and UnitedHealthcare.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
              <p className="eyebrow mb-3">Credentials</p>
              <ul className="space-y-3 text-sm text-ink">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 rounded-full bg-clay-500"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm">
              <p className="eyebrow mb-3">Research</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                Dr. Sun spent 25 years as a part-time Research Scientist at SUNY Stony Brook,
                bringing a research-informed perspective to her clinical practice.
              </p>
              <a
                href={RESEARCHGATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-clay-700 hover:text-clay-800"
              >
                ResearchGate profile
                <ExternalLink size={14} aria-hidden />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page space-y-10">
          <SectionHeading
            eyebrow="Conditions we treat"
            title="A wide scope of care"
            description="Patients come to the clinic for many reasons. A non-exhaustive list of what Dr. Sun commonly works with:"
            align="left"
          />
          <ul className="grid gap-3 sm:grid-cols-2 max-w-3xl">
            {treatsConditions.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-clay-100 bg-cream-50 px-4 py-3 text-sm text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Our philosophy"
            title="Care that meets you where you are"
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {philosophy.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-cream-50 p-7 shadow-sm border border-clay-100"
              >
                <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-50 py-16 sm:py-24">
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
