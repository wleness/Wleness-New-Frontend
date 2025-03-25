import Header from "@components/Blogs/Header";
import BlogsFilterableBox from "@components/Blogs/BlogsFilterableBox";
import Head from "next/head";
import getCanonical from "@utils/getCanonical";
import { BLOGS } from "@data/urls";

export const metadata = {
    title: "Read Self-Help Articles and Mental Health Blogs at Wleness",
    keywords: [
        "self help articles",
        "Mental Health Blogs",
        "anxiety",
        "depression",
        "bipolar disorder",
        "schizophrenia",
    ],
    description:
        "Read self-help articles and mental health blogs on anxiety, depression, bipolar disorder, and schizophrenia for expert advice and support on mental well-being.",
    alternates: {
        canonical: getCanonical(BLOGS),
    },
};

export default function page() {
    return (
        <>
            <Head>
                <link
                    rel="canonical"
                    href={() => getCanonical(BLOGS)}
                    key="canonical"
                />
            </Head>
            <Header />
            <BlogsFilterableBox />
        </>
    );
}
