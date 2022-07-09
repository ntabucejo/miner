import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../functions/utilities/prisma";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "GET") {
    response.send({ error: "Method not allowed" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: String(request.query.id) },
    });
    response.status(200).json(user);
  } catch (error) {
    return response.send({ error });
  }
};

export default handler;
