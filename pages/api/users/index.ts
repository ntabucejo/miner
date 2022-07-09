import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../functions/utilities/prisma";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "GET") {
    response.send({ error: "Method not allowed" });
  }

  try {
    const users = await prisma.user.findMany();
    response.status(200).json(users);
  } catch (error) {
    return response.send({ error });
  }
};

export default handler;
