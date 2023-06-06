export interface Property {
  id: string;
  _id: string;
  createdAt: Date;
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
  areaType: string[];
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
  projectId?: {
    _id?: string;
    _type?: "reference";
    _weak?: boolean;
    projectId: Project;
  };
}

export interface PropertyProps extends Property {
  property: Property;
  properties: Property[];
}

export interface Project {
  id: string;
  _id: string;
  createdAt?: Date;
  title: string;
  projectPropertyTypes: string[];
  mainDeveloper: string;
  projectOffPlan: {
    offplan?: boolean;
    propertyCompletionDate?: string;
  };
  mainProjectImage: string;
  totalPrice: number;
  description: string;
  presentation: string;
  projectImages: string[];
  areaType: string[];
  amenities: {
    name: string;
    amenities: string[];
  };
  projectType: string;
  numFloors?: number;
  numUnits?: number;
  numOfHouses?: number;
  bedrooms?: string;
  projectBuiltUpArea?: number[];
  averagePrice?: number[];
  properties?: {
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
  params: {
    slug: string;
  };
}
