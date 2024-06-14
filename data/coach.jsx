import {
  bgExecutiveApproach,
  executiveCoach1,
  executiveCoach2,
  executiveCoach3,
  faq5,
  lifeCoaching1,
  lifeCoaching2,
  lifeCoaching3,
  lifeCoachingClarity,
  lifeCoachingConfidence,
  lifeCoachingHeader,
  lifeCoachingInterviewPreparation,
  lifeCoachingLeadershipDevelopment,
  lifeCoachingMotivation,
  lifeCoachingOvercomingfear,
  lifeCoachingPublicSpeaking,
  lifeCoachRidhi,
  lifeCoachRidhi2,
  lifeCoachRidhi3,
  lifeCoachShivani,
  lifeCoachShivani2,
  lifeCoachTanuja,
  lifeCoachTanuja2,
  lifeCoachTanuja3,
  rectangle3,
  therapyClient1,
  whyExecutiveCoaching1,
  whyExecutiveCoaching2,
  whyExecutiveCoaching3,
  whyExecutiveCoaching4,
  whyExecutiveCoaching5,
  whyExecutiveCoaching6,
} from "@public";
import {
  EC_COACH_ANDREA_BIANCHI,
  EC_COACH_ANJU_CHAWLA,
  EC_COACH_SALONI_GUPTA,
  LS_COACH_RIDHI_BAJAJ,
  LS_COACH_SHIVANI_NARANG,
  LS_COACH_TANUJA_CHOUDHURY,
} from "./urls";

// Lifestyle Coaching
export const lifestyle_coaching = {
  header: {
    title: "Unleash Your Inner Champion",
    subtitle: ["Through Wleness", "Lifestyle Coaching"],
    image: lifeCoachingHeader,
    desc: [
      "Do you crave higher growth and confidence in your life, business, and leadership journey?",
      "Discover the absolute confidence to find fulfillment and experience your desired joyous relationships.",
    ],
  },
  coaching: [
    {
      name: "One to One Power Coaching",
      image: lifeCoaching1,
      alt: "One to One Power Coaching - Wleness",
      desc: "Our transformative approach offers tailored strategies and unwavering personal and professional growth support. With a dedicated life coach, unlock your fullest potential and achieve your goals – advancing your career, enhancing relationships, or overall life improvement.",
    },
    {
      name: "Empowerment Exchange",
      image: lifeCoaching2,
      alt: "Empowerment Exchange - Wleness",
      desc: "Explore the advantages of our Group Life Coaching offering. By joining our community of dedicated individuals, you'll receive expert guidance in pursuing personal growth. Achieve clarity, reach your goals, and experience a more enriching life journey with the help of our experienced coaches.",
    },
    {
      name: "360-degree evaluation",
      image: lifeCoaching3,
      alt: "360-degree evaluation with Wleness",
      desc: "Our comprehensive approach examines all facets of your life, providing a clear roadmap for growth. Our expert coaches will assess your strengths, identify areas for improvement, & work with you to set & achieve meaningful goals. Elevate every aspect of your life.",
    },
    {
      name: "Public Speaking",
      image: lifeCoachingPublicSpeaking,
      alt: "Public Speaking Guidance from Wleness",
      desc: "Our expert coaches provide personalized guidance, practical strategies, and confidence-building exercises, empowering you to communicate with impact. Transform anxiety into assurance and captivate any audience with newfound fluency and charisma.",
    },
    {
      name: "Leadership Development",
      image: lifeCoachingLeadershipDevelopment,
      alt: "Leadership Development from Wleness",
      desc: "Our expert coaches offer personalized strategies, using your strengths and addressing areas for growth. Gain invaluable insights, refine decision-making, and foster effective communication. Upgrade your leadership presence, empowering you to inspire and lead with authenticity.",
    },
    {
      name: "Interview Preparation",
      image: lifeCoachingInterviewPreparation,
      alt: "Interview Preparation guidance from Wleness",
      desc: "Our comprehensive approach examines all facets of your life, providing a clear roadmap for growth. Our expert coaches will assess your strengths, identify areas for improvement, & work with you to set & achieve meaningful goals. Elevate every aspect of your life.",
    },
  ],
  results: {
    title: [
      {
        color: false,
        text: "The ",
      },
      {
        color: true,
        text: "Results ",
      },
      {
        color: false,
        text: "Say It All",
      },
    ],
    image: rectangle3,
    points: [
      [
        "51% ",
        "of companies with a strong coaching culture have higher revenues than others",
      ],
      [
        "80% ",
        "clients felt improved self-esteem and self-confidence after coaching.",
      ],
      [
        "68% ",
        "individuals who hired coaches could make back their investment. The median ROI is around 7x the investment.",
      ],
      [
        "",
        "Clients reported decreased anxiety levels and depression levels with improved workplace relationships",
        " 79%.",
      ],
      [
        "67% ",
        "clients felt improved work/life balance and wellness after coaching.",
      ],
    ],
  },
  forward: {
    title: [
      {
        color: false,
        text: "How Can ",
      },
      {
        color: true,
        text: "Life Coaching ",
      },
      {
        color: false,
        text: "Propel You Forward?",
      },
    ],
    desc: "Life coaching is your personalized journey to growth and fulfillment. It's like having a trusted partner who helps you navigate life's challenges and capitalize on your strengths.",
    list: [
      {
        title: "Clarity",
        image: lifeCoachingClarity,
        desc: "Life coaching clarifies your goals, dreams, and aspirations. It helps you see a clear path forward and set achievable objectives. ",
      },
      {
        title: "Motivation",
        desc: "Feeling stuck or lacking motivation? A life coach can reignite your passion and keep you accountable for your aspirations.",
        image: lifeCoachingMotivation,
      },
      {
        title: "Confidence",
        desc: "Fear of failure? It's a common roadblock. Life coaching equips you with the tools to face your fears & move forward boldly.",

        image: lifeCoachingConfidence,
      },
      {
        title: "Overcoming Fear",
        desc: "Fear of failure? It's a common roadblock. Life coaching provides the tools to face your fears & move forward boldly.",
        image: lifeCoachingOvercomingfear,
      },
    ],
  },
};

