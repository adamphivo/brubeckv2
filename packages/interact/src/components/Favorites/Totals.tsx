import { useUser } from "../../hooks";
import DataAmount from "../DataAmount";

export default function Totals() {
  const user = useUser();

  let totals = {
    staked: 0,
    sent: 0,
    rewarded: 0,
    toBeReceived: 0,
  };

  let computed: any;

  if (user) {
    computed = user.Favorite.reduce((totals: any, favorite: any) => {
      if (favorite.externalData) {
        return {
          staked: totals.staked + favorite.externalData.staked,
          sent: totals.sent + favorite.externalData.sent,
          rewarded: totals.rewarded + favorite.externalData.rewarded,
          toBeReceived:
            totals.toBeReceived + favorite.externalData.toBeReceived,
        };
      } else {
        return totals;
      }
    }, totals);
  }

  return (
    <div className="p-4 py-10 md:p-4 md:bg-neutral-800 md:text-white">
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
        <h4 className="font-semi text-5xl md:text-4xl pb-2 md:pb-0">Totals</h4>
        <div className="flex justify-between w-full md:flex-col md:items-center text-2xl md:text-lg">
          <div>Staked</div>
          <DataAmount amount={computed?.staked.toFixed(0)} formated={true} />
        </div>
        <div className="flex justify-between w-full md:flex-col md:items-center text-2xl md:text-lg">
          <div>To be received</div>
          <DataAmount
            amount={computed?.toBeReceived.toFixed(0)}
            formated={true}
          />
        </div>
        <div className="flex justify-between w-full md:flex-col md:items-center text-2xl md:text-lg">
          <div>Already sent</div>
          <DataAmount amount={computed?.sent.toFixed(0)} formated={true} />
        </div>
        <div className="flex justify-between w-full md:flex-col md:items-center text-2xl md:text-lg">
          <div>Total rewarded</div>
          <DataAmount amount={computed?.rewarded.toFixed(0)} formated={true} />
        </div>
      </div>
    </div>
  );
}
