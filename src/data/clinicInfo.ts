import type { ClinicInfo } from '../types'

export const clinicInfo: ClinicInfo = {
  name: "Sun's Acupuncture & Herbal Clinic",
  shortName: "Sun's Clinic",
  practitioner: 'Xiurong Sun',
  practitionerCredentials: 'OMD, L.Ac.',
  tagline: 'Traditional Chinese Medicine for modern wellness',
  phone: '(631) 585-8188',
  email: '',
  addressLine1: '10 Province Dr',
  city: 'South Setauket',
  state: 'NY',
  zip: '11720',
  // Canonical Google Maps place URL (place ID encoded in the !1s segment).
  mapsUrl:
    "https://www.google.com/maps/place/Sun's+Acupuncture+%26+Herbal+Clinic/@40.8846793,-73.0915389,17z/data=!4m6!3m5!1s0x89e838a1175619ad:0x428ad04f43c1f3bc!8m2!3d40.8846793!4d-73.0915389!16s%2Fg%2F1wcxf3s_",
  hours: [
    { day: 'Monday', hours: 'By appointment' },
    { day: 'Tuesday', hours: 'By appointment' },
    { day: 'Wednesday', hours: 'By appointment' },
    { day: 'Thursday', hours: 'By appointment' },
    { day: 'Friday', hours: 'By appointment' },
    { day: 'Saturday', hours: 'By appointment' },
    { day: 'Sunday', hours: 'By appointment' },
  ],
  social: [],
}

export const acceptedInsurance: string[] = [
  'APS Healthcare',
  'BlueCross BlueShield',
  'Cigna',
  'Empire BlueCross',
  'MagnaCare',
  'NYSHIP',
  'Optum',
  'Oxford',
  'UnitedHealthcare',
]
