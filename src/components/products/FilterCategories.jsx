import React from 'react';
import Button from '@mui/material/Button';

const FilterCategories = ({ pages }) => {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          // onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default FilterCategories;
