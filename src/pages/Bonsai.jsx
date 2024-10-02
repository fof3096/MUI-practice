import BonsaiPlansPricing from "../components/bonsai/BonsaiPlansPricing";
import BonsaiAddOns from "../components/bonsai/BonsaiAddOns";
import BonsaiNavBar from "../components/bonsai/BonsaiNavBar";


export default function Bonsai() {

  // TODO: https://www.frontendpractice.com/projects/bonsai

  return (
    <div>
      <BonsaiNavBar/>
      <BonsaiPlansPricing/>
      <BonsaiAddOns/>
    </div>
  )
}
