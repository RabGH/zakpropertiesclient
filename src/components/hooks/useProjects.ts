// useProjects.ts
import { useEffect, useState } from "react";
import { sanityClient } from "../../../sanity";
import { Project } from "../../../types";

// A helper function to shuffle an array
const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// A custom hook to fetch projects data and return a shuffled and sliced array
export const useProjectsRandom = (limit: number): Project[] => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[ _type == "projects" && slug.current == $pageSlug][0]{
          title,
          projectPropertyTypes,
          unitType,
          projectOffPlan,
          mainDeveloper,
          mainProjectImage,
          totalPrice,
          description,
          squareFootage,
          projectImages,
          amenities,
          location,
          properties[]->{
            _id,
            title,
            mainPropertyImage,
            totalPrice,
          }
      }`
      )
      .then((data) => {
        // Shuffle and slice the data according to the limit
        const shuffledData = shuffle(data).slice(0, limit);
        setProjects(shuffledData);
      })
      .catch(console.error);
  }, []);

  return projects;
};