import { useContext } from "react";
import {
  NetworkContext,
  NetworkDispatchContext,
} from "../contexts/NetworkContext";

export function useNetwork() {
  return useContext(NetworkContext);
}

export function useNetworkDispatch() {
  return useContext(NetworkDispatchContext);
}
