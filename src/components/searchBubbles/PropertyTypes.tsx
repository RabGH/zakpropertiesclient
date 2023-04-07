import {useState} from "react";

const propertyTypes = [
    "Villa",
    "Townhouse",
    "Apartment",
    "Penthouse",
    "Loft & Duplex",
    "Plot",
];
const [selectedPropertyType, setSelectedPropertyType] = useState<string[]>(

const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    const propertyType = event.target.value;
    const isChecked = event.target.checked;
    setSelectedPropertyType((prevSelectedPropertyType) => {
        if (isChecked) {
            return [...prevSelectedPropertyType, propertyType];
        } else {
            return prevSelectedPropertyType.filter((pt) => pt !== propertyType);
        }
    });
};