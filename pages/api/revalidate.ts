import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (request, response) => {
  try {
    await response.revalidate("/incremental-static-regeneration");
    return response.send({ revalidated: true });
  } catch (error) {
    return response.send({ error });
  }
};

export default handler;
