import NextApiResponseServerIO from "../types/next.types";

export const ioInvariant = (res: NextApiResponseServerIO) => {
  if (res?.socket?.server?.io) {
    return res.socket.server.io;
  }
  throw Error(`io server not intantiated.`);
};
