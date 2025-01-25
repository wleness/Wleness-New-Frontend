"use client";

const DATA = [
    {
        title: "Stress",
        theme: "bg-[#ff53f6]",
        points: [
            "Trouble staying focused.",
            "Having a hard time sleeping.",
            "Feeling tightness in muscles or getting headaches often.",
            "Eating too much or not wanting to eat.",
            "Getting annoyed, frustrated, or irritable easily.",
        ],
    },
    {
        title: "Depression",
        theme: "bg-[#FFDB01]",
        points: [
            "Struggling to focus and concentrate",
            "Feeling sad and inadequate",
            "Losing interest in activities you once enjoyed",
            "Feeling tired or low on energy",
            "Having trouble sleeping or staying awake",
        ],
    },
    {
        title: "Anxiety",
        theme: "bg-[#ff53f6]",
        points: [
            "Avoiding situations or problems that cause stress.",
            "Feeling tired or having trouble focusing because of too many thoughts.",
            "Physical signs can include a fast heartbeat, sweating, shaking, and tight muscles.",
            "Sleep problems, like difficulty falling asleep or staying asleep.",
        ],
    },
    {
        title: "Anger",
        theme: "bg-[#FF5300]",
        points: [
            "Feeling annoyed or irritated by small problems often.",
            "Holding onto grudges and not letting go of past issues.",
            "Noticing physical signs like a racing heart or tense muscles when angry.",
            "Often getting into arguments with family, friends, or coworkers because of anger.",
            "Struggling to control your anger, leading to actions you might regret later.",
        ],
    },
    {
        title: "Panic Attacks",
        theme: "bg-[#05A0FD]",
        points: [
            "Experiencing trouble breathing.",
            "Feeling dizzy or faint.",
            "Worrying about losing control or feeling crazy.",
            "Experiencing chest pain or discomfort.",
            "Sweating and shaking.",
        ],
    },
    {
        title: "ADHD",
        theme: "bg-[#FF5300]",
        points: [
            "Struggling to manage time effectively.",
            "Having trouble focusing on tasks or details.",
            "Acting without thinking about the consequences.",
            "Difficulty organizing tasks or activities.",
            "Often losing items and missing appointments.",
        ],
    },
];

export default function Banner() {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-y-9 xl:grid-cols-3 mt-6 lg:gap-5 mb-12">
                {DATA?.map((value, i) => (
                    <div className="text-center border" key={i}>
                        <h2 className={`font-semibold text-black py-4 text-lg ${value.theme}`}>
                            {value.title}
                        </h2>

                        <ul className="mt-4 list-disc px-8 pb-4">
                            {value.points.map((point, i) => (
                                <li
                                    className="text-xs text-gray-200 lg:text-sm font-semibold text-justify my-1"
                                    key={i}
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <section className="container mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between rounded-3xl bg-slate-900 px-8 py-12  lg:px-8 text-white font-bold text-4xl">
                <span>
                    Get your{" "}
                    <span className="text-primary-one">free consultation</span>
                </span>
                <button
                    onClick={() => {
                        window.open(
                            "https://cal.com/wleness/evaluate-your-wellbeing-w-wleness",
                            "_blank"
                        );
                    }}
                    className="btn-one mt-6 md:mt-0 text-nowrap"
                >
                    Book now
                </button>
            </section>
        </>
    );
}
