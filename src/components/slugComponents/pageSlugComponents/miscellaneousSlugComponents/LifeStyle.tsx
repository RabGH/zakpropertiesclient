import React from "react";
import { Box, Typography, Link } from "@mui/material";

interface LifeStyleProps {
  areaType: string[];
}

const LifeStyle = ({ areaType }: LifeStyleProps) => {
  return (
    <Box sx={{ margin: "auto 0", textAlign: "left" }}>
      <Typography variant="h3" sx={{ mb: "1rem" }}>
        Life Style
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          alignItems: "flex-start",
        }}
      >
        {areaType && areaType.length > 0 ? (
          areaType.map((type, i) => (
            <Link
              key={i}
              href={"/buyProperties"}
              variant="body1"
              sx={{ cursor: "pointer", mr: "3rem" }}
              color="primary"
            >
              {type}
            </Link>
          ))
        ) : (
          <Typography variant="body1">No Life Styles</Typography>
        )}
      </Box>
    </Box>
  );
};

export default LifeStyle;
