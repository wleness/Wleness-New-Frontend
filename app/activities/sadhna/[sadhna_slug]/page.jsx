import HeaderWithImage from "@components/Details/HeaderWithImage";
import LeftImageList3 from "@components/Details/LeftImageList3";
import RightImageList from "@components/Details/RightImageList";
import RightImageList2 from "@components/Details/RightImageList2";
import RightProcedureList from "@components/Details/RightProcedureList";
import SubpagesConclusion from "@components/Details/SubpagesConclusion";
import { sadhna_details } from "@data/activities";
import getCanonical from "@utils/getCanonical";

export const generateMetadata = ({ params }) => {
  const info = sadhna_details[params.sadhna_slug];
  return {
    title: info?.meta_title,
    description: info?.header.desc,
    alternates: {
      canonical: getCanonical(info?.header.slug),
    },
  };
};

export default function Page({ params }) {
  const info = sadhna_details[params.sadhna_slug];
  if (!info) {
    return <p className="font-semibold text-center py-6">Loading...</p>;
  }

  return (
    <main className="bg-black">
      {info.header && <HeaderWithImage data={info.header} />}
      {info.procedure && <RightProcedureList data={info.procedure} />}
      {info.types && <RightImageList2 data={info.types} />}
      {info.benefits && <LeftImageList3 data={info.benefits} />}
      {info.precautions && <RightImageList data={info.precautions} />}
      {info.conclusion && <SubpagesConclusion data={info.conclusion} />}
    </main>
  );
}
