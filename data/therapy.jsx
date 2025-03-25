import {
    adhdHeader,
    angerHeader,
    anxietyHeader,
    bestTherapy,
    biopolarDisorderHeader,
    cdHeader,
    couplesTherapyHeader1,
    couplesTherapyHeader2,
    couplesTherapyHeader3,
    depressionHeader,
    eatingDisorderHeader,
    lgbtqHeader,
    ocdHeader,
    oddHeader,
    panicAttacksHeader,
    paranoiaHeader,
    parentingHeader,
    relationshipHeader,
    schizophreniaHeader,
    stressHeader,
    symptomsAdhd,
    symptomsAnger,
    symptomsAnxiety,
    symptomsBiopolarDisorder,
    symptomsCd,
    symptomsDepression,
    symptomsEatingDisorder,
    symptomsLgbtq,
    symptomsOcd,
    symptomsOdd,
    symptomsPanic,
    symptomsParanoia,
    symptomsParenting,
    symptomsRelationship,
    symptomsSchizophrenia,
    symptomsStress,
    therapyHeader,
    whyChooseTherapy1,
    whyChooseTherapy2,
    whyChooseTherapy3,
    whyChooseTherapy4,
} from "@public";
import {
    ADHD,
    ANGER_ISSUES,
    ANXIETY,
    BIPOLAR_DISORDER,
    CONDUCT_DISORDER,
    COUPLES_THERAPY,
    DEPRESSION,
    EATING_DISORDER,
    LGBTQ,
    OCD,
    ODD,
    PANIC_ATTACKS,
    PARANOIA,
    PARENTING,
    RELATIONSHIP,
    SCHIZOPHRENIA,
    STRESS,
    THERAPY,
} from "./urls";

export const TherapyData = {
    name: "Therapy",
    desc: "Unlock the incredible power of therapy to change your life. Feel supported as you overcome struggles, and find your inner strength. Get the best services like CBT (Cognitive Behavioural Therapy), DBT (Dialectic Behavioural Therapy), Applied Behavioural Analysis, and many more from the top psychologists in India.",
    slug: THERAPY,
    image: therapyHeader,
    bestTherapist: {
        heading: [
            {
                color: false,
                text: "Select the best ",
            },
            {
                color: true,
                text: "Therapist ",
            },
            {
                color: false,
                text: "Today",
            },
        ],
        featureImage: bestTherapy,
        features: [
            ["Online Therapy  ", "Anywhere, Anytime"],
            ["Best Therapist   ", "from all over India"],
            ["Most Affordable ", "from the comfort of your home"],
            ["Anonymous Online   ", "Consultation of your comfort"],
        ],
        startBtn: ["Start the therapy", "/issues"],
    },
    whyChoose: [
        {
            title: "Emotional Support",
            desc: "At Wleness Therapy, we're here to be your rock through every high and low. Get the top therapist's support from the comfort of your home.",
            image: whyChooseTherapy1,
        },
        {
            title: "Problem Solving",
            desc: "Let the best counselors guide you through your challenges with practical solutions breaking down obstacles into manageable steps.",
            image: whyChooseTherapy2,
        },
        {
            title: "Relationships",
            desc: " Get quality family and couple counseling with our therapists online to build trust and healthy conversations to better relationships.",
            image: whyChooseTherapy3,
        },
        {
            title: "Mental Wellness",
            desc: "At Wleness, nurture your well being. Our top therapists will help unlock your inner strength and find balance to live a positive life.",
            image: whyChooseTherapy4,
        },
    ],
};

const therapy_doctors = {
    heading: [
        {
            color: false,
            text: "Get the support of ",
        },
        {
            color: true,
            text: " India's top therapists ",
        },
    ],
    desc: "Find the care of India's finest therapists, who are ready to guide you through your depression treatment with expertise. Get the best support for your journey towards inner peace and happiness. Reach out today and take a brave step towards a brighter tomorrow.",
};

