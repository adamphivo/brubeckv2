import { useState } from "react";
import { useUserDispatch } from "../../../../hooks";
import type { DFavorite } from "@brubeckscan/common/src/types";
import { send } from "@brubeckscan/common/src";

interface Props {
  favorite: DFavorite;
}

export default function FavoriteName({ favorite }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState<string>(favorite.name);
  const dispatch = useUserDispatch();

  async function handleSave() {
    try {
      const saved = await send("persist", "PATCH", "/favorites", {
        id: favorite.id,
        data: { name: newName },
      });

      if (saved) {
        dispatch({ type: "UPDATE_FAVORITE", payload: saved });
        setIsEditing(!isEditing);
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (isEditing) {
    return (
      <div className="flex items-center justify-between w-full">
        <input
          className="bg-neutral-800 text-white"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between w-full">
        <div>{favorite.name}</div>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
    );
  }
}
