import axios from "axios";
import { services } from "./services";
import type { Method, Service, ServiceName } from "./services";

const headers = {
  "Content-Type": "application/json",
};

export default async function send(
  service: ServiceName,
  method: Method,
  endpoint: string,
  body?: object
) {
  try {
    const found = services.find((i) => i.name === service);
    const url = found && `http://localhost:${found.port}${endpoint}`;
    if (url) {
      switch (method) {
        case "GET": {
          const { data } = await axios.get(url, { headers });
          return data;
        }
        case "POST": {
          const { data } = await axios.post(url, body, { headers });
          return data;
        }
        case "DELETE": {
          const { data } = await axios.delete(url, { headers });
          return data;
        }
        case "PATCH": {
          const { data } = await axios.patch(url, body, { headers });
          return data;
        }
        default: {
          throw Error("Send : Unknown service");
        }
      }
    } else {
      throw Error("Send : Unknown URL");
    }
  } catch (e) {
    console.error(e);
  }
}
