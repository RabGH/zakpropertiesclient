import { sanityClient } from "./sanity";
import { Property, Project, Developer } from "./types";

export async function getAllDeveloperSlugs() {
  const query = `*[_type == "developer"]{slug}`;
  const slugs = await sanityClient.fetch<Developer[]>(query);
  return slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
}

export async function getAllDevelopmentSlugs() {
  const query = `*[_type == "development"]{slug}`;
  const slugs = await sanityClient.fetch<Developer[]>(query);
  return slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
}

export async function getAllProjectSlugs() {
  const query = `*[_type == "project"]{slug}`;
  const slugs = await sanityClient.fetch<Project[]>(query);
  return slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
}

export async function getAllPropertySlugs() {
  const query = `*[_type == "property"]{slug}`;
  const slugs = await sanityClient.fetch<Property[]>(query);
  return slugs.map((slug) => ({ params: { slug: slug.slug.current } }));
}
