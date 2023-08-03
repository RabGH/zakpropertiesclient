export interface Property {
  id: string;
  _id: string;
  createdAt?: Date;
  title: string;
  propertyType: string;
  mainPropertyImage: string;
  totalPrice: number;
  bathrooms: number;
  bedrooms: number;
  description: string;
  squareFootage: number;
  plottedArea?: number;
  builtUpArea?: number;
  propertyImages: string[];
  address: Address;
  specificAddress?: string;
  areaType: string[];
  amenities: Amenities;
  propertyOffPlan?: {
    offplan?: boolean;
    propertyCompletionDate?: string;
  };
  slug: Slug;
  location?: {
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
  developer?: Developer;
  paymentPlans?: PaymentPlan[];
  mainProjectImage: string;
  totalPrice: number;
  description: string;
  presentation: string;
  projectImages: string[];
  areaType: string[];
  amenities: Amenities;
  projectType: string;
  numFloors?: number;
  numUnits?: number;
  numOfHouses?: number;
  bedrooms?: string[];
  slug: Slug;
  address: Address;
  specificAddress: string;
  averagePrice?: number[];
  projectBuiltUpArea?: number[];
  location?: {
    lat?: number;
    lng?: number;
  };
  projectOffPlan?: {
    offplan?: boolean[];
    completionDate?: Date[];
    properties?: Property[];
  };
  projectReadyToBuy?: {
    offplan?: boolean[];
    completionDate?: Date[];
    properties?: Property[];
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

export interface Developer {
  id: string;
  _id: string;
  createdAt?: Date;
  name: string;
  logo?: string;
  description?: string;
  website?: Url;
  averagePricing?: number[];
  developerBuiltUpArea?: number[];
  addresses?: Address[];
  propertyTypes?: string[];
  projects?: Project[];
  areaType?: string[];
  slug: Slug;
  mainDeveloperImage: string;
  developerImages: string[];
}

export interface PaymentPlan {
  _id: string;
  createdAt?: Date;
  name: string;
  type: string;
  reference: string;
  description?: string;
  validity?: any;
  timeline?: any[];
  amountType: string;
  amountAbsolute?: number;
  amountPercentage?: number;
  interestRate?: number;
  penalty?: any;
  developer?: Developer;
  project?: Project;
  properties?: Property[];
}

export interface Image {
  asset: {
    _id: string;
    url: string;
  };
  caption?: string;
}

export interface Text {
  _en: string;
  _ar: string;
}

export interface Url {
  _en: string;
  _ar: string;
}

export interface Address {
  street: string;
  city: string;
  reference: string;
}

export interface Slug {
  current: String;
}

export interface Amenities {
  name: string;
  amenities: string[];
  reference: string;
}
