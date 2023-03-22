import HomeCardSlug from './PropertyCardSlugs'
import { sanityClient } from '../../../../../sanity';

interface Property {
    _id: string;
    title: string;
    mainImage?: string;
    slug: {
      current: string;
    }
    propertyType: string;
    totalPrice: number;
    squareFootage: number;
}

interface CardDataProps {
    properties?: Property[];
}

export default function CardDataSlug({ properties }: CardDataProps) {
    return <HomeCardSlug properties={properties} />;
  }

export async function getServerSideProps() {
const query = '*[ _type == "property"]';
const properties = await sanityClient.fetch(query);

if (!properties.length) {
    return {
    props: {
        properties: [],
    },
    };
} else {
    return {
    props: {
        properties,
    },
    };
}
}