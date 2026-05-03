// Centralized analytics helpers.
//
// Custom events are routed to Microsoft Clarity (window.clarity).
// Cloudflare Web Analytics handles automatic page views, referrers, and
// device tracking via the script tag in index.html (SPA mode enabled).

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void
  }
}

export type EventName =
  | 'phone_call_clicked'
  | 'directions_clicked'
  | 'outbound_clicked'
  | 'email_clicked'

export function trackEvent(name: EventName, data?: Record<string, string>) {
  if (typeof window === 'undefined' || !window.clarity) return
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      window.clarity('set', key, value)
    }
  }
  window.clarity('event', name)
}
