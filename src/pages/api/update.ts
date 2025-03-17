import { NextApiRequest } from "next";
import NextApiResponseServerIO from "../../types/next.types";
import { updateId } from "./chat";

const chat = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "POST") {
    // get message
    const { id } = req.body;
    updateId(id);
    // return message
    res.status(201).end();
  }
};

export default chat;
