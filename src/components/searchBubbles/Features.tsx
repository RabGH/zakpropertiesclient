import { useState } from "react";

const features = [
  "Balcony",
  "Built-in wardrobes",
  "Concierge Service",
  "Covered Parking",
  "Equipped Kitchen",
  "Gym",
  "Pool",
  "Private Gym",
  "Security",
  "Spa",
  "Walk-in Closet",
  "Study room",
  "Private Pool",
  "Private Garden",
  "Maid Service",
];

const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

const handleFeaturesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const feature = event.target.value;
  const isChecked = event.target.checked;
  setSelectedFeatures((prevSelectedFeatures) => {
    if (isChecked) {
      return [...prevSelectedFeatures, feature];
    } else {
      return prevSelectedFeatures.filter((sf) => sf !== feature);
    }
  });
};
