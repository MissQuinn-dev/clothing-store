import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  '&:hover': {
    backgroundColor: pink[400],
  },
}));

const ProductCategory = ({ category, image }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid container style={{ minHeight: 400 }} direction="row">
        <CardContent>
          <CardMedia component="img" alt={category} image={image} style={{ maxHeight: 405 }} />
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '5%',
            }}
          >
            <CardActions>
              <ColorButton
                onClick={() => navigate(`../products/category/${category}`, { replace: true })}
                variant="contained"
                size="large"
              >
                {category}
              </ColorButton>
            </CardActions>
          </div>
        </CardContent>
      </Grid>
    </React.Fragment>
  );
};
export default ProductCategory;
