import { NextApiRequest, NextApiResponse } from "next";
import { clearPreviewData } from "next/client";

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  clearPreviewData(req, res);

  res.writeHead(307, { Location: "/" });
  res.end();
}
