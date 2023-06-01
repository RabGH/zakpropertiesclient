import { NextApiRequest, NextApiResponse } from "next";
import { getPreviewUrlForDocumentId } from "next-sanity";
import { setPreviewData } from "next/cookies";
import { config, sanityClient } from "@lib/sanity";
import  Document  from "@sanity/client";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.query.secret !== config.previewSecret ||
    !req.query.id ||
    !req.query.type
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const document: Document | null = await sanityClient.fetch(
    `*[_type == $type && _id == $id][0]`,
    {
      type: req.query.type as string,
      id: req.query.id as string,
    }
  );

  if (!document) {
    return res.status(401).json({ message: "Invalid document ID" });
  }

  setPreviewData(
    req,
    res,
    {
      id: document._id as string,
      type: document._type as string,
    },
    {
      maxAge: 60 * 60,
    }
  );

  const url = await getPreviewUrlForDocumentId(document._id as string);
  res.writeHead(307, { Location: url });
  res.end();
}
