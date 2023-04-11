import { useUserDispatch } from "../../hooks";
import { send } from "@brubeckscan/common/src";

interface Props {
  id: string;
}

export default function DeleteFavoriteButton({ id }: Props) {
  const dispatch = useUserDispatch();

  async function handleDelete() {
    try {
      const deleted = await send("persist", "DELETE", `/favorites/${id}`);
      if (deleted) {
        dispatch({ type: "DELETE_FAVORITE", payload: deleted });
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
