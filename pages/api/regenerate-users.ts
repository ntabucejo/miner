import type { NextApiRequest, NextApiResponse } from "next";
import generateUsers from "../../functions/utilities/generate-users";
import prisma from "../../functions/utilities/prisma";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: generateUsers(),
    });
    response.send({ regeneratedUsers: true });
  } catch (error) {
    return response.send({ error });
  }
};

export default handler;
