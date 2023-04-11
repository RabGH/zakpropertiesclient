import * as React from "react";
import { Property } from "../../../lib/types";

export interface SearchInterface {
  propertyType: string;
  priceRange: [number, number];
  propertyOffPlan: boolean;
  filteredProperties: Property[];
  bedrooms: [number, number];
  propertyFeatures: string[];
  readyToBuy: string;
  maxPrice?: number;
  maxSize?: number;
  sizeRange: [number, number];
}
export interface SearchFieldBubblesProps {
  filteredProperties: Property[];
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  properties: Property[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
  priceRange: [number, number];
}
export interface ReadyToBuyBubbleProps {
  readyToBuyOption: string;
  setReadyToBuyOption: React.Dispatch<React.SetStateAction<string>>;
}
export interface PriceRangeBubbleProps {
  handlePriceRange: (priceRange: [number, number]) => void;
  priceRange: [number, number];
  search: SearchInterface;
  setIsChanged: (value: boolean) => void;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface PropertyTypeBubbleProps {
  handleSearch: (propertyType: string) => void;
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface BedroomBubbleProps {
  handleBedroomRange: (low: number, high: number) => void;
  minBedrooms: number;
  maxBedrooms: number;
  search: SearchInterface;
  bedroomRange: [number, number];
  setIsChanged: (value: boolean) => void;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
export interface SizeBubbleProps {
  sizeRange: [number, number];
  handleSizeRange: (sizeRange: [number, number]) => void;
  search: SearchInterface;
  setIsChanged: (value: boolean) => void;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}
