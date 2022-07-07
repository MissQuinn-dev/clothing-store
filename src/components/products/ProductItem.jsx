import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ProductItem = ({ id, title, price, category, description, image }) => {
  return (
    <Grid item xs={3}>
      <Card style={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={title}
          image={image}
          style={{ height: 300 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{category}</Button>
          <Button href={`/product/${id}`} size="small">
            learn more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
