import * as React from "react";
import { Property } from "../../../lib/types";

export interface SearchInterface {
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  propertyOffPlan: boolean;
  filteredProperties: Property[];
  bedrooms: number;
  bathrooms: number;
  propertyFeatures: string[];
}

export interface SearchFieldBubblesProps {
  handleSearch: (
    propertyType: string,
    minPrice: number,
    maxPrice: number
  ) => void;
  selectedType: string;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  filteredProperties: Property[];
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  properties: Property[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>; // added property
}

export interface ReadyToBuyBubbleProps {
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  properties: Property[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
  handleReadyToBuyChange: (option: string) => void;
}

export interface PriceRangeBubbleProps {
  handlePriceRange: (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedType: string,
    minPrice: number,
    maxPrice: number
  ) => void;
  priceRange: [number, number];
  minPrice: number;
  maxPrice: number;
  handleSearch: (
    propertyType: string,
    minPrice: number,
    maxPrice: number
  ) => void;
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
}

export interface PropertyTypeBubbleProps {
  handleSearch: (propertyType: string) => void;
  selectedType: string;
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  filteredProperties: Array<any>;
}
