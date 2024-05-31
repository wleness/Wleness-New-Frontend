import {
  faFacebookSquare,
  faLinkedin,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faClipboardList,
  faGlobe,
  faHome,
  faLocationDot,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  JoinUsCampusAmbassador,
  JoinUsInternship,
  JoinUsPsychiatrist,
  JoinUsTherapist,
} from "@public";
import {
  ABOUT_US,
  ADHD,
  ALL_EXPERTS,
  ANGER_ISSUES,
  ANXIETY,
  BIPOLAR_DISORDER,
  BRAIN_EXERCISE,
  CAREER,
  CONDUCT_DISORDER,
  CONTACT_US,
  CORPORATE_WELLBEING,
  COUPLES_THERAPY,
  DEPRESSION,
  EXECUTIVE_COACHING,
  FAQ,
  INTERNSHIP,
  LGBTQ,
  LIFESTYLE_COACHING,
  MEDITATION,
  MUSICAL_HEALING,
  ODD,
  PANIC_ATTACKS,
  PARANOIA,
  PSYCHIATRIST_JOIN,
  SADHNA,
  STRESS,
  THERAPIST_JOIN,
  THERAPY,
  YOGA,
} from "./urls";

// ================= Navigation Bar =================
// Services sub pages
export const serviceMenuPages = [
  {
    name: "Therapy",
    slug: THERAPY,
    subPages: [
      ["Couples Therapy", COUPLES_THERAPY],
      ["Stress", STRESS],
      ["Depression", DEPRESSION],
      ["Anxiety", ANXIETY],
      ["Anger", ANGER_ISSUES],
      ["Panic Attack", PANIC_ATTACKS],
      ["Bipolar Disorder", BIPOLAR_DISORDER],
      ["LGBTQ", LGBTQ],
      ["ADHD", ADHD],
      ["ODD", ODD],
      ["Paranoia", PARANOIA],
      ["Conduct Disorder", CONDUCT_DISORDER],
    ],
  },
  {
    name: "Yoga",
    slug: YOGA,
  },
  {
    name: "Lifestyle & Mindulness Coaching",
    slug: LIFESTYLE_COACHING,
  },
  {
    name: "Executive Coaching",
    slug: EXECUTIVE_COACHING,
  },
  {
    name: "Corporate Wellbeing",
    slug: CORPORATE_WELLBEING,
  },
  {
    name: "Music Healing",
    slug: MUSICAL_HEALING,
  },
  {
    name: "Meditation",
    slug: MEDITATION,
  },
];

// Activities sub pages
export const activitiesMenuPages = [
  {
    name: "Yoga",
    slug: YOGA,
  },
  {
    name: "Meditation",
    slug: MEDITATION,
  },
  {
    name: "Sadhna",
    slug: SADHNA,
  },
  {
    name: "Brain Exercise",
    slug: BRAIN_EXERCISE,
  },
];

// Menu Pages
export const seldCareSubpages = [
  {
    name: "Selfcare Dashbaord",
    slug: "/user/dashboard",
  },
  {
    name: "Brain Exercise",
    slug: "/activities/brain-exercise",
  },
  {
    name: "Sadhna",
    slug: "/activities/sadhna",
  },
];

// Menu Pages
export const resourcesSubpages = [
  {
    name: "Blogs",
    slug: "/blogs",
  },
  // {
  //   name: "Videos",
  //   slug: "/videos",
  // },
  {
    name: "Community",
    slug: "/community",
  },
];

export const joinUsList = [
  {
    image: JoinUsTherapist,
    name: "Therapist",
    slug: "/join-therapist",
  },
  {
    image: JoinUsPsychiatrist,
    name: "Psychiatrist",
    slug: "/join-psychiatrist",
  },
  {
    image: JoinUsInternship,
    name: "Internship",
    slug: "/internship",
  },
  {
    image: JoinUsCampusAmbassador,
    name: "Campus Ambassador",
    slug: "/campus-ambassador",
  },
];

// ================= Footer Links =================
// Footer - Location
export const footerLocation = [
  [
    "Spring House, Plot 2, Sec 43, Golf Course Road, Gurgaon, 122002",
    "",
    faLocationDot,
  ],
  ["www.wleness.com", "https://wleness.com/", faGlobe],
  ["hello@wleness.com", "mailto:hello@wleness.com", faEnvelope],
  ["+91 9147047488", "tel:+919147047488", faPhone],
];

// Footer - About Wleness
export const footerAboutWleness = [
  ["About Us", ABOUT_US],
  ["Contact Us", CONTACT_US],
  ["Career", CAREER],
  ["Join as Psychiatrist", PSYCHIATRIST_JOIN],
  ["Join as Therapist", THERAPIST_JOIN],
  ["FAQs", FAQ],
];

// Footer - Our Services
export const footerOurServices = [
  ["Therapy", THERAPY],
  ["Music Healing", MUSICAL_HEALING],
  ["Executive Coaching", EXECUTIVE_COACHING],
  ["Corporate Wellbeing", CORPORATE_WELLBEING],
  ["Lifestyle Coaching", LIFESTYLE_COACHING],
  ["Internship", INTERNSHIP],
  ["Yoga", YOGA],
];

// Footer - Focus Areas
export const footerFocusAreas = [
  ["Couples Therapy", COUPLES_THERAPY],
  ["Stress", STRESS],
  ["Depression", DEPRESSION],
  ["Anxiety", ANXIETY],
  ["Anger Issues", ANGER_ISSUES],
  ["Panic Attack", PANIC_ATTACKS],
  ["Bipolar Disorder", BIPOLAR_DISORDER],
  // ["LGBTQ", "/therapy/lgbtq"],
  // ["ADHD", "/therapy/adhd"],
  // ["ODD", "/therapy/odd"],
  // ["Paranoia", "/therapy/paranoia"],
  // ["Conduct Disorder", "/therapy/conduct-disorder"],
];

// Footer - Useful Links
export const usefulLinks = [
  ["Online therapy services", THERAPY],
  ["Best online psychologist ", ALL_EXPERTS],
  ["Couple counseling", COUPLES_THERAPY],
  ["Music therapy", MUSICAL_HEALING],
  ["Best depression therapy ", DEPRESSION],
  ["Stress management ", STRESS],
  ["Anxiety management ", ANXIETY],
  ["Best family counseling in india", ""],
  ["Best online lifestyle coaching", LIFESTYLE_COACHING],
  ["Best executive coaching in india", EXECUTIVE_COACHING],
];

// Footer - Our Experts
export const footerOurExperts = [
  ["Therapists", ALL_EXPERTS],
  ["Psychiatrists", ""],
  ["Coaches", EXECUTIVE_COACHING],
];

// Footer social links
export const socialLinks = [
  [faSquareWhatsapp, "https://wa.me/919147047488"],
  [faSquareInstagram, "https://www.instagram.com/wleness/"],
  [faFacebookSquare, "http://facebook.com/profile.php?id=100094475627706"],
  [faSquareXTwitter, "http://twitter.com/wleness111"],
  [faLinkedin, "https://www.linkedin.com/company/wleness/"],
];
