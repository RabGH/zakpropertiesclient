import PropertyCardSlug from './PropertyCardSlugs'
import { sanityClient } from '../../../../../sanity';
import { PropertyProps } from '../../../../../types'

interface PropertyCardDataProps {
    properties?: PropertyProps[];
}

export default function PropertyCardDataSlug({ properties }: PropertyCardDataProps) {
    return <PropertyCardSlug properties={properties} />;
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