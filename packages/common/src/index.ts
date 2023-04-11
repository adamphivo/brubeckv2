import send from "./send";

export const cleanInput = (input: string) => {
  return input.trim().toLowerCase();
};

export function formatNumberWithSpaces(input: number): string {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export { send };
