import { createClient } from "next-sanity";
import { config } from "@lib/sanity";

export const previewClient = createClient({
  ...config,
  useCdn: false,
});