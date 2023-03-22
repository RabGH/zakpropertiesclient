export interface PropertyProps {
    _id: string;
    title: string;
    propertyType: string;
    mainImage: string;
    totalPrice: number;
    bathrooms: number;
    bedrooms: number;
    description: string;
    squareFootage: number;
    plottedArea: number;
    builtUpArea: number;
    images: string[];
    amenities: string[];
    slug: {
            current: string;
          }
  
    location: {
      lat?: number;
      lng?: number;
    };
}

interface Property {
    _id: string;
    title: string;
    propertyType: string;
    mainImage: string;
    totalPrice: number;
    bathrooms: number;
    bedrooms: number;
    description: string;
    squareFootage: number;
    plottedArea: number;
    builtUpArea: number;
    images: string[];
    amenities: string[];
}

export interface PageContext {
    query: {
        slug: string;
    }
}

export interface ProjectProps {
    _id: string;
    title: string;
    development: string[];
    mainImage: string;
    totalPrice: number;
    description: string;
    squareFootage: number;
    images: string[];
    amenities: string[];
    properties: Property[];
    
    slug: {
        current: string;
    };
  
    location: {
      lat?: number;
      lng?: number;
    };
}