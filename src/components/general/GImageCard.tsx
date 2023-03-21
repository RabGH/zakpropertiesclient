import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image'

interface Props {
  title: string;
  description: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  image: string;
  sx?: React.CSSProperties;
}

const GeneralImageCard: React.FC<Props> = ({
  title,
  description,
  buttonText,
  buttonOnClick,
  image,
}) => {
  const muiTheme = useTheme();


  const mainContainer = {
    height: '60vh',
  };

  const mainCard = {
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    // boxShadow: '0px 2px 5px rgba(0, 0, 0, 1)',
    ml: '10rem',
    backgroundColor: muiTheme.palette.primary.dark,
    transition: 'background-color 1s ease, box-shadow 1s ease',
    '&:hover': {
      backgroundColor: muiTheme.palette.primary.light,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    }
  };

  const cardMedia = {
    height: '400px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 1)',
  };

  const cardContent = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    zIndex: 1,
  };

  const cardTitle = {
    paddingBottom: '1rem',
    transition: 'color 1s ease',
    color: muiTheme.palette.secondary.light,
    fontWeight: 'bold',
    '&:hover': {
      color: 'white'
    },
  };

  const cardDescription = {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'white',
    flexGrow: 1,
  };

  const linkButton = {
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      color: muiTheme.palette.secondary.main,
    },
  };

  const actionButton = {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '1rem',
  };

  return (
    <Box sx={mainContainer}>
      <Card sx={mainCard}>
        <CardActionArea>
          <Image
            src={image}
            alt=""
            layout="responsive"
            width={400}
            height={400}
          />
          <CardContent sx={cardContent}>
            <Typography gutterBottom variant="h5" component="div" sx={cardTitle}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={cardDescription}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={actionButton}>
          <Button size="medium" sx={linkButton} onClick={buttonOnClick}>
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default GeneralImageCard;
