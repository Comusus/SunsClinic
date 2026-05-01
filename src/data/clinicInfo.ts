import type { ClinicInfo } from '../types'

export const clinicInfo: ClinicInfo = {
  name: "Sun's Acupuncture & Herbal Clinic",
  shortName: "Sun's Clinic",
  practitioner: 'Xiurong Sun',
  practitionerCredentials: 'L.Ac.',
  tagline: 'Traditional Chinese Medicine for modern wellness',
  phone: '(631) 000-0000',
  email: 'contact@example.com',
  addressLine1: '',
  city: 'South Setauket',
  state: 'NY',
  zip: '',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sun%27s+Acupuncture+South+Setauket+NY',
  hours: [
    { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: 'By appointment' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  social: [],
}
