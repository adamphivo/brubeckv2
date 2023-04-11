export type Method = "GET" | "POST" | "PATCH" | "DELETE";
export type ServiceName = "gather" | "persist" | "stream" | "interact";
export type Service = {
    name: ServiceName;
    port: string;
};
export declare const services: Service[];
