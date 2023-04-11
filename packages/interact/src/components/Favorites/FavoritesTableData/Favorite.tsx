import Identicon from "../../Identicon";
import DeleteFavoriteButton from "../DeleteFavoriteButton";
import FavoriteName from "./Cells/FavoriteName";
import FavoriteStatus from "./Cells/FavoriteStatus";
import FavoriteAddress from "./Cells/FavoriteAddress";
import DataAmount from "../../DataAmount";
import { useAttachNodeExternalData } from "../../../hooks/useAttachNodeExternalData";
import type { DFavorite } from "@brubeckscan/common/src/types";
import type { NodeData } from "@brubeckscan/common/src/types/gather";

interface Props {
  favorite: HydratedFavorite;
}

interface HydratedFavorite extends DFavorite {
  externalData?: NodeData | undefined;
}

export default function Favorite({ favorite }: Props) {
  useAttachNodeExternalData(favorite);

  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>
        {favorite.externalData && (
          <Identicon url={favorite.externalData.identiconURL} />
        )}
      </td>
      <td>
        <FavoriteName favorite={favorite} />
      </td>
      <td>
        {favorite.externalData && (
          <FavoriteStatus externalData={favorite.externalData} />
        )}
      </td>
      <td>
        <FavoriteAddress address={favorite.address} />
      </td>
      <td>
        {favorite.externalData && (
          <DataAmount
            amount={favorite.externalData?.staked}
            formated={false}
            fixed={true}
            colored={false}
          />
        )}
      </td>
      <td>
        {favorite.externalData && (
          <DataAmount
            amount={favorite.externalData?.toBeReceived}
            formated={false}
            fixed={true}
            colored={false}
          />
        )}
      </td>
      <td>
        {favorite.externalData && (
          <DataAmount
            amount={favorite.externalData?.rewarded}
            formated={false}
            fixed={true}
            colored={false}
          />
        )}
      </td>
      <td>
        {favorite.externalData && (
          <DataAmount
            amount={favorite.externalData?.sent}
            formated={false}
            fixed={true}
            colored={false}
          />
        )}
      </td>
      <td>
        <div className="flex gap-2 justify-center">
          <DeleteFavoriteButton id={favorite.id} />
          <button>Search</button>
        </div>
      </td>
    </tr>
  );
}
