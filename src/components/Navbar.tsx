import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { clinicInfo } from '../data/clinicInfo'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-clay-100/60 bg-cream-50/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl text-ink">{clinicInfo.shortName}</span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-clay-500">
            Acupuncture &amp; Herbal Medicine
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition ${
                  isActive ? 'text-clay-700 font-medium' : 'text-ink-soft hover:text-clay-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="btn-primary">
            Book a Visit
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-clay-100"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-clay-100 bg-cream-50">
          <div className="container-page flex flex-col py-4 gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `py-2 text-sm uppercase tracking-wider ${
                    isActive ? 'text-clay-700 font-medium' : 'text-ink-soft'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="btn-primary mt-2 self-start"
              onClick={() => setOpen(false)}
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
