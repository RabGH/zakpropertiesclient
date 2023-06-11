import * as React from "react";
import { Property } from "@lib/types";

export interface SearchInterface {
  propertyType: string[];
  priceRange: [number, number];
  propertyOffPlan: boolean | undefined;
  filteredProperties: Property[];
  bedrooms: [number, number];
  propertyFeatures: string[];
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
  readyToBuyOption: string;
  setReadyToBuyOption: React.Dispatch<React.SetStateAction<string>>;
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface PropertyTypeBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface FeatureBubbleProps {
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
