"use client";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import getBlogs from "@utils/getBlogs";
import { self_assessments } from "@data/self_assessment";
import getExperts from "@utils/getExperts";
import BlogCard from "@components/Cards/BlogCard";
import CoachExpertise from "@components/Coach/Profile/CoachExpertise";
import { getLocalItem } from "@utils";
import Specialist from "@components/Experts/Specialist";

Chart.register(ArcElement, Tooltip, Legend);

// Options for the chart
const options = {
  rotation: -30 * Math.PI, // Rotate the chart to start from the top
  circumference: 60 * Math.PI, // Set the circumference to cover 1.5 times of PI
};

export default function AssessmentResult() {
  const { allBlogPosts } = getBlogs();
  const result = JSON.parse(getLocalItem("assessment_result"));

  let chartScore = result.all_scores;

  // Chart data
  const data = {
    labels: ["Low", "Mild", "Moderate", "Severe"],
    datasets: [
      {
        label: "# of Score",
        data: [
          chartScore?.Never,
          chartScore?.Sometimes,
          chartScore?.Often,
          chartScore?.Always,
        ],
        backgroundColor: ["green", "yellow", "orange", "red"],
        borderColor: [
          "rgba(0, 255, 0, .2)",
          "rgba(255, 255, 0, .2)",
          "rgba(255, 165, 0, .2)",
          "rgba(255, 0, 0, .2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // Get image and about info
  let result_data = self_assessments
    .filter((key) => key.slug == result.name)
    .map((value) => [
      value.about,
      value.result_image,
      value.levels[result.level.toLowerCase()],
    ])[0];

  const { status, doctorDetails } = getExperts();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <section className="py-8 bg-primary-two">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="relative lg:w-96">
            <Doughnut data={data} options={options} />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
              <p className="text-center text-xl font-bold">{result.score}/60</p>
              <p className="text-center text-sm font-semibold text-gray-500">
                {result.level}
              </p>
            </div>
          </div>
          <div className="place-self-center">
            <dl>
              <dt className="font-semibold text-white">{result.level}</dt>
              <dd className="mb-4 text-slate-200">{result_data[2]}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto mb-8">About us section</section> */}
      <CoachExpertise
        heading={"About " + result.name}
        image={result_data[1]}
        lists={result_data[0]}
      />

      {/* Specialist Doctors */}

      <Specialist
        doctorDetails={[
          doctorDetails[0],
          doctorDetails[5],
          doctorDetails[2],
          doctorDetails[1],
        ]}
      />

      <section className="bg-primary-two lg:py-10">
        <div className="container mx-auto">
          <div className="mb-10 pt-7 text-center text-white">
            <h2 className="subheading">
              <span>Readings That</span>
              <span className="heading-primary"> Would Help</span>
            </h2>
          </div>

          {/* ============== Blogs ============= */}
          <div className="grid gap-4 rounded-xl pb-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-3 lg:gap-6">
            {allBlogPosts.splice(0, 3).map((value, i) => {
              return <BlogCard key={i} data={value} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
