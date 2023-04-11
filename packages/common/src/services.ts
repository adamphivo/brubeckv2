export type Method = "GET" | "POST" | "PATCH" | "DELETE";
export type ServiceName = "gather" | "persist" | "stream" | "interact";

export type Service = {
  name: ServiceName;
  port: string;
};

export const services: Service[] = [
  {
    name: "gather",
    port: "3002",
  },
  {
    name: "persist",
    port: "3001",
  },
  {
    name: "stream",
    port: "3003",
  },
  {
    name: "interact",
    port: "3004",
  },
];