// Executive Coaching
export const executive_coaching = {
  coaching: [
    {
      title: "Revenue Growth",
      image: whyExecutiveCoaching1,
      desc: "Companies that invested in executive coaching saw an average revenue growth of 17% over those that didn't.",
    },
    {
      title: "Employee Engagement",
      desc: "Organizations with strong coaching cultures report employee engagement levels of over 60%.",
      image: whyExecutiveCoaching2,
    },
    {
      title: "Leadership Effectiveness",
      desc: "86% of the  organizations surveyed saw a positive return on investment (ROI) from coaching.",
      image: whyExecutiveCoaching3,
    },
    {
      title: "Cost Saving",
      desc: "Executives who underwent coaching experienced a 53% increase in productivity.",
      image: whyExecutiveCoaching4,
    },
    {
      title: "Productivity",
      desc: "Organizations that utilised coaching saw a cost savings of over $7 for every $1 invested.",
      image: whyExecutiveCoaching5,
    },
    {
      title: "Leadership Confidence",
      desc: "A substantial 63% of leaders who received coaching reported increased levels of confidence.",
      image: whyExecutiveCoaching6,
    },
  ],
  guide: {
    title: [
      {
        color: false,
        text: "Guiding  ",
      },
      {
        color: true,
        text: "Business And Leaders ",
      },
      {
        color: false,
        text: "To Success",
      },
    ],
    image: faq5,
    points: [
      {
        question: "Enhance Team Performance",
        paragraph: "Great leaders inspire great teams. Our coaching fosters ",
        answer:
          "Great leaders inspire great teams. Our coaching fosters transformative leadership qualities that trickle down, fostering a culture of collaboration, innovation, and excellence. Watch as your teams thrive under the guidance of leaders who know how to harness their full potential.",
      },
      {
        question: "Maximise ROI on Talent:",
        paragraph:
          "Offering a unified platform that simplifies access to all mental wellness needs, including self-care, peer support, therapy sessions, and psychiatric care.",
        answer:
          "Investing in executive coaching isn't just about today—it's an investment in your organisation's future. You're grooming a pipeline of visionary decision-makers by nurturing your current leaders. This strategic approach ensures a sustainable leadership succession plan, minimising disruptions and propelling your corporate journey forward.",
      },
      {
        question: "Create Impact at crucial moments:",
        paragraph:
          "Continuous updates to ensure the best outcomes in mental wellness.",
        answer:
          "Our Executive Coaching program is strategically tailored to deliver remarkable results at three critical junctures: when individuals aim to enhance their leadership abilities, seek to optimise specific performance areas and navigate transformative changes that require new skills and agile adaptation. We empower individuals to amplify their success and achieve their full potential in these critical scenarios.",
      },
    ],
  },
  points: {
    success_path: [
      "International Coaches",
      "60+ years of expertise combined",
      "ICF PCC accredited coaches",
      "Trusted by over 60k+ individuals & 70+ organizations",
    ],
    corporate_services: [
      {
        title: "1-1 Executive Coaching",
        desc: "Elevate your leadership prowess with personalised coaching. Discover your unique strengths, refine your decision-making abilities, and unlock your full leadership potential.",
      },
      {
        title: "360- Degree Executive Assessments",
        desc: "Unlock leadership excellence through data-driven executive assessments. Gain insights into strengths, growth areas, core values, and cultural alignment. Our portfolio includes tailored 360-degree feedback, Hogan Personality Assessments for leadership growth and selection, and Team Management Profiles for team evolution. Elevate talent decisions.",
      },
      {
        title: "Group Executive Coaching",
        desc: "Leadership evolution isn't uniform. Our customised coaching solutions are thoughtfully crafted to align with your team's distinct path, fostering remarkable collective growth. Experience the power of tailored guidance that propels your group's leadership to extraordinary success.",
      },
      {
        title: "Leadership Training",
        desc: "Mastery in leadership is a personalised journey, not a one-size-fits-all. Our meticulously crafted training programs are designed to align with your unique path, empowering you to achieve exceptional growth. Experience the transformative power of tailored guidance that elevates your leadership skills.",
      },
      {
        title: "Empowering Facilitation",
        desc: "Learning tailored to your pulse. Our bespoke solutions match your unique training needs. Melding impactful facilitation with engaging sessions, we empower leaders and their teams to master essential skills and cultivate cultural fluency.",
      },
    ],
    individual_services: [
      {
        title: "Leadership Coaching",
        desc: "Elevate your leadership prowess with personalised coaching. Discover your unique strengths, refine your decision-making abilities, and unlock your full leadership potential.",
      },
      {
        title: "Emotional Wellness Coaching",
        desc: "Prioritize your well-being and emotional resilience. Our coaching sessions offer tools and strategies to manage stress, build emotional intelligence, and foster a healthier work-life balance.",
      },
      {
        title: "Transition Guidance",
        desc: "Navigate career transitions with confidence. Our guidance provides a structured approach to planning and executing successful career moves, whether a promotion, a new role, or a career change.",
      },
      {
        title: "Mentorship for Professionals",
        desc: "Harness the wisdom of experienced mentors. Our mentorship program connects you with seasoned professionals who provide invaluable insights, guidance, and support to help you advance in your career.",
      },
      {
        title: "Relationship Coaching",
        desc: "Strengthen your personal and professional connections. Our coaching empowers you to enhance communication, resolve conflicts, and foster healthier, more fulfilling relationships in all aspects of your life.",
      },
    ],
  },
  approach: {
    image: bgExecutiveApproach,
    list: [
      {
        title: "Gain Insights",
        list: [
          "Unveil your strengths, values, and ambitions as a leader",
          "Align with ideal job roles and organisational culture",
          "Identify growth-hindering behaviors",
        ],
      },
      {
        title: "Gain the momentum",
        list: [
          "Master your leadership traits, set targeted goals",
          "Craft a roadmap for rapid career advancement",
          "Cultivate vital skills for everyday leadership triumphs",
          "Learn stress and anxiety management strategies",
        ],
      },
      {
        title: "Elevate Yourself",
        list: [
          "Amplify leadership impact with a 360-degree assessment",
          "Customized toolkit tailored to your requirements",
          "Elevate influence and credibility",
          "Attain holistic well-being and stress relief tools",
          "Excel in your current role or prepare for the next step",
        ],
      },
    ],
    bridge_title:
      "Let's Bridge the Gap Between You and Your Work Before Creating an Impact on the World",
    bridge_desc:
      "Embrace Executive Coaching that Harnesses Insights, Business Psychology, and Technology to Navigate Today's Challenges and Tomorrow's Triumphs.",
  },
};

