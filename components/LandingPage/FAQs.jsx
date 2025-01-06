"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const faqs = [
    {
        question: "What can I expect?",
        answer: "Practical stress management strategies you can apply immediately.",
    },
    {
        question: "Is it for beginners?",
        answer: "Yes! These techniques are helpful whether you're just starting or have been trading for years.",
    },
    {
        question: "Will it help in volatile markets?",
        answer: "Absolutely—these tools are designed for high-pressure situations.",
    },
    {
        question: "Is this for day traders only?",
        answer: "No, long-term investors can benefit too.",
    },
    {
        question: "When will I see results?",
        answer: "Many traders notice an immediate shift in their mindset and focus.",
    },
];

const LandingPageFaqs = [
    {
        question: "What is Online Counseling and Therapy?",
        answer: "Online therapy can be defined as reaching out to the best psychologist or a therapist nearby in front of a computer screen. One does so by utilizing applications such as video calls, chats, or emails which do not require one to physically go to a medical center. It provides privacy, comfort, and the easy accessibility of being able to stay within one’s home.",
    },
    {
        question: "How much does online counseling cost?",
        answer: "The price of online therapy is dependent on the platform and the services on offer. Some of them even provide free therapy online in India, which assists and encourages people towards seeking mental healthcare. The price of a paid session would however still be reasonable and most times affordable going upwards to premium pricing with the choice of seeking the best behavioural psychologists in India or general mental health experts.",
    },
    {
        question: "What are the advantages of online counseling?",
        answer: "Convenience: Whether you are searching for a counselling session near you or an online therapist, therapy can be from anywhere.<br><br>Privacy: Seek the services of the best psychologist without revealing your identity.<br><br>Accessibility: Online platforms are able to match you easily with the best mental health therapist near you which can be a plus to patients in the rural areas.<br><br>Affordability: Several platforms allow access to free psychologists near you or at affordable rates.",
    },
    {
        question:
            "Why is wellness the best online psychologist consultation platform?",
        answer: "Wellness is preferred because of its affordability and its team of best psychologists in India. The platform’s features include:<br><br>Providing access to best behavioural psychologists in India.<br><br>Providing affordable and free therapy online in India.<br><br>Easy to use websites for individuals looking to consult a psychologist online.<br><br>Treatment of personal as well as family and occupational mental health concerns.",
    },
    {
        question: "What services are being offered by wleness?",
        answer: "There is a variety of mental health services offered at Wellness including:<br><br>One-on-one Counseling Sessions: Get therapy from the best psychologist for a customized target.<br><br>Couple Therapy: Get help from the best relationship counseling in India to deal with relationship issues.<br><br>Workplace Wellness: Provides top support for employees' mental health.<br><br>Life counselling: Get top quality professional and personal life Counseling from the best life coaches.",
    },
    {
        question: "How can I consult the best psychologist in India?",
        answer: "Through Wleness, the best psychologist in India is available for consultation. Wleness helps you with:<br><br>The most advanced specialists including the best behavioral psychologist in India.<br><br>Initial inquiries which are affordable and include free therapy online India for the first sessions.<br><br>Safe and private appointments through video calls, chats, and other platforms.<br><br>To meet with the best psychologist, go to Wleness, look through the services offered, and make an appointment for a virtual help session by selecting the option to book your counseling session near me. Wleness provides thorough and discrete professional help that is appropriate for an individual’s specific mental health disorder.",
    },
];

export default function FAQs({ faqLanding = false }) {
    const [active, setActive] = useState(null);

    const handleActive = (i) => {
        if (active === i) {
            setActive(null);
        } else {
            setActive(i);
        }
    };

    const renderFaqs = (data) => {
        return data.map((value, i) => {
            return (
                <div
                    key={i}
                    className="bg-slate-800 transition-all cursor-pointer shadow-slate-200 rounded-lg p-5 faqs"
                >
                    <h4
                        onClick={() => handleActive(i)}
                        className="font-dm-sans lg:text-lg font-semibold items-center text-white hover:text-primary-one grid grid-cols-[4fr_1fr]"
                    >
                        <span>{value.question}</span>
                        <span className="text-right">
                            <FontAwesomeIcon
                                className="w-5"
                                icon={active === i ? faMinus : faPlus}
                            />
                        </span>
                    </h4>
                    {active === i && (
                        <p
                            className="text-sm lg:text-base mt-4 text-slate-300"
                            dangerouslySetInnerHTML={{ __html: value.answer }}
                        ></p>
                    )}
                </div>
            );
        });
    };
    return (
        <section className="bg-black py-12 lg:pt-28 lg:pb-10" id="faqs">
            <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10">
                <div>
                    <h2 className="font-bold text-3xl lg:text-5xl text-white mb-8">
                        <p>Your Questions</p>
                        <p>Answered</p>
                    </h2>

                    <button className="bg-primary-one font-medium rounded-xl py-3 px-6 hover:scale-[1.03] transition-all">
                        Contact Support
                    </button>
                </div>
                <div>
                    <div className="footer-text space-y-4">
                        {!faqLanding
                            ? renderFaqs(faqs)
                            : renderFaqs(LandingPageFaqs)}
                    </div>
                </div>
            </div>
        </section>
    );
}
