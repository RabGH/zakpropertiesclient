import { Property } from "../../../../lib/types";

export const filterProperties = (
  propertyType: string,
  priceRange: [number, number],
  propertyOffPlan: boolean | undefined,
  bedroomRange: [number, number],
  sizeRange: [number, number],
  propertyFeatures: string[],
  properties: Property[]
) => {
  let filteredProperties: Property[] = [];
  for (let property of properties) {
    const typeMatch =
      propertyType === "All" || property.propertyType === propertyType;
    const priceMatch =
      property.totalPrice >= priceRange[0] &&
      property.totalPrice <= priceRange[1];
    const offPlanMatch =
      propertyOffPlan === undefined ||
      property.propertyOffPlan?.offplan === propertyOffPlan;
    const bedroomMatch =
      property.bedrooms >= bedroomRange[0] &&
      (property.bedrooms <= bedroomRange[1] || bedroomRange[1] === 15);
    const sizeMatch =
      property.squareFootage >= sizeRange[0] &&
      property.squareFootage <= sizeRange[1];
    const featureMatch = // added this condition
      propertyFeatures.length === 0 ||
      propertyFeatures.every((feature) => property.features.includes(feature));
    if (
      typeMatch &&
      priceMatch &&
      offPlanMatch &&
      bedroomMatch &&
      sizeMatch &&
      featureMatch
    ) {
      filteredProperties.push(property);
    }
  }
  return filteredProperties;
};
