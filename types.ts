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

export interface Project {
    _id: string;
    title: string;
    development: string[];
    mainProjectImage: string;
    totalPrice: number;
    description: string;
    squareFootage: number;
    images: string[];
    amenities: string[];

    properties: {
      properties: Property[];
  };
    
    slug: {
        current: string;
    };
  
    location: {
      lat?: number;
      lng?: number;
    };
}