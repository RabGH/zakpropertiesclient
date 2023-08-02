// developer page
import { sanityClient } from "@lib/sanity";
import {
  formatPrice,
  formatArea,
  formatNumberWithCommas,
  isMultiple,
} from "@lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Button } from "@mui/material";
import { Project, Property, Developer, PageContext } from "@lib/types";

export async function getStaticProps(context: PageContext) {
  const slug = context.params.slug;
  const query = `*[ _type == "developer" && slug.current == $slug][0]{
        id,
        _id,
        createdAt,
        name,
        logo,
        description,
        website,
        averagePricing,
        developerBuiltUpArea[],
        addresses[],
        propertyTypes[],
        projects[]->{
          id,
          _id,
          createdAt,
          title,
          projectPropertyTypes[],
          projectBuiltUpArea,
          mainProjectImage,
          totalPrice,
          averagePrice,
          projectImages,
          location,
          areaType,
          specificAddress,
          projectType,
          bedrooms,
          areaType[],
          slug,
          amenities->{
            name,
            amenities[],
            reference,
            createdAt,
          },
          projectOffPlan->{
            offplan,
            completionDate,
            properties[]->{
              _id,
              title,
              createdAt,
              location,
              propertyType,
              mainPropertyImage,
              propertyImages,
              totalPrice,
              bathrooms,
              bedrooms,
              description,
              squareFootage,
              plottedArea,
              builtUpArea,
              features,
              propertyOffPlan,
              slug,
              address->{
                street,
                city,
                reference,
                createdAt,
              },
              paymentPlan->{
                name,
                type,
                reference,
                createdAt,
              }
            }
          },
          projectReadyToBuy?: {
            offplan,
            completionDate,
            properties[]->{
              _id,
              title,
              createdAt,
              location,
              propertyType,
              mainPropertyImage,
              propertyImages,
              totalPrice,
              bathrooms,
              bedrooms,
              description, 
              squareFootage, 
              plottedArea, 
              builtUpArea, 
              features, 
              propertyOffPlan, 
              slug, 
              address->{
                street, 
                city,
                reference,
                createdAt,
              },
              paymentPlan->{
                name, 
                type, 
                reference,
                createdAt,
              }
            }
          },
          paymentPlans[]->{
            name, 
            type, 
            reference, 
            description, 
            validity, 
            timeline, 
            amountType, 
            amountAbsolute, 
            amountPercentage, 
            interestRate, 
            penalty,
          },
        },
      }`;

  const developer = await sanityClient.fetch(query, { slug });

  if (!developer) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        id: developer.id,
        _id: developer._id,
        createdAt: developer.createdAt ?? null,
        name: developer.name,
        logo: developer.logo ?? null,
        description: developer.description ?? null,
        website: developer.website ?? null,
        averagePricing: developer.averagePricing ?? null,
        developerBuiltUpArea: developer.developerBuiltUpArea ?? [],
        addresses: developer.addresses ?? [],
        propertyTypes: developer.propertyTypes ?? [],
        projects: developer.projects ?? [],
        areaType: developer.areaType ?? [],
        slug: developer.slug ?? null,
        amenities: developer.projects.amenities ?? [], // check if this works
      },
      revalidate: 60,
    };
  }
}

export default Developer;
