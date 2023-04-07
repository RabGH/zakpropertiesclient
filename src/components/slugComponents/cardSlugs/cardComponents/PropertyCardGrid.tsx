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
    minHeight: "100vh",
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
    "& .MuiPaginationItem-root": {
      color: theme.palette.primary.dark,
    },
    "& .Mui-selected": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.success.light,
    },
    mb: "5rem",
  };

  const cardGridStyles = {
    width: "100%",
    maxWidth: "1300px",
  };

  const gridStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const propertyCardBox = {
    flexGrow: 1,
    flexBasis: "33%",
    maxWidth: "420px",
  };

  return (
    <Box sx={mainBox}>
      <Box sx={cardGridStyles}>
        <Grid container spacing={1} justifyContent="center" sx={gridStyles}>
          {properties
            .slice((page - 1) * cardsPerPage, page * cardsPerPage) // slice the properties array based on the current page number
            .map((property) => (
              <Box sx={propertyCardBox} key={property._id}>
                <PropertyCard property={property} />
              </Box>
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
