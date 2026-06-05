import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "House Cleaning Solutions",
    tagline: "Your Home, Always Sparkling.",
    phone: "(602) 617-9951",
    phoneHref: "tel:+16026179951",
    email: "info@housecleaningsolutions.com",
    address: "2454 S Bernard, Mesa, AZ 85209",
    city: "Mesa",
    serviceAreas: ["Mesa", "Apache Junction", "Chandler", "Gilbert", "Gold Canyon", "San Tan Valley", "Queen Creek", "Scottsdale", "Tempe"],
    license: "Licensed & Insured",
    since: "2009",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "cleaning",
  },

  services: [
    { icon: "sparkles", title: "Deluxe Deep Cleaning", desc: "Experience a comprehensive clean that revitalizes every corner of your home.", urgent: false },
    { icon: "clock", title: "Recurring Cleaning Services", desc: "Maintain a consistently clean home with our flexible weekly, bi-weekly, or monthly cleaning schedules.", urgent: false },
    { icon: "truck", title: "Move In & Out Cleaning", desc: "Ensure a spotless transition with our thorough cleaning for moving in or out of your property.", urgent: false },
    { icon: "hammer", title: "Post-Construction Cleaning", desc: "We meticulously remove all dust and debris, transforming your renovated space into a pristine home.", urgent: false },
    { icon: "briefcase", title: "Home Office Cleaning", desc: "Keep your workspace tidy and productive with our specialized cleaning services for home offices.", urgent: false },
    { icon: "home", title: "Business/Commercial Cleaning", desc: "Provide a professional and hygienic environment for your employees and clients with our commercial cleaning.", urgent: false }
  ],

  testimonials: [
    { name: "Philip King", location: "Mesa, AZ", stars: 5, text: "We have used House Cleaning Solutions for over 8yrs. Virginia and her team are the BEST!! They do an exceptional job cleaning and are here when they say they will be here! If your scheduled cleaning day/time has to be adjusted they are very good on communicating said changes. As well, they are incredibly reliable and always leave our home looking immaculate. Worth every penny for the peace of mind!" },
    { name: "Constance Byrnes", location: "Chandler, AZ", stars: 5, text: "I've been using this service for over a year now and am thrilled every other week with the job they do. Polite, on time, reliable and dependable - I've never found one thing they didn't clean well. Worth every penny for the consistent quality and excellent communication." },
    { name: "Megan Woodruff", location: "Gilbert, AZ", stars: 5, text: "My house looks incredible!! I was blown away at how well they did. Amazing!! Thank you for making my home shine like new. The attention to detail was fantastic, and I couldn't be happier with the results. Truly a top-notch cleaning service!" }
  ],

  trustBadges: [
    "Licensed & Insured", "15+ Years Experience", "Satisfaction Guaranteed", "Complimentary Cleaning Plan", "5-Star Rated", "Eco-Friendly Products"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "sparkles", title: "Sparkling Clean Guarantee", desc: "We guarantee a spotless home every time, ensuring your complete satisfaction with our services." },
    { icon: "clock", title: "Fast, Efficient Service", desc: "Our team works quickly and thoroughly, delivering exceptional results without wasting your valuable time." },
    { icon: "dollar-sign", title: "Complimentary Quote", desc: "Get a free, no-obligation cleaning plan and quote tailored to your specific needs." },
    { icon: "award", title: "Experienced Professionals", desc: "Benefit from over 15 years of expertise in providing top-tier house cleaning solutions." },
    { icon: "thumbs-up", title: "Reliable & Dependable", desc: "Count on us for consistent, on-time service that you can trust, every single visit." },
    { icon: "heart", title: "More Free Time", desc: "Reclaim your weekends and enjoy more time for family and hobbies while we handle the cleaning." }
  ],

  formServiceOptions: ["Deluxe Deep Cleaning", "Recurring Cleaning Services", "Move In & Out Cleaning", "Post-Construction Cleaning", "Home Office Cleaning", "Business/Commercial Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!