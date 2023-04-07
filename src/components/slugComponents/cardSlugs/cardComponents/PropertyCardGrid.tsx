import React, { useState } from "react";
import { Box, Grid, Pagination, useTheme } from "@mui/material";
import { Property } from "../../../../../lib/types";
import PropertyCard from "../PropertyAllSlugs";

interface Props {
  properties: Property[];
}

const PropertyCardGrid: React.FC<Props> = ({ properties }) => {
  const [page, setPage] = useState(1); // initial page number

  const cardsPerPage = 9; // number of cards to show per page

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const numPages = Math.ceil(properties.length / cardsPerPage); // calculate total number of pages

  const theme = useTheme();

  const mainBox = {
    height: "185vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const paginationBox = {
    display: "flex",
    justifyContent: "center",
    mt: 2,
  };

  const paginationStyles = {
    color: theme.palette.primary.dark,
    "& .Mui-selected": {
      color: theme.palette.primary.main, // set selected page color
      backgroundColor: theme.palette.success.light, // set selected page background color
    },
  };

  const cardGridStyles = {
    width: "100%",
    maxWidth: "1300px",
  };

  const propertyCardBox = {
  };

  return (
    <Box sx={mainBox}>
      <Box sx={cardGridStyles}>
        <Grid container spacing={1} justifyContent="center">
          {properties
            .slice((page - 1) * cardsPerPage, page * cardsPerPage) // slice the properties array based on the current page number
            .map((property) => (
              <Grid item xs={12} sm={8} md={4} key={property._id}>
                <Box sx={propertyCardBox}>
                  <PropertyCard property={property} />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={paginationBox}>
        <Pagination
          count={numPages}
          page={page}
          onChange={handleChangePage}
          sx={paginationStyles}
        />
      </Box>
    </Box>
  );
};

export default PropertyCardGrid;
