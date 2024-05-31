import {
  faMusic,
  faUser,
  faUserGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  homeCommitmentIcon,
  homeCorporateImage,
  homeExecutiveCoachingImage,
  homeExperienceIcon,
  homeFacilitiesIcon,
  homeLifeCoaching,
  homeThearpy,
  issueAdhd,
  issueAnger,
  issueAnxiety,
  issueBiopolarDisorder,
  issueCd,
  issueDepression,
  issueEatingDisorder,
  issueLgbtq,
  issueOcd,
  issueOdd,
  issuePanicAttack,
  issueParanoia,
  issueParenting,
  issueRelationship,
  issueSchizophrenia,
  issueStress,
  logoIAF,
  logoISO,
  startUpIndiaLogo,
} from "@public";

export const home_service_banner = [
  {
    name: "Individual Counselling",
    description:
      "Get personalised plans from the best therapists and psychologists online to meet your unique needs.",
    slug: "/experts",
    icon: faUser,
  },
  {
    name: "Couple Counselling",
    description:
      "Enhancing relationships with emotionally focused therapy, one conversation at a time.",
    slug: "/services/couples-therapy",
    selected: true,
    icon: faUserGroup,
  },
  {
    name: "Family Counselling",
    description:
      "Overcome families issues with India's best therapist, improving communication for growth",
    slug: "/services/therapy",
    icon: faUsers,
  },
  {
    name: "Musical Healing",
    description:
      "Try music therapy to feel better emotionally and stay positive every day.",
    slug: "/services/music-healing",
    icon: faMusic,
  },
];

export const whyChooseUs = [
  {
    title: "Experience",
    image: homeExperienceIcon,
    desc: "Experience top therapists, the best online psychologists, coaches, and guides based on international standards for your health in the comfort of your home.",
    alt: "Experience Wleness",
  },
  {
    title: "Commitment",
    desc: "We provide personalised care from India's top counsellors per your needs at every step, from family counselling to behavioural therapy.",
    image: homeCommitmentIcon,
    alt: "The Wleness Commitment",
  },
  {
    title: "Facilities",
    desc: "Experience the convenience and comfort of state-of-the-art facilities anytime and anywhere at one platform for all your needs with Wleness.",
    image: homeFacilitiesIcon,
    alt: "Wleness Facilities",
  },
];

export const home_how_wleness_works = [
  {
    title: "Find Best Therapist in India",
    image: homeExperienceIcon,
    desc: "Explore different top therapist profiles to find the one who understands your concerns and can most emotionally support you.",
    alt: "Experience Wleness",
  },
  {
    title: "Book an Online Therapy Session",
    desc: "Meet your therapist from the comfort of your home online, and work together to achieve your goals and see the positive changes in your mental health.",
    image: homeCommitmentIcon,
    dark: true,
    alt: "The Wleness Commitment",
  },
  {
    title: "Facilities",
    desc: "Use our top facilities to make progress outside sessions with therapist-recommended self-care tools, community support, and more.",
    image: homeFacilitiesIcon,
    alt: "Wleness Facilities",
  },
];

export const home_services = [
  {
    title: ["Strengthen Mental Health", "and Wellness"],
    subtitle: "Therapy",
    image: homeThearpy,
    description:
      "Compassionate mental health support for your emotional healing and growth, just like a warm hug from your loved ones. Get the top therapists and counsellors near you—the best online consultations in India.",
    points: [
      "Guidance you can trust",
      "Personalised Mental Wellness",
      "Strategies to feel better",
      "Evidence-based approaches",
    ],
    button: {
      text: "Book Now",
      slug: "/services/therapy",
    },
    ltr: true,
  },
  {
    title: ["Discover Your ", "Best Self"],
    subtitle: "Lifestyle Coaching",
    image: homeLifeCoaching,
    description:
      "Transform your personal development with guidance and support through ICF-certified life coaching services. Find a life coach online at your fingertips—top life coaching guidance in India. Start your journey towards a healthier, happier life!",
    points: [
      "Goal oriented approach",
      "Customised Life Coach Strategies",
      "Positive thinking cultivation",
      "Skills for life success",
    ],
    button: {
      text: "Get Started",
      slug: "/life-coaching",
    },
    ltr: false,
  },
  {
    title: ["Lead with ", "Impact"],
    subtitle: "Executive Coaching",
    image: homeExecutiveCoachingImage,
    description:
      "Unlock your full potential and enhance your leadership abilities with personalised executive coaching. Get the best business and executive coaching from the comfort of your home. Start on a journey with certified leadership coaches towards growth and success!",
    points: [
      "Result-oriented leadership coaching",
      "Gain a solid executive presence",
      "Master time management",
      "Visible Career Progression",
    ],
    button: {
      text: "Get Started",
      slug: "/executive-coaching",
    },
    ltr: true,
  },
  {
    title: ["Get the best service for", " your Team!"],
    subtitle: "Corporate",
    image: homeCorporateImage,
    description:
      "Wleness provides the best employee health and well-being services for your team. Unlock increased productivity, job satisfaction, and outcomes. Associate with your company and get mental health support for all employees. Take your corporate well-being to the next level with Wleness",
    points: [
      "Best employee health and well-being",
      "Increased productivity",
      "Job Satisfaction",
      "Get mental health support",
    ],
    button: {
      text: "Get Started",
      slug: "/corporate-wellbeing",
    },
    ltr: false,
  },
];

