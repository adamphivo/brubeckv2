import { useEffect } from "react";
import { useUserDispatch } from "../hooks";
import { send } from "@brubeckscan/common/src";
import type { DFavorite } from "@brubeckscan/common/src/types";
import type { NodeData } from "@brubeckscan/common/src/types/gather";

const DISPATCH_TYPE = "ATTACH_EXTERNAL_NODE_DATA";

export function useAttachNodeExternalData(favorite: DFavorite) {
  const dispatch = useUserDispatch();
  useEffect(() => {
    let ignore = false;

    async function fetchNodeData() {
      try {
        const nodeData: NodeData = await send(
          "gather",
          "GET",
          `/getNodeData/${favorite.address}`
        );
        if (nodeData && !ignore) {
          dispatch({
            type: DISPATCH_TYPE,
            payload: { id: favorite.id, externalData: nodeData },
          });
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchNodeData();

    return () => {
      ignore = true;
    };
  }, []);
}
