import { NextApiRequest } from "next";
import NextApiResponseServerIO from "../../types/next.types";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log("> Instantiating socket.io server...");

    const httpServer = res.socket.server as unknown as NetServer;
    const io = new ServerIO(httpServer, {
      path: "/api/socket",
    });

    res.socket.server.io = io;
  }
  res.end();
};

export default handler;
