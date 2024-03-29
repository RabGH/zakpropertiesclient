import { Property } from "@lib/types";

export const filterSimilarProperties = (
  property: Property,
  properties: Property[]
) => {
  let similarProperties: Property[] = [];
  const maxSimilar = 3;
  const priceRange = [
    property.totalPrice, // * 0.8, // 20% lower
    property.totalPrice, // * 1.2, // 20% higher
  ];
  const sizeRange = [
    property.builtUpArea, // * 0.8, // 20% smaller
    property.builtUpArea, // * 1.2, // 20% larger
  ];
  for (let prop of properties) {
    if (prop._id === property._id) continue;
    const typeMatch = prop.propertyType === property.propertyType;
    const priceMatch =
      prop.totalPrice >= priceRange[0] && prop.totalPrice <= priceRange[1];
    const bedroomMatch = prop.bedrooms === property.bedrooms;
    const sizeMatch =
      prop.builtUpArea >= sizeRange[0] && prop.builtUpArea <= sizeRange[1];
    const areaMatch =
      prop.propertyAreaTypes?.length > 0 &&
      prop.propertyAreaTypes?.some((area) =>
        property.propertyAreaTypes?.includes(area)
      );
    const cityMatch = prop.address?.city === property.address?.city;
    if (
      typeMatch
      // priceMatch &&
      // bedroomMatch &&
      // sizeMatch &&
      // areaMatch &&
      // cityMatch
    ) {
      similarProperties.push(prop);
      if (similarProperties.length === maxSimilar) break;
    }
  }
  return similarProperties;
};
