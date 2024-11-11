import {
  faFacebookSquare,
  faLinkedin,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faLocationDot,
  faPhone,
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
  BLOGS,
  BRAIN_EXERCISE,
  CAREER,
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
  RELATIONSHIP,
  SADHNA,
  STRESS,
  THERAPIST_JOIN,
  THERAPY,
  YOGA,
} from "./urls";

// ================= Navigation Bar =================
export const services_subpages = [
  ["Relationship", RELATIONSHIP],
  ["Stress", STRESS],
  ["Depression", DEPRESSION],
  ["Anxiety", ANXIETY],
  ["Anger", ANGER_ISSUES],
  ["ADHD", ADHD],
  ["Panic Attack", PANIC_ATTACKS],
  ["LGBTQ", LGBTQ],
];

export const services_pages = [
  ["Therapy", THERAPY, services_subpages],
  ["Executive Coaching", EXECUTIVE_COACHING],
  ["Life Coaching", LIFESTYLE_COACHING],
  // ["YOGA", YOGA],
];

export const aboutus_subpages = [
  ["About Wleness", ABOUT_US],
  ["Contact Us", CONTACT_US],
  ["FAQs", FAQ],
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
    slug: BLOGS,
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

// Footer - Focus Areas
export const footer_assessment = [
  ["Am I stressed", ""],
  ["Am I Sad or Depressed?", ""],
  ["How am I sleeping?", ""],
  ["Am I Anxious?", ""],
];

// Footer - Useful Links
export const usefulLinks = [
  ["Online Therapy in India", THERAPY],
  ["Best Psychologist in India", ALL_EXPERTS],
  ["Counselling for Relationships", COUPLES_THERAPY],
  ["Music therapy", MUSICAL_HEALING],
  ["Counsellors for depression", DEPRESSION],
  ["Therapy for stress", STRESS],
  ["Anxiety management ", ANXIETY],
  ["Best family counseling in india", ""],
  ["Online life coaching", LIFESTYLE_COACHING],
  ["Leadership and Management skill", EXECUTIVE_COACHING],
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
