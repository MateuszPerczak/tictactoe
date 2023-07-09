import type { Server } from "http";
import type { ListenOnPort, ListenOnPortArguments } from "./listenOnPort.types";

const listenOnPort: ListenOnPort = ({
  instance,
  port,
  callback,
}: ListenOnPortArguments): Server => {
  return instance.listen(port, callback);
};

export default listenOnPort;