export const therapies = [
  {
    name: "Stress",
    title: "Stress",
    image: issueStress,
    slug: "/therapy/stress",
  },
  {
    name: "Depression",
    title: "Depression",
    image: issueDepression,
    slug: "/therapy/depression",
  },
  {
    name: "Anxiety",
    title: "Anxiety",
    image: issueAnxiety,
    slug: "/therapy/anxiety",
  },
  {
    name: "Anger",
    title: "Anger",
    image: issueAnger,
    slug: "/therapy/anger",
  },
  {
    name: "Panic Attacks",
    title: "Panic Attacks",
    image: issuePanicAttack,
    slug: "/therapy/panic-attack",
  },
  {
    name: "Bipolar Disorder",
    title: "Bipolar Disorder",
    image: issueBiopolarDisorder,
    slug: "/therapy/bipolar-disorder",
  },
  {
    name: "LGBTQ",
    title: "LGBTQ",
    image: issueLgbtq,
    slug: "/therapy/lgbtq",
  },
  {
    name: "ADHD",
    title: "Attention deficit hyperactivity disorder",
    image: issueAdhd,
    slug: "/therapy/adhd",
  },
  {
    name: "ODD",
    title: "Oppositional defiant disorder",
    image: issueOdd,
    slug: "/therapy/odd",
  },
  {
    name: "Paranoia",
    title: "Paranoia",
    image: issueParanoia,
    slug: "/therapy/paranoia",
  },
  {
    name: "Conduct Disorder",
    title: "Conduct Disorder",
    image: issueCd,
    slug: "/therapy/conduct-disorder",
  },
  {
    name: "Relationship",
    title: "Relationship",
    image: issueRelationship,
    slug: "/therapy/relationship",
  },
  {
    name: "Eating Disorder",
    title: "Eating Disorder",
    image: issueEatingDisorder,
    slug: "/therapy/eating-disorder",
  },
  {
    name: "OCD",
    title: "Obsessive-compulsive disorder",
    image: issueOcd,
    slug: "/therapy/ocd",
  },
  {
    name: "Schizophrenia",
    title: "Schizophrenia",
    image: issueSchizophrenia,
    slug: "/therapy/schizophrenia",
  },
  {
    name: "Parenting",
    title: "Parenting",
    image: issueParenting,
    slug: "/therapy/parenting",
  },
];

export const homeCertified = [
  {
    title: "IAF",
    image: logoIAF,
    dark: false,
    description:
      "We are certified by the IAF. We meet the standards for excellence and quality in our services. You can trust that we're recognised for our expertise and commitment to high standards",
  },
  {
    title: "Startup India",
    image: startUpIndiaLogo,
    dark: true,
    description:
      "We're certified by Startup India. Our commitment to innovation and entrepreneurship confirms our dedication to driving growth and contributing to India's startup ecosystem.",
  },
  {
    title: "ISO",
    image: logoISO,
    dark: false,
    description:
      "We're ISO certified. We meet international standards for quality and efficiency in our operations. Our products or services meet customer requirements and regulatory standards.",
  },
];

export const homeFaqs = [
  {
    question: "What is Wleness?",
    answer:
      "Wleness is an inclusive online platform dedicated to promote mental health and wellness.",
  },
  {
    question: "What services does Wleness offer?",
    answer:
      "Wleness offers a wide range of services to support mental health, including online therapy sessions with licensed professionals, self-help resources, articles, guided meditation, exercises, and a supportive community forum at your fingertips. We prioritize providing world-class services and the well-being of our users.",
  },
  {
    question: "How can I get started with Wleness?",
    answer:
      "Visit Wleness.com and create an account. From there, you can explore the various resources and services on the platform. We guide you in selecting a therapist and schedule sessions based on your preferences. We offer a plethora of services to suit your needs.",
  },
  {
    question:
      "Is Wleness suitable for individuals with severe mental health conditions?",
    answer:
      "While all therapists on Wleness are licensed professionals with the necessary qualifications, it may not be suitable for severe mental health conditions or those in crisis. In such cases, we recommend immediate assistance from emergency services that provide more intensive and prompt support.",
  },
];