// Coaches
export const coaches = [
  {
    name: "Ridhi Bajaj",
    category: "lifestyle",
    profession: "Lifestyle Coach",
    slug: LS_COACH_RIDHI_BAJAJ,
    alt: "Ridhi Bajaj - Lifestyle Coach - Wleness",
    displayPricing: true,
    image: lifeCoachRidhi,
    desc: "Ridhi Bajaj, a dedicated life coach committed to transforming lives, specialises in providing invaluable mental health support. With a passion for helping individuals overcome challenges and realise their full potential, Ridhi has become an inspiration for empowerment and positive change.",
    about: {
      title: "Ridhi Bajaj",
      desc: [
        "As an experienced expert, Ridhi focuses on helping her clients develop self-driven motivation, boost production speed, and increase self-confidence. She possesses a wonderful ability to free people from the chains of uncertainty, confusion, and unstable emotions, directing them toward a holistic lifestyle. With her experience in dealing with mood swings, blocking out bad thoughts, and removing dependency, Ridhi helps those facing challenges in their lives transition more easily.",
        "As a wellness coach, Ridhi has helped numerous people regain control of their mental and emotional well-being. Her method includes an in-depth understanding of mental health and emotional resiliency, going beyond traditional coaching.",
        "Ridhi's support of many female customers toward greatness and purpose demonstrates her dedication to women's empowerment. With her years of experience, Ridhi highlights the importance of having faith in oneself and that time is a changing constant in the confusing game of life. Ridhi Bajaj, who focuses on mental health support, is still a guiding force that helps people overcome challenges and discover long-lasting happiness and contentment.",
      ],
    },
    whyCoach: {
      title: "Coach Ridhi?",
      image: lifeCoachRidhi2,
      reason: [
        "Ridhi Bajaj, an internationally certified skills trainer, provides expert guidance in mastering the art of business communication and relationships. Boost confidence through enhanced presentation and public speaking skills. From interview preparation to conflict management, Ridhi has your back, ensuring you interact effectively and excel in various workplace scenarios.",
        "Ridhi Bajaj, a dedicated life coach, focuses on holistic wellness and meaningful living. She helps clients achieve short- and long-term goals with action plans prioritising emotional well-being. Ridhi, with a commitment to women's empowerment, provides support for mental and emotional balance, offering access to diverse health and wellness resources.",
      ],
    },
    expertise: {
      image: lifeCoachRidhi3,
      list: [
        "Expertise in providing significant improvements in confidence and self-esteem.",
        "Enhance interpersonal abilities that help customers reach their objectives and make life-improving changes.",
        "Expertise in improving communication and relationships.",
        "Helps accomplish both short- and long-term goals by developing trust, unleashing potential, committing to a plan, and taking action.",
        "Proficient in recognising and getting rid of limiting beliefs",
        "Creating success strategies and action plans",
      ],
    },
    certifications: [
      "Certified Empowerment Coach from ACSTH International Coach Certification.",
      "Certified Happiness Coach from ACSTH International Coach Certification.",
      "Recommendations from International Trainers Federation.",
      "Internationally certified Soft Skills trainer and Image Consultant.",
    ],
    reviews: [
      {
        name: "Sumit Kaur",
        profession: "Designer",
        image: therapyClient1,
        review:
          "Hey Ridhi , hope you are doing well. Just wanted to thank you for all your time and support throughout my transformation journey. I have emerged as a much better, stronger and condident person, and all of this would not have been possible without your guidance and support. I hope this will help me in leading a better way of life. Thanks again for your time and effort. I highly recommend Ridhi Bajaj to be anyone's guide who is aiming towards transforming his/her life.",
      },
    ],
    packages: [
      {
        title: "Image Consultancy",
        desc: "Image Consultancy is a personalized service where experts focus on improving an individual's ABC, that is,  Appearance, Behavior, and Communication. We offer guidance on grooming, body language, and communication skills to boost confidence, enhance career prospects, and build a positive personal brand. ",
        pricing: [
          {
            name: "1 Session",
            price: 4000,
          },
          {
            name: "6 Sessions",
            price: 12000,
            original_price: 24000,
          },
        ],
      },
      {
        title: "Soft Skills Improvement",
        desc: "From effective business communication and relationship interaction to life coaching and interview preparation, we cover it all. Boost your workplace communication, ace presentations and public speaking, manage conflicts, and master time management with our expert guidance. Elevate your career with our comprehensive support.",
        pricing: [
          {
            name: "1 Session",
            price: 4000,
          },
          {
            name: "6 Sessions",
            price: 15000,
            original_price: 30000,
          },
        ],
      },
      {
        title: "Life Coaching",
        desc: "Our service prioritizes your mental well-being to help you achieve goals with clarity. We guide individuals in forming a positive mindset, ensuring a strong foundation for pursuing and reaching their objectives. Let us support you on your journey towards success by nurturing your mental health first.",
        pricing: [
          {
            name: "6 Sessions",
            price: 12000,
          },
          {
            name: "12 Sessions",
            price: 24000,
            original_price: 48000,
          },
        ],
      },
    ],
  },
  {
    name: "Tanuja Choudhury",
    profession: "Lifestyle Coach",
    category: "lifestyle",
    alt: "Tanuja Choudhary - Lifestyle Coach - Wleness",
    displayPricing: true,
    slug: LS_COACH_TANUJA_CHOUDHURY,
    image: lifeCoachTanuja,
    desc: "With an incredible 23 years of corporate experience, Tanuja Choudhury is a highly certified industry expert and training professional with a wealth of information and insight in learning and development. Tanuja is well-known for her strong and clear communication style. She has a wealth of experience designing and executing in-person and virtual training programs for businesses and people in various sectors.",
    about: {
      title: "Tanuja Choudhury",
      desc: [
        "Her areas of experience are systematically handling skill development, establishing an excellence culture, and leading comprehensive learning and development management. Tanuja consistently concentrates on increasing individual and organisational efficiency and is skilled at analysing people's behaviour and regional market trends. Her primary training skills span a wide range, including conflict resolution, emotional intelligence, personality development and grooming.",
        "Tanuja's commitment to holistic wellness is evident in her work, which integrates mental clarity exercises and wellness coaching. She emphasises emotional well-being and mental health support, ensuring that her training goes beyond the conventional, promoting a holistic lifestyle.",
        "As an L&D expert and an active member of The Indus Entrepreneurs (TIE) and World Women Economic Forum (WWEF), the Bengal Chamber of Commerce (BCCI) and the West Bengal Council of Women Entrepreneurs (WICCI), Tanuja has contributed significantly to educational institutes and various organisations, conducting workshops on topics ranging from business etiquette and personality development to leadership and effective communication. With a holistic approach to training and well-being, Tanuja Choudhury is a seasoned professional dedicated to fostering mental clarity, emotional well-being, and holistic wellness in the corporate world.",
      ],
    },
    whyCoach: {
      title: "Coach Tanuja?",
      image: lifeCoachTanuja2,
      reason: [
        "Tanuja Choudhury brings unmatched expertise in holistic wellness to the table. Her unique approach combines mental clarity exercises and wellness coaching, fostering emotional well-being and supporting mental health. Working with Tanuja ensures a complete understanding of a holistic lifestyle, providing individuals with the tools for overall well-being and resilience.",
        "Tanuja Choudhury offers a comprehensive approach to personal and professional development. As a seasoned training and development specialist, she excels in strategic management, skill development, and creating a conducive environment for enhanced productivity. Working with Tanuja means tapping into the wisdom of an experienced professional dedicated to individual growth and organisational excellence.",
      ],
    },
    expertise: {
      image: lifeCoachTanuja3,
      list: [
        "Twenty-three years of corporate expertise in Learning and Development leadership.",
        "Plans and implements onsite and remote training programs across diverse industries.",
        "Clear and authoritative communicator specialising in personality development.",
        "Analyses behaviour and market trends, focusing on performance improvement.",
        "Proven track record in training needs analysis, aligning with strategic objectives.",
        "Conducts workshops for diverse organisations, showcasing adaptability.",
        "Experience in corporate service management, specialising in digital transformation.",
      ],
    },
    certifications: [
      "Certified by Dale Carnegie in Action Oriented Leadership Program.",
      "Harvard Training certifications on various L&D Topics ",
      "Certificate in General Management from XLRI, Jamshedpur.",
      "Post Graduate Diploma in Information Technology from Indian Institute of Technology, Kharagpur.",
    ],
    packages: [
      {
        title: "Image Consultancy",
        desc: "Image Consultancy is a personalized service where experts focus on improving an individual's ABC, that is,  Appearance, Behavior, and Communication. We offer guidance on grooming, body language, and communication skills to boost confidence, enhance career prospects, and build a positive personal brand. ",
        pricing: [
          {
            name: "1 Session",
            price: 2000,
          },
          {
            name: "6 Sessions",
            price: 6000,
            original_price: 12000,
          },
        ],
      },
      {
        title: "Soft Skills Improvement",
        desc: "From effective business communication and relationship interaction to life coaching and interview preparation, we cover it all. Boost your workplace communication, ace presentations and public speaking, manage conflicts, and master time management with our expert guidance. Elevate your career with our comprehensive support.",
        pricing: [
          {
            name: "1 Session",
            price: 2000,
          },
          {
            name: "6 Sessions",
            price: 6000,
            original_price: 12000,
          },
        ],
      },
      {
        title: "Life Coaching",
        desc: "Our service prioritizes your mental well-being to help you achieve goals with clarity. We guide individuals in forming a positive mindset, ensuring a strong foundation for pursuing and reaching their objectives. Let us support you on your journey towards success by nurturing your mental health first.",
        pricing: [
          {
            name: "6 Sessions",
            price: 10000,
          },
          {
            name: "12 Sessions",
            price: 18000,
            original_price: 20000,
          },
        ],
      },
    ],
  },
  // {
  //   name: "Shivani Narang",
  //   category: "lifestyle",
  //   profession: "Mindfulness Coach",
  //   alt: "Shivani Narang - Lifestyle Coach - Wleness",
  //   displayPricing: true,
  //   slug: LS_COACH_SHIVANI_NARANG,
  //   image: lifeCoachShivani,
  //   desc: "Shivani Narang is a Mental Wellness Coach who helps individuals and organizations improve their mental health using simple and effective strategies. Having conducted over 200 sessions / workshops over 75 themes  and equipped with certifications in mindfulness and meditation, Shivani guides individuals in discovering inner balance and unlocking their full potential.",
  //   about: {
  //     title: "Shivani Narang",
  //     desc: [
  //       "Through her 5-step process, including reflection, challenging beliefs, unlearning, finding authenticity, and learning new strategies, Shivani empowers clients to make better decisions, unleash creativity, foster meaningful relationships, find joy and purpose, and become their own biggest supporters.",
  //       "As the Founder of Healing Together (Meditative Buddha LLP), Shivani enhances employee wellness by introducing mindfulness tools, facilitating discussions on important wellness topics, providing safe spaces for individuals to share challenges, and offering practical tips and techniques to improve overall well-being. Additionally, she conducts workshops and provides one-on-one coaching to help clients navigate difficult situations and achieve personal growth.",
  //       "Shivani has worked with clients like Great Place to Work, Cult Fit, Unilever, Loop Health, Howden Insurance and many more, where she incorporated mindfulness practices and improved the wellness of their employees",
  //     ],
  //   },
  //   whyCoach: {
  //     title: "Coach Shivani?",
  //     image: lifeCoachShivani2,
  //     reason: [
  //       "Working with Shivani Narang offers a straightforward approach to improving mental wellness. With her expertise as a Mental Wellness Coach and certifications in mindfulness and meditation, Shivani provides practical strategies for achieving inner balance and personal growth.",
  //       "Through her guidance, individuals and organizations can expect to make better decisions, enhance creativity, foster meaningful relationships, find joy and purpose, and receive personalized support to navigate challenges and improve overall well-being.",
  //     ],
  //   },
  //   expertise: {
  //     image: lifeCoachShivani2,
  //     list: [
  //       "Certified in mindfulness and meditation",
  //       "Specializes in guiding individuals and organizations towards inner balance",
  //       "Creator of a 5-step process for personal growth",
  //       "Helps individuals move from confusion to clarity",
  //       "Facilitates discussions on important wellness topics",
  //       "Provides practical tools and tips to improve well-being",
  //       "Helps clients navigate personal challenges to improve self-worth, purpose and joy",
  //       "Offers one-on-one coaching for navigating challenging situations",
  //     ],
  //   },
  //   certifications: [
  //     "Diploma in coaching from Upskillist",
  //     "Certification in Mindfulness and Well-being from Rice University ",
  //     "Certified Mindfulness Meditation Teacher from Radical Compassion Institute",
  //     "Certification in Introduction to Psychology from Yale University",
  //     "Certification in Psychological First Aid from Johns Hopkins University ",
  //   ],
  //   packages: [
  //     {
  //       title: "Image Consultancy",
  //       desc: "Image Consultancy is a personalized service where experts focus on improving an individual's ABC, that is,  Appearance, Behavior, and Communication. We offer guidance on grooming, body language, and communication skills to boost confidence, enhance career prospects, and build a positive personal brand. ",
  //       pricing: [
  //         {
  //           name: "1 Session",
  //           price: 2000,
  //         },
  //         {
  //           name: "6 Sessions",
  //           price: 6000,
  //           original_price: 12000,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Soft Skills Improvement",
  //       desc: "From effective business communication and relationship interaction to life coaching and interview preparation, we cover it all. Boost your workplace communication, ace presentations and public speaking, manage conflicts, and master time management with our expert guidance. Elevate your career with our comprehensive support.",
  //       pricing: [
  //         {
  //           name: "1 Session",
  //           price: 2000,
  //         },
  //         {
  //           name: "6 Sessions",
  //           price: 6000,
  //           original_price: 12000,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Life Coaching",
  //       desc: "Our service prioritizes your mental well-being to help you achieve goals with clarity. We guide individuals in forming a positive mindset, ensuring a strong foundation for pursuing and reaching their objectives. Let us support you on your journey towards success by nurturing your mental health first.",
  //       pricing: [
  //         {
  //           name: "6 Sessions",
  //           price: 10000,
  //         },
  //         {
  //           name: "12 Sessions",
  //           price: 18000,
  //           original_price: 20000,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Saloni Gupta",
    profession: "Executive Coach",
    category: "executive",
    slug: EC_COACH_SALONI_GUPTA,
    image: executiveCoach1,
    alt: "Saloni Gupta, Executive Coach Certified by ICF - Wleness",
  },
  {
    name: "Dr. Anju Chawla",
    profession: "Coach & Speaker",
    category: "executive",
    slug: EC_COACH_ANJU_CHAWLA,
    image: executiveCoach2,
    alt: "Dr. Anju Chawla, Coach & Speaker, Certified by ICF - Wleness",
  },
  {
    name: "Andrea Bianchi",
    profession: "Executive Coach",
    category: "executive",
    slug: EC_COACH_ANDREA_BIANCHI,
    image: executiveCoach3,
    alt: "Andrea Bianchi, Executive Coach, Certified by ICF - Wleness",
  },
];
