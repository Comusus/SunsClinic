import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'acupuncture',
    title: 'Acupuncture',
    shortDescription:
      'Fine, sterile needles placed at specific points to restore the natural flow of qi and blood.',
    longDescription:
      'Drawing on classical Chinese acupuncture, five element acupuncture, and auricular (ear) acupuncture, Dr. Sun tailors each session to the patient. Acupuncture is widely used for pain, stress, sleep, hormonal balance, and recovery, and it pairs beautifully with the other modalities offered at the clinic.',
    benefits: [
      'Back, neck, shoulder, knee, and joint pain',
      'Headaches, migraines, and facial pain',
      'Sciatica, tennis elbow, carpal tunnel',
      'Stress, anxiety, depression, and insomnia',
    ],
  },
  {
    slug: 'herbal-medicine',
    title: 'Chinese Herbal Medicine',
    shortDescription:
      'Custom Chinese herbal formulas tailored to your individual constitution and concerns.',
    longDescription:
      'Each herbal formula is composed for the patient in front of us, drawing on thousands of years of recorded tradition. Herbs work between visits to support the changes acupuncture initiates, and they address conditions that benefit from longer-term care.',
    benefits: [
      'Personalized formulas',
      'Allergies, sinusitis, and respiratory health',
      'Menopause, fertility, and women’s health',
      'Digestive and immune support',
    ],
  },
  {
    slug: 'cupping',
    title: 'Cupping Therapy',
    shortDescription:
      'Gentle suction to release tight fascia, improve circulation, and ease muscle tension.',
    longDescription:
      'Cupping uses warmed glass or silicone cups to lift the soft tissue, drawing fresh blood to the area and releasing stagnation. It pairs especially well with acupuncture for stubborn tightness, post-injury recovery, and respiratory support.',
    benefits: [
      'Relieves muscular tension',
      'Improves local circulation',
      'Supports respiratory health',
      'Promotes deep relaxation',
    ],
  },
  {
    slug: 'electro-acupuncture',
    title: 'Electro-Acupuncture',
    shortDescription:
      'A gentle, low-frequency current delivered through acupuncture needles for amplified results.',
    longDescription:
      'Electro-acupuncture connects two acupuncture needles to a small device that passes a mild, adjustable current between them. It is particularly effective for chronic pain, nerve-related conditions, and post-injury rehabilitation, and it is always tuned to the patient’s comfort.',
    benefits: [
      'Chronic and stubborn pain',
      'Bell’s palsy and paralysis support',
      'Post-injury and post-surgical recovery',
      'Nerve and muscle re-education',
    ],
  },
  {
    slug: 'moxibustion',
    title: 'Moxibustion & Magic Lamp',
    shortDescription:
      'Warming therapy using mugwort and infrared light to nourish qi and warm cold patterns.',
    longDescription:
      'Moxibustion uses gentle, focused warmth from burning mugwort (moxa) over specific points, while the TDP "magic lamp" provides deep, mineral-rich infrared heat. Both are used to warm cold patterns, nourish deficiency, and amplify the effects of an acupuncture session.',
    benefits: [
      'Warms cold conditions',
      'Supports women’s health',
      'Eases menstrual discomfort',
      'Soothing and grounding',
    ],
  },
]
