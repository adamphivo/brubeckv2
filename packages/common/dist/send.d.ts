import type { Method, ServiceName } from "./services";
export default function send(service: ServiceName, method: Method, endpoint: string, body?: object): Promise<any>;
