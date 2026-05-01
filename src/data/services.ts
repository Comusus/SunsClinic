import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'acupuncture',
    title: 'Acupuncture',
    shortDescription:
      'Fine, sterile needles placed at specific points to restore the natural flow of qi and blood.',
    longDescription:
      'Acupuncture is one of the oldest and most widely practiced forms of medicine. By stimulating precise points along the body, treatment supports the nervous system, reduces inflammation, and helps restore balance for a wide range of conditions.',
    benefits: [
      'Pain relief and recovery',
      'Stress, anxiety, and sleep support',
      'Digestive and immune health',
      'Hormonal balance and fertility',
    ],
  },
  {
    slug: 'herbal-medicine',
    title: 'Herbal Medicine',
    shortDescription:
      'Custom Chinese herbal formulas tailored to your individual constitution and concerns.',
    longDescription:
      'Each herbal formula is carefully composed for the patient in front of us. Drawing on thousands of years of recorded tradition and a modern understanding of pharmacology, we use safe, high-quality herbs to support healing between sessions.',
    benefits: [
      'Personalized formulas',
      'Supports chronic and acute concerns',
      'Granules, raw herbs, or capsules',
      'Continuous adjustment as you progress',
    ],
  },
  {
    slug: 'cupping',
    title: 'Cupping Therapy',
    shortDescription:
      'Gentle suction to release tight fascia, improve circulation, and ease muscle tension.',
    longDescription:
      'Cupping uses warmed glass or silicone cups to lift the soft tissue, drawing fresh blood to the area and releasing stagnation. It pairs well with acupuncture for stubborn tightness, post-exercise soreness, and respiratory support.',
    benefits: [
      'Relieves muscular tension',
      'Improves local circulation',
      'Supports respiratory health',
      'Promotes deep relaxation',
    ],
  },
  {
    slug: 'moxibustion',
    title: 'Moxibustion',
    shortDescription:
      'Warming therapy using mugwort to nourish qi and warm cold patterns in the body.',
    longDescription:
      'Moxibustion uses gentle, focused warmth from burning mugwort (moxa) over specific points. It is especially helpful for cold, deficient, and chronic patterns and is often combined with acupuncture during a session.',
    benefits: [
      'Warms cold conditions',
      'Supports women’s health',
      'Nourishes deficient patterns',
      'Soothing and grounding',
    ],
  },
  {
    slug: 'tui-na',
    title: 'Tui Na & Bodywork',
    shortDescription:
      'Therapeutic Chinese bodywork combining acupressure, stretching, and joint mobilization.',
    longDescription:
      'Tui na is the manual-therapy branch of Chinese medicine. It works on the same channels as acupuncture but uses skilled hands instead of needles, making it a great option for sensitive patients or musculoskeletal complaints.',
    benefits: [
      'Effective for musculoskeletal pain',
      'Needle-free option',
      'Releases adhesions and tension',
      'Suitable for all ages',
    ],
  },
  {
    slug: 'wellness-consultations',
    title: 'Wellness Consultations',
    shortDescription:
      'Personalized lifestyle, diet, and self-care guidance grounded in Chinese medicine.',
    longDescription:
      'Healing happens between visits as much as during them. We offer thoughtful guidance around food, movement, sleep, and seasonal living so the work we do together carries through to your everyday life.',
    benefits: [
      'Diet and nutrition guidance',
      'Seasonal lifestyle adjustments',
      'Stress and sleep strategies',
      'Whole-person care',
    ],
  },
]
