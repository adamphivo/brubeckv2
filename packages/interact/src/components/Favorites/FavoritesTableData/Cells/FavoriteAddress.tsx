import { shortenEthAddress } from "@brubeckscan/common/src/utils/index";
import { useState } from "react";

interface Props {
  address: string;
}

export default function FavoriteAddress({ address }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState(shortenEthAddress(address));

  function handleClick() {
    navigator.clipboard.writeText(address);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  }

  return (
    <div className="flex items-center justify-center">
      {isClicked ? (
        <div className="text-orange-500">Copied !</div>
      ) : (
        <button onClick={handleClick}>{text}</button>
      )}
    </div>
  );
}
