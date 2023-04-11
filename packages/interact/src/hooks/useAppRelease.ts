import { useContext } from "react";
import { AppReleaseContext } from "../contexts/AppContext";

export function useAppRelease() {
  return useContext(AppReleaseContext);
}
