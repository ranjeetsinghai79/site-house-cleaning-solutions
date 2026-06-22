import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "House Cleaning Solutions",
    tagline: "Sparkling Clean. Every Single Time.",
    phone: "(602) 617-9951",
    phoneHref: "tel:+16026179951",
    email: "info@housecleaningsolutions.com",
    address: "2454 S Bernard, Mesa, AZ 85209",
    city: "Mesa",
    serviceAreas: ["Mesa", "Apache Junction", "Chandler", "Gilbert", "Gold Canyon", "San Tan Valley", "Queen Creek", "Scottsdale", "Tempe"],
    license: "Licensed & Insured",
    since: "2008",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "cleaning",
  },

  services: [
    { icon: "sparkles", title: "Deluxe Deep Cleaning", desc: "Thorough cleaning for a truly refreshed home, tackling grime and dust in every corner.", urgent: false },
    { icon: "clock", title: "Recurring Cleaning Services", desc: "Maintain a consistently clean home with scheduled visits tailored to your needs.", urgent: false },
    { icon: "truck", title: "Move In & Out Cleaning", desc: "Ensure a spotless transition with comprehensive cleaning for your new or old home.", urgent: false },
    { icon: "hammer", title: "Post-Construction Cleaning", desc: "Remove all traces of construction, leaving your newly built or renovated space pristine.", urgent: false },
    { icon: "briefcase", title: "Home Office Cleaning", desc: "Create a productive and tidy workspace with specialized cleaning for your home office.", urgent: false },
    { icon: "home", title: "Business/Commercial Cleaning", desc: "Professional cleaning services to keep your business environment immaculate and inviting.", urgent: false }
  ],

  testimonials: [
    { name: "Philip King", location: "Mesa, AZ", stars: 5, text: "We have used House Cleaning Solutions for over 8 years. Virginia and her team are the BEST! They do an exceptional job cleaning and are here when they say they will be here! If your scheduled cleaning day/time has to be adjusted, they are very good at communicating said changes. We truly appreciate their reliability and the consistent sparkle they bring to our home." },
    { name: "Constance Byrnes", location: "Chandler, AZ", stars: 5, text: "I've been using this service for over a year now and am thrilled every other week with the job they do. Polite, on time, reliable, and dependable – I've never found one thing they didn't clean well. It's absolutely worth every penny for the peace of mind and the consistently clean home." },
    { name: "Sarah L.", location: "Gilbert, AZ", stars: 5, text: "The Deluxe Deep Cleaning service transformed my home! The team was incredibly thorough, paying attention to details I would have missed. My house hasn't felt this fresh in years. The upfront pricing was clear, and the results exceeded my expectations. Highly recommend for anyone needing a serious clean!" }
  ],

  trustBadges: [
    "Never Scrub Again Guarantee", "Complimentary Cleaning Plan", "15+ Years Experience", "Licensed & Insured", "5-Star Rated", "VIP Recurring Access"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 1000, label: "Happy Homes", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "sparkles", title: "Sparkling Clean Guarantee", desc: "We promise a spotless home every time, or we make it right." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Get a complimentary cleaning plan and quote with no hidden fees." },
    { icon: "award", title: "Experienced Professionals", desc: "Benefit from our 15+ years of refined and polished cleaning methods." },
    { icon: "thumbs-up", title: "Fast, Efficient Service", desc: "Our team delivers honest, high-quality cleaning with remarkable speed." },
    { icon: "clock", title: "Reliable & On-Time", desc: "We arrive when expected, ensuring your schedule is respected." },
    { icon: "shield-check", title: "Licensed & Insured", desc: "Peace of mind knowing you're working with fully protected professionals." }
  ],

  formServiceOptions: ["Deluxe Deep Cleaning", "Recurring Cleaning Services", "Move In & Out Cleaning", "Post-Construction Cleaning", "Home Office Cleaning", "Business/ Commercial Cleaning Service"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!