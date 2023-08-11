export interface Developer {
  _id: string;
  name: string;
  createdAt?: Date;
  logo?: string;
  mainDeveloperImage: string;
  developerImages: string[];
  description?: string;
  website?: Url;
  developerDevelopments: Development[];
  slug: Slug;
}

export interface Development {
  _id: string;
  title: string;
  description: string;
  createdAt?: Date;
  location?: {
    lat?: number;
    lng?: number;
  };
  developmentPropertyTypes: string[];
  mainDevelopmentImage: string;
  developmentImages: string[];
  developmentsDeveloper: Developer;
  offplanProjects: Project[];
  readyProjects: Project[];
  developmentAveragePrice: number[];
  addresses: Address[];
  developmentBuiltUpArea: number[];
  bulletPoints: string[];
  developmentAmenities: DevelopmentAmenities;
  presentation: string;
  slug: Slug;
}

export interface DevelopmentAmenities {
  name: string;
  developmentsAmenities: string[];
}

export interface DevelopmentProps extends Development {
  development: Development;
  developments: Development[];
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  createdAt?: Date;
  location?: {
    lat?: number;
    lng?: number;
  };
  projectPropertyTypes: string[];
  mainProjectImage: string;
  projectImages: string[];
  projectDeveloper?: Developer;
  projectAreaTypes: string[];
  totalPrice: number;
  averagePrice?: number[];
  address: Address;
  specificAddress: string;
  projectBuiltUpArea?: number[];
  projectType: string;
  numFloors?: number;
  numUnits?: number;
  numOfHouses?: number;
  bedrooms?: string[];
  projectAmenities: ProjectAmenities;
  presentation: string;
  projectDevelopment: Development;
  propertiesOffPlan: Property[];
  propertiesReadyToBuy: Property[];
  paymentPlans?: PaymentPlan[];
  slug: Slug;
}

export interface ProjectAmenities {
  name: string;
  projectsAmenities: string[];
}

export interface ProjectProps extends Project {
  project: Project;
  projects: Project[];
}

export interface Property {
  _id: string;
  title: string;
  createdAt?: Date;
  location?: {
    lat?: number;
    lng?: number;
  };
  address: Address;
  specificAddress?: string;
  propertyAreaTypes: string[];
  propertyType: string;
  mainPropertyImage: string;
  propertyImages: string[];
  totalPrice: number;
  builtUpArea: number;
  plottedArea?: number;
  propertyOffPlan?: {
    offplan?: boolean;
    propertyCompletionDate?: string;
  };
  propertyAmenities: PropertyAmenities;
  bedrooms: number;
  bathrooms: number;
  description: string;
  projectId: Project;
  paymentPlan?: PaymentPlan;
  slug: Slug;
}

export interface PropertyAmenities {
  name: string;
  propertiesAmenities: string[];
}

export interface PropertyProps extends Property {
  property: Property;
  properties: Property[];
}

export interface PaymentPlan {
  _id: string;
  name: string;
  type: string;
  customType?: string;
  paymentPlanPoints: string[];
}

export interface Image {
  asset: {
    _id: string;
    url: string;
  };
  caption?: string;
}

export interface Address {
  street: string;
  city: string;
}

export interface PageContext {
  query: {
    slug: string;
  };
  params: {
    slug: string;
  };
}

export interface Text {
  _en: string;
  _ar: string;
}

export interface Url {
  _en: string;
  _ar: string;
}

export interface Slug {
  current: string;
}
