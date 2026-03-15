/**
 * MASSAGE STORE CONFIG
 * Fill this with info you find online (see ONLINE-RESEARCH-GUIDE.md).
 * All fields are optional; the page will hide empty sections.
 */

const STORE_CONFIG = {
  // Basics (from Yahoo Local, Google, BestProsInTown, etc.)
  name: "Royal Massage II",
  tagline: "Restore balance. Release tension. Renew yourself.",
  address: {
    street: "523 E St",
    city: "Marysville",
    state: "CA",
    zip: "95901",
  },
  phone: "(530) 645-7221",
  // Location hint (e.g. "Between 6th St and 5th St")
  crossStreets: "Between 6th St and 5th St",

  // Hours: string or array of "Day: Hours" strings
  hours: [
    "Saturday: 9 AM–9:30 PM",
    "Sunday: 9 AM–9:30 PM",
    "Monday: 9 AM–9:30 PM",
    "Tuesday: 9 AM–9:30 PM",
    "Wednesday: 9 AM–9:30 PM",
    "Thursday: 9 AM–9:30 PM",
    "Friday: 9 AM–9:30 PM",
  ],

  // Short description (often on Yahoo Local / Google listing)
  description: "Experience the ultimate relaxation and rejuvenation at Royal Massage II. Our skilled massage therapists specialize in Deep Tissue, Swedish, and Hot Stone Massage, tailoring each session to meet your unique needs. Whether you're looking to unwind, relieve muscle tension, or enhance your overall well-being, we provide a tranquil, professional environment to help you feel your best.",

  // Services: array of { name, description }
  services: [
    { name: "Swedish Massage", description: "Classic relaxation with long, flowing strokes to ease stress and improve circulation." },
    { name: "Deep Tissue", description: "Target chronic tension and knots with focused pressure for lasting relief." },
    { name: "Hot Stone", description: "Warm stones melt away tension and promote deep relaxation." },
    { name: "Sports & Recovery", description: "Support your active lifestyle with targeted work for muscles and recovery." },
  ],

  // Amenities (from BestProsInTown tips, etc.)
  amenities: ["Accepts credit cards", "Free Wi‑Fi", "Bike parking"],

  // Links to your listings (so visitors can see reviews/photos there)
  links: {
    // BestProsInTown: "https://www.bestprosintown.com/ca/marysville/royal-massage-/",
    // yelp: "https://www.yelp.com/biz/...",
    // google: "https://www.google.com/maps/search/...",
    bestProsInTown: "https://www.bestprosintown.com/ca/marysville/royal-massage-/",
    googleMaps: "https://www.google.com/maps/search/523+E+St,+Marysville,+CA+95901",
  },

  // Review count / rating (if you want to show "7 reviews on BestProsInTown")
  reviewCount: 7,
  reviewSiteName: "BestProsInTown",
  reviewSiteUrl: "https://www.bestprosintown.com/ca/marysville/royal-massage-/comments/",

  // Photo gallery: use real photos from listing sites or free stock (Unsplash/Pexels)
  // Option A: Link to external gallery (BestProsInTown has 16 photos)
  photosGalleryUrl: "https://www.bestprosintown.com/ca/marysville/royal-massage-/photos/",
  photosGalleryLabel: "View 16 photos on BestProsInTown",

  // Option B: Hero background image. Path to images folder (../images when template is in a subfolder). Leave empty for gradient-only.
  heroImageUrl: "../images/hero.jpg",

  // Option C: Grid of images on the page — paths to images folder
  galleryImages: [
    "../images/gallery-1.jpg",
    "../images/gallery-2.jpg",
    "../images/gallery-3.jpg",
  ],
};
