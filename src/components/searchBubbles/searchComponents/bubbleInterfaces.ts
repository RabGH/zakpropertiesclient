import * as React from "react";
import { Property } from "@lib/types";

export interface SearchInterface {
  propertyType: string[];
  priceRange: number[];
  propertyOffPlan: boolean | undefined;
  filteredProperties: Property[];
  bedrooms: number[];
  propertyFeatures: string[];
  readyToBuy: string;
  maxPrice?: number;
  maxSize?: number;
  sizeRange: number[];
}

export interface SearchFieldBubblesProps {
  search: SearchInterface;
  properties: Property[];
}
export interface ReadyToBuyBubbleProps {
  search: SearchInterface;
}
export interface PriceRangeBubbleProps {
  priceRange: number[];
}
export interface PropertyTypeBubbleProps {
  search: SearchInterface;
}
export interface BedroomBubbleProps {
  minBedrooms: number;
  maxBedrooms: number;
}
export interface SizeBubbleProps {
  sizeRange: number[];
}
export interface FeatureBubbleProps {
  search: SearchInterface;
}

export interface ResultsBubbleProps {
  search: SearchInterface;
  properties: Property[];
}

export interface SortByBubbleProps {
  search: SearchInterface;
}
