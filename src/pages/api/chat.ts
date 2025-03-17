import { NextApiRequest } from "next";
import NextApiResponseServerIO from "../../types/next.types";
import { ioInvariant } from "../../shared/socket";

const chat = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "POST") {
    // get message
    const message = req.body;
    const io = ioInvariant(res);

    // dispatch to channel "message"
    io.to("").emit("message", message);

    // return message
    res.status(201).json(message);
  }
};

export default chat;
