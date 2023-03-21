import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GeneralImageCard from '../../general/GImageCard';
// import OtherHousesIcon from '@mui/icons-material/OtherHouses';

interface TripImageCardProps {
  title: string;
  title1: string; 
  title2: string;
  title3: string;
  description: string;
  description1: string;
  description2: string;
  description3: string;
  buttonText1?: string;
  buttonText2?: string;
  buttonText3?: string;
  buttonOnClick1?: () => void;
  buttonOnClick2?: () => void;
  buttonOnClick3?: () => void;
  image1: string;
  image2: string;
  image3: string;
  sx?: React.CSSProperties;
};

const TripImageCard: React.FC<TripImageCardProps> = ({
  title,
  description,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
  buttonText1,
  buttonText2,
  buttonText3,
  image1,
  image2,
  image3, 
  buttonOnClick1,
  buttonOnClick2,
  buttonOnClick3,
}) => {
  const muiTheme = useTheme();

  const mainContainer = {
    textAlign: 'center',
    justifyContent: 'center',
  };

  const titleBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3rem',
  };

  // const logo = {
  //   color: muiTheme.palette.primary.dark,
  //   fontSize: '3rem',
  //   boxShadow: '0px 2px 5px rgba(0, 0, 0, 1)',
  //   mr: '1rem',
  // };

  const titleStyles = {
    fontWeight: 'bold',
    color: muiTheme.palette.secondary.dark,
    justifyContent: 'center',
  };

  const cards = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    ml: '-4.5rem',
  };

  const innerCard = {

  };

  const descriptionStyles = {

  };

  return (
    <Box sx={mainContainer}>
      <Box sx={titleBox}>
        {/* <OtherHousesIcon sx={logo} /> */}
        <Typography variant='h4' component='div' sx={titleStyles}>
          {title}
        </Typography>
        <Typography variant='h6' component='div' sx={descriptionStyles}>
            {description}
        </Typography>
      </Box>

      <Box sx={cards}>
        <GeneralImageCard
          title={title1}
          description={description1}
          buttonText={buttonText1}
          buttonOnClick={buttonOnClick1}
          image={image1}
          sx={innerCard}
        />
        <GeneralImageCard
          title={title2}
          description={description2}
          buttonText={buttonText2}
          buttonOnClick={buttonOnClick2}
          image={image2}
          sx={innerCard}
        />
        <GeneralImageCard
          title={title3}
          description={description3}
          buttonText={buttonText3}
          buttonOnClick={buttonOnClick3}
          image={image3}
          sx={innerCard}
        />
      </Box>
    </Box>
  );
}

export default TripImageCard