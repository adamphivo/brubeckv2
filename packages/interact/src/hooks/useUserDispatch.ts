import { useContext } from "react";
import { UserDispatchContext } from "../contexts/UserContext";

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}
