import BonsaiPlansPricing from "../components/bonsai/BonsaiPlansPricing";
import BonsaiAddOns from "../components/bonsai/BonsaiAddOns";
import BonsaiNavBar from "../components/bonsai/BonsaiNavBar";
import BonsaiCallToAction from "../components/bonsai/BonsaiCallToAction";
import BonsaiFrequentlyAskedQuestions from "../components/bonsai/BonsaiFrequentlyAskedQuestions";
import BonsaiFooter from "../components/bonsai/BonsaiFooter";


export default function Bonsai() {

  return (
    <div>
      <BonsaiNavBar/>
      <BonsaiPlansPricing/>
      <BonsaiAddOns/>
      <BonsaiCallToAction/>
      <BonsaiFrequentlyAskedQuestions/>
      <BonsaiFooter/>
    </div>
  )
}
