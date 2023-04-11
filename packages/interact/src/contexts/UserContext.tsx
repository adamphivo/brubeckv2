import { createContext, useReducer, PropsWithChildren, useEffect } from "react";
import { useMetaMask } from "metamask-react";
import send from "@brubeckscan/common/src/send";

export const UserContext = createContext<any>(null);
export const UserDispatchContext = createContext<any>(null);

// Provider
export function UserProvider({ children }: PropsWithChildren) {
  const { account } = useMetaMask();
  const [user, dispatch] = useReducer(userReducer, null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (account) {
          const user = await send("persist", "GET", `/users/${account}`);
          dispatch({ type: "SET_USER", payload: user });
        } else {
          dispatch({ type: "CLEAR_USER" });
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchUserData();
  }, [account]);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

function userReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_USER": {
      return { ...state, ...action.payload };
    }
    case "CLEAR_USER": {
      return null;
    }
    case "ADD_FAVORITE": {
      return { ...state, Favorite: [...state.Favorite, action.payload] };
    }
    case "DELETE_FAVORITE": {
      const newFavorites = state.Favorite.filter(
        (i: any) => i.id !== action.payload.id
      );
      return {
        ...state,
        Favorite: newFavorites,
      };
    }
    case "UPDATE_FAVORITE": {
      const favorites = state.Favorite.map((i: any) => {
        if (i.id === action.payload.id) {
          return {
            ...i,
            ...action.payload,
          };
        } else {
          return i;
        }
      });

      return {
        ...state,
        Favorite: favorites,
      };
    }
    case "ATTACH_EXTERNAL_NODE_DATA": {
      return {
        ...state,
        Favorite: state.Favorite.map((i: any) => {
          if (i.id === action.payload.id) {
            i.externalData = action.payload.externalData;
          }
          return i;
        }),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
