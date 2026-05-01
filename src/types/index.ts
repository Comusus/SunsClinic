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
}

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
