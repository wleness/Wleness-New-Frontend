import HeaderWithImage from "@components/Details/HeaderWithImage";
import LeftImageList3 from "@components/Details/LeftImageList3";
import RightImageList from "@components/Details/RightImageList";
import RightImageList2 from "@components/Details/RightImageList2";
import RightProcedureList from "@components/Details/RightProcedureList";
import SubpagesConclusion from "@components/Details/SubpagesConclusion";
import { meditation_details } from "@data/activities";

export default function Page({ params }) {
  const info = meditation_details[params.meditation_slug];
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
