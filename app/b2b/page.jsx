import FrontlineGrowth from "@components/B2b/FrontlineGrowth";
import Potential from "@components/B2b/Potential";
import UpgradeFrontline from "@components/B2b/UpgradeFrontline";
import PrimaryHeader from "@components/B2c/PrimaryHeader";

export default function page() {
  return (
    <>
      <PrimaryHeader
        title="we amplify human performance & engagement."
        subtitle="business = f(money-in, money-out) = f(your frontline)"
        desc="your frontline brings your topline & defines your bottomline. "
      />
      <FrontlineGrowth />
      <Potential />
      <UpgradeFrontline />
    </>
  );
}
