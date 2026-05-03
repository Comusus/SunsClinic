import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { clinicInfo } from '../data/clinicInfo'
import { trackEvent } from '../lib/analytics'

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
        <div onClick={() => setOpen(false)}>
          <Logo variant="compact" />
        </div>

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
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="btn-primary"
            onClick={() => trackEvent('phone_call_clicked', { location: 'navbar_desktop' })}
          >
            Book a Visit by Phone Call
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
              onClick={() => {
                trackEvent('phone_call_clicked', { location: 'navbar_mobile' })
                setOpen(false)
              }}
            >
              Book a Visit by Phone Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
