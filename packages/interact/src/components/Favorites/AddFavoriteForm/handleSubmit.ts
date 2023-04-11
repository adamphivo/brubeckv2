import validator from "validator";
import { send } from "@brubeckscan/common/src";
import { FormEvent } from "react";

interface FormData {
  address: string;
  name: string;
  userAddress: string;
}

export const handleSubmit = async (
  event: FormEvent<HTMLFormElement>,
  formData: FormData,
  dispatch: any
) => {
  try {
    event.preventDefault();
    if (!formData.userAddress) {
      throw Error("Missing user address");
    }
    if (!formData.address || !formData.name || !formData.userAddress) {
      throw Error("Incomplete input");
    }
    if (!validator.isEthereumAddress(formData.address)) {
      throw Error("Invalid address");
    }
    const favorite = await send("persist", "POST", "/favorites", formData);
    dispatch({ type: "ADD_FAVORITE", payload: favorite });
  } catch (e) {
    throw e;
  } finally {
  }
};
