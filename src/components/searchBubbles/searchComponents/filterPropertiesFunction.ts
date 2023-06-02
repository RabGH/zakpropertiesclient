import { Property } from "@lib/types";

export const filterProperties = (
  propertyFeatures: string[],
  propertyType: string[],
  propertyOffPlan: boolean | undefined,
  properties: Property[],
  bedroomRange: [number, number],
  sizeRange: [number, number],
  priceRange: [number, number]
) => {
  let filteredProperties: Property[] = [];
  for (let property of properties) {
    const typeMatch =
      propertyType.length === 0 ||
      (Array.isArray(propertyType) &&
        propertyType.some((type) => property.propertyType === type));
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
    const featureMatch =
      propertyFeatures.length === 0 ||
      propertyFeatures.filter((feature) =>
        property.features?.features?.includes(feature)
      ).length === propertyFeatures.length;
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
//! Test for which one might be causing the problem
