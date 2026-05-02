export interface Service {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  benefits: string[]
}

export interface Review {
  id: string
  author: string
  source: 'Google' | 'Healthgrades' | 'Yelp' | 'HealthProfs' | 'Direct'
  rating: number
  text: string
  date?: string
  sourceUrl?: string
}

// Yelp profile and the Google Maps entry with the reviews tab open
// (the !9m1!1b1 segment in the Google URL forces the reviews panel).
export const REVIEW_PROFILE_URLS = {
  Yelp: 'https://www.yelp.com/biz/sun-acupuncture-herbal-clinic-s-setauket',
  Google:
    "https://www.google.com/maps/place/Sun's+Acupuncture+%26+Herbal+Clinic/@40.8846793,-73.0915389,17z/data=!4m8!3m7!1s0x89e838a1175619ad:0x428ad04f43c1f3bc!8m2!3d40.8846793!4d-73.0915389!9m1!1b1!16s%2Fg%2F1wcxf3s_",
  HealthProfs:
    'https://www.healthprofs.com/us/acupuncturists/xiurong-sun-south-setauket-ny/511343',
} as const

export interface ClinicHours {
  day: string
  hours: string
}

export interface ClinicInfo {
  name: string
  shortName: string
  practitioner: string
  practitionerCredentials: string
  tagline: string
  phone: string
  email: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  zip: string
  mapsUrl: string
  hours: ClinicHours[]
  social: {
    label: string
    url: string
  }[]
}
