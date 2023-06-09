import * as React from "react";
import { Property } from "@lib/types";
import { MutableRefObject } from "react";

export interface SearchInterface {
  propertyType: string[];
  priceRange: [number, number];
  propertyOffPlan: boolean | undefined;
  filteredProperties: Property[];
  bedrooms: [number, number];
  propertyFeatures: string[];
  readyToBuy: string;
  sizeRange: [number, number];
}

export interface SearchFieldBubblesProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  properties: Property[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
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
export interface ResultsBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  properties: Property[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}
export interface SortByBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}
