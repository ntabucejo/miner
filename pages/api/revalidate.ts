import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await response.revalidate("/incremental-static-regeneration");
    return response.send({ revalidated: true });
  } catch (error) {
    return response.send({ error });
  }
};

export default handler;
