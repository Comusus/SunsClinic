import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../types'

interface ServiceCardProps {
  service: Service
  detailed?: boolean
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-clay-100 bg-cream-50 p-7 shadow-sm transition hover:border-clay-200 hover:shadow-md">
      <h3 className="text-2xl font-serif text-ink">{service.title}</h3>
      <p className="mt-3 text-ink-soft leading-relaxed">
        {detailed ? service.longDescription : service.shortDescription}
      </p>
      {detailed && (
        <ul className="mt-5 space-y-2 text-sm text-ink-soft">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 inline-block h-1 w-1 rounded-full bg-clay-500" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {!detailed && (
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-clay-700 group-hover:text-clay-800"
        >
          Learn more <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
        </Link>
      )}
    </article>
  )
}
