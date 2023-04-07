import { router } from "next/client";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const queryParams = new URLSearchParams();

  if (selectedPropertyType.length) {
    queryParams.append("propertyType", selectedPropertyType.join(","));
  }
  if (selectedPriceRange.length) {
    queryParams.append("priceRange", selectedPriceRange.join(","));
  }
  if (selectedSquareFootage.length) {
    queryParams.append("squareFootage", selectedSquareFootage.join(","));
  }
  if (selectedReadyToBuy) {
    queryParams.append("readyToBuy", selectedReadyToBuy.toString());
  }
  if (selectedFeatures.length) {
    queryParams.append("features", selectedFeatures.join(","));
  }

  const searchUrl = `/search?${queryParams.toString()}`;
  router.push(searchUrl);
};
