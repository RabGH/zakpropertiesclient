export interface Property {
  _id: string;
  title: string;
  propertyType: string;
  mainPropertyImage: string;
  totalPrice: number;
  bathrooms: number;
  bedrooms: number;
  description: string;
  squareFootage: number;
  plottedArea: number;
  builtUpArea: number;
  propertyImages: string[];
  specificAddress: string;
  address: {
    street: string;
    city: string;
  };
  features: {
    name: string;
    features: string[];
  };
  propertyOffPlan: {
    offplan?: boolean;
    propertyCompletionDate?: string;
  };
  slug: {
    current: string;
  };

  location: {
    lat?: number;
    lng?: number;
  };
}

export interface Project {
  _id: string;
  title: string;
  projectPropertyTypes: string[];
  unitType: string;
  mainDeveloper: string;
  projectOffPlan: boolean | { offplan?: boolean; completionDate?: string };
  mainProjectImage: string;
  totalPrice: number;
  description: string;
  squareFootage: number;
  projectImages: string[];
  amenities: {
    name: string;
    amenities: string[];
  };
  projectType: string;
  numFloors?: number;
  numUnits?: number;
  numVillas?: number;
  bedrooms?: string;
  projectBuiltUpArea?: number;
  properties: {
    properties: Property[];
  };
  slug: {
    current: string;
  };
  specificAddress: string;
  address: {
    street: string;
    city: string;
  };
  location: {
    lat?: number;
    lng?: number;
  };
}

export interface PageContext {
  query: {
    slug: string;
  };
}
