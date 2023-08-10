import { Property } from "@lib/types";
//? Is used in PropertyCardGrid.tsx
export const filterProperties = (
  propertyAmenities: string[],
  propertyType: string[],
  propertyOffPlan: boolean | undefined,
  properties: Property[],
  priceRange: [number, number],
  bedrooms: [number, number],
  sizeRange: [number, number]
) => {
  let filteredProperties: Property[] = [];
  const maxBedrooms = 15;
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
      property.bedrooms >= bedrooms[0] &&
      (property.bedrooms <= bedrooms[1] || bedrooms[1] === 15);
    const sizeMatch =
      property.builtUpArea >= sizeRange[0] &&
      property.builtUpArea <= sizeRange[1];
    const amenityMatch =
      propertyAmenities.length === 0 ||
      propertyAmenities.filter((propertiesAmenities) =>
        property.propertyAmenities?.propertiesAmenities?.includes(
          propertiesAmenities
        )
      ).length === propertyAmenities.length;
    if (
      typeMatch &&
      priceMatch &&
      offPlanMatch &&
      bedroomMatch &&
      sizeMatch &&
      amenityMatch
    ) {
      filteredProperties.push(property);
    }
  }
  return filteredProperties;
};
