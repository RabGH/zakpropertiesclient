import { GetServerSideProps } from 'next';
import { PropertyProps } from '../../../types';
import { sanityClient } from '../../../sanity';

interface PropertyPageProps {
  properties: PropertyProps[];
}

export const getServerSideProps: GetServerSideProps<PropertyPageProps> = async () => {
  const query = '*[_type == "property"]';
  const properties = await sanityClient.fetch(query);

  return {
    props: {
      properties,
    },
  };
};
