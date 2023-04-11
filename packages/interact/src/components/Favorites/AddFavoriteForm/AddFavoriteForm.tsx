import { useState, ChangeEvent, FormEvent } from "react";
import { handleSubmit } from "./handleSubmit";
import { useUserDispatch } from "../../../hooks";
import { useUser } from "../../../hooks";

interface FormData {
  address: string;
  name: string;
  userAddress: string;
}

export default function AddFavoriteForm() {
  const dispatch = useUserDispatch();
  const user = useUser();
  const [error, setError] = useState<any>(undefined);
  const [formData, setFormData] = useState<FormData>({
    address: "",
    userAddress: "",
    name: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAdd = async (event: FormEvent<HTMLFormElement>) => {
    try {
      await handleSubmit(
        event,
        { ...formData, userAddress: user.address },
        dispatch
      );
    } catch (e) {
      setError(e);
    } finally {
      setTimeout(() => {
        setError(undefined);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      className="flex w-full items-center bg-white justify-between flex-wrap p-4 gap-4"
    >
      <div className="w-full grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Node name"
          className="w-full p-4 bg-neutral-500 text-white flex"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Node Address"
          className="p-4 bg-neutral-500 text-white flex w-full"
        />
      </div>
      <button type="submit" className="bg-neutral-900 p-4 w-full">
        ADD
      </button>
    </form>
  );
}
