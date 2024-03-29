import * as React from "react";
import { Property } from "@lib/types";

export interface SearchInterface {
  propertyType: string[];
  priceRange: [number, number];
  propertyOffPlan: boolean | undefined;
  filteredProperties: Property[];
  bedrooms: [number, number];
  propertyAmenities: string[];
  readyToBuy: string;
  sizeRange: [number, number];
  sortBy: string;
}

export const PropertiesContext = React.createContext<Property[]>([]);

export interface SearchFieldBubblesProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface ReadyToBuyBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface PropertyTypeBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface AmenitiesBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface PriceRangeBubbleProps {
  priceRange: [number, number];
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface BedroomBubbleProps {
  minBedrooms: number;
  maxBedrooms: number;
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface SizeBubbleProps {
  sizeRange: [number, number];
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}

export interface SortByBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface ClearSelectionBubbleProps {
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
