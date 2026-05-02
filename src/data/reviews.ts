import type { Review } from '../types'
import { REVIEW_PROFILE_URLS } from '../types'

// Real reviews curated from Yelp and Google. Quoted verbatim with attribution
// and a link back to the source profile (neither platform exposes stable
// per-review URLs, so the source link points to the business profile).
export const reviews: Review[] = [
  {
    id: 'g-mitch-m',
    author: 'Mitch M.',
    source: 'Google',
    rating: 5,
    date: '2023',
    text: 'Knee pain has been eliminated, baker cyst gone. Playing aggressive tennis, with no pain after.',
    sourceUrl: REVIEW_PROFILE_URLS.Google,
  },
  {
    id: 'g-grace-a',
    author: 'Grace A.',
    source: 'Google',
    rating: 5,
    date: '2018',
    text: 'Dr. Sun is a brilliant woman and skilled healer. If you have pain, see her. Acupuncture therapy geared to your needs. We love her.',
    sourceUrl: REVIEW_PROFILE_URLS.Google,
  },
  {
    id: 'g-m-f',
    author: 'M F',
    source: 'Google',
    rating: 5,
    text: 'Doctor Sun has been helping me for a few weeks now with pinched nerves and bulging discs in my neck that have been causing me extreme back and arm pain for a while. She has also been helping me with some extreme back spasms in my lower back where I am now getting tremendous relief from the acupuncture and treatments. I have been going to physical therapy with little relief but the acupuncture is providing a tremendous amount of relief and much faster than I could have possibly hoped. Doctor Sun is very attentive and very helpful and will try to help you with anything you are suffering from if she can.',
    sourceUrl: REVIEW_PROFILE_URLS.Google,
  },
  {
    id: 'y-nangavaram-r',
    author: 'Nangavaram R.',
    source: 'Yelp',
    rating: 5,
    date: 'Apr 5, 2019',
    text: "I have osteo-arthritis of my right knee. I took 12 session of Physiotherapy and still had problem walking and had pain. One of my friend suggested acupuncture therapy with Dr. X. Sun. I had 2 session of treatment so far. She is an excellent acupuncturist. I didn't even felt it when needles inserted. I already feels the effect of therapy, when I walk there is less pain. Those who have pain I strongly recommend to see Dr. Sun. She has clinic at her home and very nice set up and friendly and unassuming person.",
    sourceUrl: REVIEW_PROFILE_URLS.Yelp,
  },
]

export { REVIEW_PROFILE_URLS }
