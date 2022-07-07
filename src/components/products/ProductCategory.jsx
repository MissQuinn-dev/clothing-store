import React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Box";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  "&:hover": {
    backgroundColor: pink[700],
  },
}));

const ProductCategory = ({ category, image }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container style={{ minHeight: 400 }} direction="row">
        <Card style={{ maxWidth: "100%" }}>
          <CardContent>
            <CardMedia
              component="img"
              alt={category}
              image={image}
              style={{ maxHeight: 400 }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                right: "5%",
                transform: "translateX(-20%)",
              }}
            >
              <CardActions>
                <ColorButton variant="contained" size="large" color="success">
                  {category}
                </ColorButton>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default ProductCategory;
