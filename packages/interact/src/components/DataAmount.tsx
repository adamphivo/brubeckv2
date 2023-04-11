import DataTokenIcon from "./DataTokenIcon";
import { formatNumberWithSpaces } from "@brubeckscan/common/src";

interface Props {
  amount: number | string;
  formated: boolean;
}

export default function DataAmount({
  amount = 0,
  formated = false,
  fixed = false,
  colored = true,
}) {
  let toDisplay: string | number = amount;

  if (formated) {
    toDisplay = formatNumberWithSpaces(amount);
  }

  if (fixed) {
    toDisplay = amount.toFixed(2);
  }

  return (
    <div
      className={`font-semibold flex gap-2 items-center justify-center ${
        colored ? "text-orange-500" : "text-neutral-800"
      }`}
    >
      {toDisplay}
      <DataTokenIcon />
    </div>
  );
}
