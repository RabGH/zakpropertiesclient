import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface GeneralCardProps {
  title: string;
  imageSrc: string;
  content: string;
}

const GeneralCard: React.FC<GeneralCardProps> = ({
  title,
  imageSrc,
  content,
}) => {
  return (
    <Card>
      <CardMedia component="img" src={imageSrc} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GeneralCard;
