import { sanityClient } from "./sanity";
import { Property, Project } from "./types";

export async function getAllPropertySlugs() {
  const query = `*[_type == "property"]{slug}`;
  const slugs = await sanityClient.fetch<Property[]>(query);
  return slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
}

export async function getAllProjectSlugs() {
  const query = `*[_type == "projects"]{slug}`;
  const slugs = await sanityClient.fetch<Project[]>(query);
  return slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
}