export const therapy_details = {
    stress: {
        meta_title: "Stress Relief Counselling| Therapy for Stress",
        meta_desc:
            "Don't let stress control you. Wleness provides online therapy for stress.Our therapists use proven techniques to manage stress, improve coping skills & promote well-being.",
        slug: STRESS,
        header: {
            title: [
                {
                    color: false,
                    text: "Master the Art of ",
                },
                {
                    color: true,
                    text: "Stress Management",
                },
            ],
            desc: [
                "Stress is the body's response to external pressures or demands, triggering physical, emotional, and cognitive reactions that can affect well-being and performance.",
                "At wleness, we focus on effective stress busters and stress relief techniques tailored to your needs. We guide you towards a calmer, more balanced life through personalized strategies and support. ",
            ],
            image: stressHeader,
            alt: "Wleness - Master the Art of Stress Management",
        },
        symptoms: {
            highlight: "Stress Disorder symptoms ",
            alt: "Wleness - Here's How Generalized Stress Disorder symptoms May Appears",
            points: [
                "It can range from motivating challenges to overwhelming strain.",
                "Facing difficulty in concentrating",
                "Having trouble falling asleep",
                "Noticing muscle tension or constant headaches",
                "Either overeating or experiencing a loss of appetite",
                "Feeling easily irritable, frustrated or being short-tempered",
            ],
            image: symptomsStress,
        },
        approach: {
            title: ["The Wleness Way of", "Stress Management"],
            desc: "At Wellness Way, we embrace a holistic approach to stress management, nurturing your mind, body, and spirit. Our team of the best therapists is here to provide tailored support, empowering you to find peace and balance among life's challenges.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming stressors.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including stress.",
                "Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for stress relief. ",
            ],
        },
        doctors: therapy_doctors,
        quote: "Research published in the journal JAMA Internal Medicine indicates that practising stress reduction techniques can lead to a 38% reduction in the likelihood of developing anxiety disorders.",
    },
    depression: {
        meta_title:
            "Wleness- Find a Counsellor for Depression and Start Your Healing Journey",
        keywords: [
            "Counsellor for Depression",
            "online therapy for depression",
            "online depression counselling",
            "free depression counseling",
            "depression consultant",
        ],
        meta_description:
            "Access online depression counselling and free depression counseling services. Consult a depression consultant for professional support and guidance for better mental health.",
        slug: DEPRESSION,
        header: {
            title: [
                {
                    color: false,
                    text: "Your Guide to healing and Happiness to  ",
                },
                {
                    color: true,
                    text: "rise above Depression",
                },
            ],
            desc: [
                "Feeling sad is a common experience, but when it lasts longer, it may signal depression. From overwhelming sadness to a loss of interest in activities, the signs of depression can be different and challenging.",
                "At Wleness, our mental wellness services are designed to support you through this journey, offering guidance through the best psychiatrists, and strategies to regain happiness.",
            ],
            image: depressionHeader,
            alt: "Wleness - Explore Effective Strategies to Overcome Depression",
        },
        symptoms: {
            highlight: " Depression symptoms ",
            alt: "Wleness - Here's How Generalized Depression Symptoms May Appear",
            points: [
                "Facing Difficulty in concentrating",
                "Persistent Sadness and Feelings of worthlessness",
                "Loss of interest in once-loved activities",
                "Changes in appetite or weight",
                "Fatigue or low-energy",
                "Trouble falling asleep or staying awake",
            ],
            image: symptomsDepression,
        },
        approach: {
            title: ["The Wleness Way of ", "Depression Treatment"],
            desc: "At Wellness Way, we believe in a holistic approach to treating depression, focusing on your mental, emotional, and physical well-being. Our team of India’s top therapists and psychiatrists is dedicated to providing you with personalised care and support.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        doctors: therapy_doctors,
        quote: "Over 80% of people with depression can experience significant improvement through therapy, medication, or a combination of both",
    },
    "panic-attack": {
        meta_title: "Book mental health expert for Panic Attack Treatment",
        keywords: [
            "Panic attack treatment",
            "online psychologist consultation",
            "Panic attack symptoms",
            "how to stop a panic attack",
            "consult a psychologist online",
            "Panic attack signs",
        ],
        meta_description:
            "Learn panic attack symptoms and how to stop a panic attack. Consult a psychologist online for support in managing panic attack signs and improving mental well-being.",
        slug: PANIC_ATTACKS,
        header: {
            title: [
                {
                    color: false,
                    text: "Empowering Strategies to Overcome ",
                },
                {
                    color: true,
                    text: "Panic Attacks",
                },
            ],
            desc: [
                "A panic attack is a sudden onset of intense fear or discomfort, accompanied by physical and psychological symptoms such as rapid heartbeat, shortness of breath, trembling, and a sense of impending doom.",
                "These attacks can be overwhelming and may last a few minutes to an hour.",
            ],
            image: panicAttacksHeader,
            alt: "Wleness - Empowering Strategies to Overcome Panic Attacks",
        },
        approach: {
            title: ["The Wleness Way of ", "Panic Attack Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive Panic Attack treatment program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " Panic Attack symptoms ",
            points: [
                "Rapid heartbeat or palpitations",
                "Shortness of breath",
                "Feeling dizzy or lightheaded",
                "Fear of losing control or going crazy",
                "Chest pain or discomfort",
                "Sweating and trembling",
            ],
            image: symptomsPanic,
            alt: "Wleness - Here's How Generalized Panic Attack Symptoms May Appear",
        },
        doctors: therapy_doctors,
        quote: "Panic attacks are more common than you might think, affecting approximately 2-3% of the global population at some point in their lives.",
    },
    anxiety: {
        meta_title:
            "Find Online Therapy for Anxiety with the Best Psychologists in India at wleness",
        keywords: [
            "",
            "Online therapy for anxiety",
            "Best psychologist in india",
            "Online anxiety counselling",
            "Anxiety counselling",
            "consult a psychologist online",
        ],
        meta_description:
            "Get expert online anxiety counselling services. Consult a psychologist online for professional support to manage anxiety and improve your mental health.",
        slug: ANXIETY,
        header: {
            title: [
                {
                    color: false,
                    text: "Discovering Effective Approaches to Conquer ",
                },
                {
                    color: true,
                    text: "Anxiety",
                },
            ],
            desc: [
                "Anxiety is a feeling of unease, worry, or fear, often accompanied by physical sensations like increased heart rate and tension.",
                "It is a natural stress response, but excessive or persistent anxiety can indicate an anxiety disorder.",
            ],
            image: anxietyHeader,
            alt: "Wleness - Discovering Effective Approaches to Conquer Anxiety",
        },
        approach: {
            title: ["The Wleness Way of", " Anxiety Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive anxiety treatment program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " Anxiety symptoms ",
            points: [
                "Excessive worry and apprehension about everyday events or situations.",
                "Avoidance of triggering problems or activities.",
                "Fatigue or difficulty concentrating due to racing thoughts.",
                "Physical symptoms include increased heart rate, sweating, trembling, or muscle tension.",
                "Restlessness, feeling on edge, or having difficulty relaxing.",
                "Sleep disturbances, such as difficulty falling asleep or staying asleep.",
            ],
            image: symptomsAnxiety,
            alt: "Wleness - Here's How Generalized Anxiety Symptoms May Appear",
        },
        doctors: therapy_doctors,
        quote: "Research published in the Journal of Consulting and Clinical Psychology demonstrates that therapy interventions for anxiety can lead to significant improvements in as little as 8 to 12 weeks.",
    },
    // ocd: {
    //   slug: OCD,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Discovering Effective Strategies to Overcome ",
    //       },
    //       {
    //         color: true,
    //         text: "OCD",
    //       },
    //     ],
    //     desc: [
    //       "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by persistent, distressing thoughts (obsessions) and repetitive behaviours or rituals (compulsions) performed to alleviate anxiety or discomfort.",
    //       "",
    //     ],
    //     image: ocdHeader,
    //   },
    //   approach: {
    //     title: ["The Wleness Way of", " OCD Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive ocd treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " OCD symptoms ",
    //     points: [
    //       "Intrusive, Distressing Thoughts",
    //       "Repetitive Rituals or Behaviors",
    //       "Fear of Contamination or Germs",
    //       "Need for Symmetry or Order",
    //       "Unwanted Taboo or Aggressive Thoughts",
    //       "Excessive Doubting and Checking",
    //     ],
    //     image: symptomsOcd,
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Effective treatments for OCD, such as Cognitive Behavioral Therapy (CBT) and medication, have success rates of around 70-80%. Seeking help increases your chances of achieving significant improvement.",
    // },
    // "bipolar-disorder": {
    //   slug: BIPOLAR_DISORDER,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Embrace Quality Care Navigating ",
    //       },
    //       {
    //         color: true,
    //         text: "Bipolar Disorder ",
    //       },
    //       {
    //         color: false,
    //         text: "with Support",
    //       },
    //     ],
    //     desc: [
    //       "Bipolar disorder is a mental health condition characterized by extreme mood swings, encompassing periods of elevated energy and mood (mania) and depressive episodes.",
    //       "These fluctuations can significantly impact daily functioning and well-being.",
    //     ],
    //     image: biopolarDisorderHeader,
    //     alt: "Wleness - Embrace Quality Care Navigating Bipolar Disorder with Support",
    //   },
    //   approach: {
    //     title: ["The Wleness Way of", " Bipolar Disorder Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive bipolar disorder treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " Bipolar Disorder symptoms ",
    //     points: [
    //       "Intense Euphoria and Energy",
    //       "Severe Irritability or Agitation",
    //       "Decreased Need for Sleep",
    //       "Changes in Appetite and Weight",
    //       "Grandiose Beliefs or Ideas",
    //       "Hopelessness and Fatigue",
    //     ],
    //     image: symptomsBiopolarDisorder,
    //     alt: "Wleness - Here's How Generalized Bipolar Disorder Symptoms May Appear",
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Up to 60% of individuals with bipolar disorder experience co-occurring substance abuse. Seeking help can address these complex challenges.",
    // },
    // schizophrenia: {
    //   slug: SCHIZOPHRENIA,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Navigate ",
    //       },
    //       {
    //         color: true,
    //         text: "Schizophrenia ",
    //       },
    //       {
    //         color: false,
    //         text: "with Quality Care",
    //       },
    //     ],
    //     desc: [
    //       "Schizophrenia is a chronic mental disorder characterized by a disconnection from reality, involving hallucinations, delusions, disorganized thinking, and impaired social functioning.",
    //       "It often requires comprehensive treatment and support.",
    //     ],
    //     image: schizophreniaHeader,
    //   },
    //   approach: {
    //     title: ["The Wleness Way of", " Schizophrenia Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive schizophrenia program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " Schizophrenia symptoms ",
    //     points: [
    //       "Hallucinations",
    //       "Impaired Social Functioning",
    //       "Disorganized Behavior",
    //       "Negative Symptoms",
    //       "Disorganized Speech",
    //       "Delusions",
    //     ],
    //     image: symptomsSchizophrenia,
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Many individuals with schizophrenia can achieve significant recovery, with studies indicating that about 20-30% complete remission of symptoms and improved psychosocial functioning over time.",
    // },
    // "eating-disorder": {
    //   slug: EATING_DISORDER,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Build Better Life with Right Treatment for ",
    //       },
    //       {
    //         color: true,
    //         text: "Eating Disorder",
    //       },
    //     ],
    //     desc: [
    //       "An eating disorder is a complex mental health condition characterized by persistent eating patterns and body image disturbances, often leading to severe physical and emotional consequences",
    //       "Seeking professional help is vital for effective treatment and recovery.",
    //     ],
    //     image: eatingDisorderHeader,
    //   },

    //   approach: {
    //     title: ["The Wleness Way of", " Eating Disorder Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive eating disorder treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " Eating Disorder symptoms ",
    //     points: [
    //       "Social Withdrawal and Isolation",
    //       "Obsession with Weight and Body Shape",
    //       "Restrictive Eating or Extreme Dieting",
    //       "Binge Eating and Loss of Control",
    //       "Compulsive Exercising",
    //       "Self-Induced Vomiting or Laxative Use",
    //     ],
    //     image: symptomsEatingDisorder,
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Continued treatment and post-treatment support reduce relapse rates, with studies indicating that relapse rates can be as low as 10% with ongoing care.",
    // },
    // paranoia: {
    //   slug: PARANOIA,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Overcome ",
    //       },
    //       {
    //         color: true,
    //         text: "Paranoia ",
    //       },
    //       {
    //         color: false,
    //         text: "with Quality Care",
    //       },
    //     ],
    //     desc: [
    //       "Paranoia is a mental health condition characterized by persistent, irrational beliefs of harm, suspicion, or persecution, often leading to mistrust and heightened vigilance in daily interactions.",
    //       "Seeking help is essential to address and manage these distressing thoughts.",
    //     ],
    //     image: paranoiaHeader,
    //     alt: "Wleness - Overcome Paranoia With Quality Care",
    //   },
    //   approach: {
    //     title: ["The Wleness Way of", " Paranoia Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive paranoia treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " Paranoia symptoms ",
    //     points: [
    //       "Social withdrawal due to fear.",
    //       "Persistent mistrust of others' intentions.",
    //       "The constant expectation of betrayal or harm.",
    //       "The firm false belief of being singled out for harm",
    //       "Interpreting innocent actions as threatening.",
    //       "Being excessively watchful and cautious.",
    //     ],
    //     image: symptomsParanoia,
    //     alt: "Wleness - Here's How Generalized Paranoia symptoms May Appear",
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Virtual therapy has demonstrated a 30-40% reduction in paranoia severity, showcasing the potential of technology-based treatments.",
    // },
    adhd: {
        meta_title: "Get ADHD Treatment, Counselling, and Medication for ADHD",
        keywords: [
            "adhd treatment",
            "counselling for adhd",
            "treatment for adhd medication",
            "what is adhd",
            "treatment for adhd in india",
            "adhd symptoms",
        ],
        meta_description:
            "Learn what ADHD is and explore treatment for ADHD, including medication options. Discover effective treatment for ADHD in India and recognize common ADHD symptoms.",
        slug: ADHD,
        header: {
            title: [
                {
                    color: false,
                    text: "Accessing ",
                },
                {
                    color: true,
                    text: "ADHD ",
                },
                {
                    color: false,
                    text: "Mental Health Support ",
                },
            ],
            desc: [
                "ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental disorder characterized by persistent inattention, hyperactivity, and impulsivity that can impact daily functioning and quality of life.",
                "Seeking appropriate help can lead to effective management and improved well-being.",
            ],
            image: adhdHeader,
            alt: "Wleness - Accessing ADHD Mental Health Support",
        },
        approach: {
            title: ["The Wleness Way of", " ADHD Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive ADHD treatment program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " ADHD symptoms ",
            points: [
                "Poor Time Management: Struggling to manage time effectively",
                "Inattention: Struggling to focus on tasks or details",
                "Hyperactivity: Being overly restless or constantly active",
                "Impulsivity: Acting without thinking about consequences",
                "Disorganization: Needs to be more efficient in organizing tasks or activities",
                "Forgetfulness: Frequently losing items and forgetting appointments",
            ],
            image: symptomsAdhd,
            alt: "Wleness - Here's How Generalized ADHD symptoms May Appear",
        },
        doctors: therapy_doctors,
        quote: "Approximately 70% of children diagnosed with ADHD encounter challenges in their academic journey, impacting both their educational advancement and prospects for the future",
    },
    // odd: {
    //   slug: ODD,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Empowering Individuals with ",
    //       },
    //       {
    //         color: true,
    //         text: "ODD ",
    //       },
    //       {
    //         color: true,
    //         text: "through Effective Treatment ",
    //       },
    //     ],
    //     desc: [
    //       "Oppositional Defiant Disorder (ODD) is a psychiatric disorder characterized by a persistent pattern of defiant, disobedient, and hostile behaviour toward authority figures, often causing significant impairment in social, academic, and occupational functioning.",
    //       "",
    //     ],
    //     image: oddHeader,
    //     alt: "Wleness - Empowering Individuals with ODD through Effective Treatment",
    //   },
    //   approach: {
    //     title: ["The Wleness Way of", " ODD Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive ODD treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " ODD symptoms ",
    //     points: [
    //       "Vindictiveness and seeking revenge when feeling wronged.",
    //       "Easily angered, resentful, or spiteful behavior.",
    //       "Blaming others for mistakes or misbehavior.",
    //       "Deliberate attempts to annoy or provoke others.",
    //       "Frequent arguments and conflicts with authority figures.",
    //       "Persistent defiance and refusal to comply with rules or requests.",
    //     ],
    //     image: symptomsOdd,
    //     alt: "Wleness - Here's How Generalized ODD symptoms May Appear",
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Approximately 70-80% of children with ODD also meet the criteria for another mental health disorder, such as ADHD or conduct disorder.",
    // },
    // "conduct-disorder": {
    //   slug: CONDUCT_DISORDER,
    //   header: {
    //     title: [
    //       {
    //         color: false,
    //         text: "Unlock Potential: Treat ",
    //       },
    //       {
    //         color: true,
    //         text: "Conduct Disorder ",
    //       },
    //       {
    //         color: false,
    //         text: "Effectively",
    //       },
    //     ],
    //     desc: [
    //       "Conduct Disorder (CD) is a psychiatric disorder characterized by persistent patterns of aggressive, antisocial behaviour that violates the rights of others and societal norms, often leading to significant impairment in social, academic, and occupational functionin",
    //       "",
    //     ],
    //     image: cdHeader,
    //     alt: "Wleness - Unlock Potential: Treat Conduct Disorder Effectively",
    //   },

    //   approach: {
    //     title: ["The Wleness Way of", " Conduct Disorder Management"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive conduct disorder treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " Conduct Disorder symptoms ",
    //     points: [
    //       "Aggression towards people and animals.",
    //       "Frequent bullying, intimidation, or physical fights.",
    //       "Destruction of property and vandalism.",
    //       "Deceitfulness, lying, and theft.",
    //       "Serious violations of rules and laws.",
    //       "Lack of empathy and disregard for the feelings and rights of others.",
    //     ],
    //     image: symptomsCd,
    //     alt: "Wleness - Here's How Generalized Conduct Disorder symptoms May Appear",
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Research indicates that individuals with CD are more likely to develop antisocial personality disorder in adulthood.",
    // },
    "anger-issues": {
        meta_title: "Get Effective Anger Management Therapy for Better Control",
        keywords: [
            "Anger management",
            "therapy for anger management",
            "anger management techniques",
            "therapists for anger management",
        ],
        meta_description:
            "Explore effective anger management techniques with expert therapists for anger management. Get professional support to control anger and improve emotional well-being.",
        slug: ANGER_ISSUES,
        header: {
            title: [
                {
                    color: false,
                    text: "Mastering ",
                },
                {
                    color: true,
                    text: "Anger: ",
                },
                {
                    color: false,
                    text: "A Key to Enhanced Mental Well-Being",
                },
            ],
            desc: [
                "Anger is a powerful emotion that, when not properly channeled, can significantly affect your overall mental well-being.",
                "",
            ],
            image: angerHeader,
            alt: "Wleness - Mastering Anger: A Key to Enhanced Mental Well-Being",
        },
        approach: {
            title: ["The Wleness Way of", " Anger Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive anger treatment program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " Anger symptoms ",
            points: [
                "Frequent Irritability: Getting easily annoyed or irritated over small matters regularly.",
                "Intense or Frequent Outbursts: Displaying explosive anger, which may involve shouting, screaming, or physical aggression.",
                "Difficulty Forgiving: Holding onto grudges and not letting go of past grievances.",
                "Physical Symptoms: Experiencing physical reactions such as increased heart rate, muscle tension, or clenched fists when angry.",
                "Impaired Relationships: Consistently having conflicts with loved ones, friends, or coworkers due to anger.",
                "Loss of Control: Feeling like you can't control your anger often leads to actions you regret later.",
            ],
            image: symptomsAnger,
            alt: "Wleness - Here's How Generalized Anger Symptoms May Appear",
        },
        doctors: therapy_doctors,
        quote: "Approximately 8% of adults, or about 18 million people, have reported experiencing frequent anger issues that significantly affect their daily lives, relationships, and overall well-being.",
    },
    relationship: {
        meta_title:
            "Get Expert advice from a Relationship Consultant Today at wleness",
        keywords: [
            "relationship consultant",
            "counselling for relationships",
            "Online couples counselling",
            "online relationship counselling",
            "Online couples therapy",
        ],
        meta_description:
            "Consult a relationship expert for counseling for relationships. Experience online relationship counselling and online couples therapy for improved communication and connection and better bonds.",
        slug: RELATIONSHIP,
        header: {
            title: [
                {
                    color: false,
                    text: "Navigating through ",
                },
                {
                    color: true,
                    text: "Relationships: ",
                },
                {
                    color: false,
                    text: "When Love Meets Mental Health",
                },
            ],
            desc: [
                "The intricate interplay between relationships and mental health is fundamental to human well-being. Our connections with others can serve as a source of strength, providing comfort and support during challenging times, yet they can also be a potential trigger for stress and emotional turmoil.",
                "",
            ],
            image: relationshipHeader,
        },
        approach: {
            title: ["The Wleness Way of", " Relationship Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive relationship improvement program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " Relationship challenges ",
            points: [
                "Dating Fatigue: Dating fatigue can be caused by overwhelming choices, and the time and energy investment required in the dating process.",
                "Overcoming heartbreak: Approximately 25% of individuals who go through a significant heartbreak experience symptoms of depression and anxiety",
                "Separation: Separation refers to two individuals or partners living apart, often following a relationship or marriage breakdown.",

                "Infertility: Infertility is the inability to conceive or carry a pregnancy to term after a year of regular unprotected intercourse.",
                "Infant Loss: Approximately 2.6 million stillbirths occur globally each year, highlighting the tragic reality of infant loss and the need for support and awareness.",
            ],
            image: symptomsRelationship,
        },
        doctors: therapy_doctors,
        quote: "According to a survey by Mind and Relate, 77% of people with a mental health problem surveyed actively tell their partners about their mental health, and only 5% of those people said their partners broke up with them when they heard about their condition.",
    },
    lgbtq: {
        meta_title:
            "Access LGBTQ Virtual Therapy for Support and Guidance Online",
        keywords: [
            "LGBTQ",
            "VIRTUAL THERAPY",
            "Therapy session",
            "Best Psychologist in India",
        ],
        meta_description:
            "Access LGBTQ therapy sessions with the best psychologist in India. Get professional support for mental well-being and embrace a safe, inclusive therapy experience.",
        slug: LGBTQ,
        header: {
            title: [
                {
                    color: false,
                    text: "Diverse Journeys, Shared Resilience: ",
                },
                {
                    color: true,
                    text: "LGBTQIA+ ",
                },
                {
                    color: false,
                    text: "Perspectives and Solutions",
                },
            ],
            desc: [
                "Mental health knows no boundaries, and neither does love. Exploring the intersection of LGBTQIA+ identities and mental well-being is an essential journey toward understanding the unique challenges and resilience of this diverse community.",
                "",
            ],
            image: lgbtqHeader,
            alt: "Wleness - Diverse Journeys, Shared Resilience: LGBTQIA+ Perspectives and Solutions",
        },
        approach: {
            title: ["The Wleness Way of", " LGBTQIA+ Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive stress treatment program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " LGBTQIA+ symptoms ",
            points: [
                "Higher Rates of Depression. In LGBTQIA+ individuals often experience higher rates of depression due to stigma and discrimination.",
                "Anxiety disorders are common, with many facing 'minority stress' due to societal prejudice.",
                "LGBTQIA+ youth are more likely to contemplate suicide, highlighting the urgent need for support.        ",
                "Transgender individuals may face gender dysphoria, discrimination, and mental health challenges.",
                "Family rejection can lead to profound mental health struggles among LGBTQIA+ youth.",
                "Limited access to LGBTQIA+-friendly mental health services can hinder well-being.",
            ],
            image: symptomsLgbtq,
            alt: "Wleness - Here's How Generalized LGBTQIA+ Symptoms May Appear",
        },
        doctors: therapy_doctors,
        quote: "LGBTQ+ individuals are approximately 2.5 times more likely to experience depression and anxiety compared to heterosexual individuals.",
    },
    // parenting: {
    //   slug: PARENTING,
    //   header: {
    //     title: [
    //       {
    //         color: true,
    //         text: "Parenting: ",
    //       },
    //       {
    //         color: false,
    //         text: " Nurturing both your's and your child's well being",
    //       },
    //     ],
    //     desc: [
    //       "Parenting is a profound journey filled with love and joy, but it also brings unique challenges. The connection between parenting and mental health is crucial, as it affects the well-being of both parents and children, shaping family dynamics.",
    //       "",
    //     ],
    //     image: parentingHeader,
    //   },
    //   approach: {
    //     title: ["The Wleness Way of", " Parenting"],
    //     desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive stress treatment program at the healthcare center, where relaxation and well-being intertwine.",
    //     approaches: [
    //       "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
    //       "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
    //       "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
    //     ],
    //   },
    //   symptoms: {
    //     highlight: " Parenting Challenges ",
    //     points: [
    //       "Postpartum Depression: Many new mothers experience postpartum depression, characterized by persistent feelings of sadness, exhaustion, and anxiety after giving birth.",
    //       "Parental Anxiety: Parents often grapple with anxiety, worrying about their children's safety, well-being, and future, which can impact their mental health.",
    //       "Parental Stress: The demands of parenting can lead to high levels of stress, affecting parents' mental well-being and potentially their parenting abilities.",
    //       "Burnout: Parental burnout, marked by emotional exhaustion and detachment from parenting responsibilities, can develop when the demands of parenting become overwhelming",
    //       "Guilt and Self-Doubt: Parents may experience feelings of guilt and self-doubt, wondering if they're doing enough or making the right decisions for their children.",
    //       "Children's Mental Health: Parents also face the challenge of supporting their children's mental health, addressing issues like anxiety, depression, or behavioral problems, which can affect the entire family's well-being.",
    //     ],
    //     image: symptomsParenting,
    //   },
    //   doctors: therapy_doctors,
    //   quote:
    //     "Research suggests that parental burnout is not uncommon. Studies have indicated that approximately 12-20% of parents experience symptoms consistent with burnout.",
    // },

    "bipolar-disorder": {
        slug: BIPOLAR_DISORDER,
        header: {
            title: [
                {
                    color: false,
                    text: "Embrace Quality Care Navigating ",
                },
                {
                    color: true,
                    text: "Bipolar Disorder ",
                },
                {
                    color: false,
                    text: "with Support",
                },
            ],
            desc: [
                "Bipolar disorder is a mental health condition characterized by extreme mood swings, encompassing periods of elevated energy and mood (mania) and depressive episodes.",
                "These fluctuations can significantly impact daily functioning and well-being.",
            ],
            image: biopolarDisorderHeader,
            alt: "Wleness - Embrace Quality Care Navigating Bipolar Disorder with Support",
        },
        approach: {
            title: ["The Wleness Way of", " Bipolar Disorder Management"],
            desc: "Indulge in a rejuvenating journey towards tranquillity with our comprehensive bipolar disorder treatment program at the healthcare center, where relaxation and well-being intertwine.",
            approaches: [
                "Talk to the best therapists online and get insights on coping strategies, gain valuable insights, and work towards overcoming depression.",
                "Get professional guidance and expertise in understanding and managing mental health challenges, including depression symptoms.",
                "The Wleness community opens doors to a supportive network of individuals where you'll find encouragement and valuable resources for motivation.",
            ],
        },
        symptoms: {
            highlight: " Bipolar Disorder symptoms ",
            points: [
                "Intense Euphoria and Energy",
                "Severe Irritability or Agitation",
                "Decreased Need for Sleep",
                "Changes in Appetite and Weight",
                "Grandiose Beliefs or Ideas",
                "Hopelessness and Fatigue",
            ],
            image: symptomsBiopolarDisorder,
            alt: "Wleness - Here's How Generalized Bipolar Disorder Symptoms May Appear",
        },
        doctors: therapy_doctors,
        quote: "Up to 60% of individuals with bipolar disorder experience co-occurring substance abuse. Seeking help can address these complex challenges.",
    },
};

// Couple Therapy Data
export const coupleTherapyData = {
    name: "Couples Therapy",
    slug: COUPLES_THERAPY,
    header: {
        title: [
            {
                color: false,
                text: "Build Stronger Relationships with Best ",
            },
            {
                color: true,
                text: " Couples Counselling",
            },
        ],
        desc: "Let's start on a journey of love and understanding with the best online relationship counselling at Wleness. We understand the importance of love and connection in your relationship. Find a safe space for you and your partner to get emotionally focused therapy and create a stronger bond. Let us guide you towards a happier and more fulfilling partnership.",
        images: [
            couplesTherapyHeader1,
            couplesTherapyHeader2,
            couplesTherapyHeader3,
        ],
    },
    help: {
        title: [
            {
                color: false,
                text: "Get the   ",
            },
            {
                color: true,
                text: "Wleness ",
            },
            {
                color: false,
                text: "Help for your Relationship",
            },
        ],
        list: [
            {
                title: "Dedicated experts team:",
                desc: "With Wleness, your relationship is in the hands of dedicated experts who genuinely care about your happiness and well-being. Get the best online couples counselling with the top counsellors.",
            },
            {
                title: "Tailored Approach:",
                desc: "Experience personalised care and guidance tailored to your relationship's needs, ensuring meaningful progress and growth. From marital relationship counselling to premarital counselling, get the best support today!",
            },
            {
                title: "Accessibility:",
                desc: "Wleness offers accessible support, making it easy for you and your partner to prioritise your relationship, no matter your schedule or location. Get the best online couples counselling at your home, at your time.",
            },
            {
                title: "Safe and Non-Judgmental Space:",
                desc: "Step into a safe, non-judgmental space at Wleness where you and your partner can freely express yourselves and work through challenges with understanding and empathy.",
            },
        ],
    },
    doctors: {
        heading: [
            {
                color: false,
                text: "Meet Our ",
            },
            {
                color: true,
                text: " Relationship Gurus",
            },
        ],
        desc: "Wleness provides quality therapy and couples counselling to all our clients. Get the best and most recommended online therapy and guidance packages with India's best counsellors for you and your loved ones. Connect your relationship with a trained and certified online psychologist and counsellor.",
    },
};

export const TherapyData2 = {
    title: "Why Wleness",
    whyChoose: [
        {
            title: "Emotional Support at Your Fingertips",
            desc: "Need a listening ear? Consult a psychologist online at Wleness Therapy. Our best mental health therapists near you are here to provide personalized support, ensuring your emotional well-being.",
            image: whyChooseTherapy1,
        },
        {
            title: "Problem Solving",
            desc: "Let the best psychologists in India at Wleness Therapy guide you through your challenges. We provide practical solutions and break down obstacles into manageable steps.",
            image: whyChooseTherapy2,
        },
        {
            title: "Relationships",
            desc: "Build trust, improve communication, and foster healthy conversations with our experienced online therapists. Get quality online couple counseling from the comfort of your home.",
            image: whyChooseTherapy3,
        },
        {
            title: "Mental Wellness",
            desc: "Get your inner strength and find balance with Wleness. Our top therapists offer best online psychologist consultations to help you live a positive life.",
            image: whyChooseTherapy4,
        },
    ],
};
