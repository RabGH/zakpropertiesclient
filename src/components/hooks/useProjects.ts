// useProjects.ts
import { useEffect, useState } from "react";
import sanityClient from "../client";

// A helper function to shuffle an array
const shuffle = (array) => {
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
export const useProjects = (limit) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
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