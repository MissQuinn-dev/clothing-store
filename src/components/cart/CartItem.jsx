import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { useApi } from '../../hooks/useApi';
import { useGlobalContext } from '../../context';

const CartItem = ({ id, title, price, image, category, description }) => {
  const { cart, cartId, fetchData } = useGlobalContext();
  const [product, setProduct] = useState('');
  const request = useApi();

  const getProduct = async () => {
    try {
      const response = await request.get(`products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, [id]);

  const addToCart = async () => {
    try {
      await request.patch(`carts/${cartId}`, {
        products: [...cart, product],
      });
      return await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async () => {
    try {
      await request.patch(`carts/${cartId}`, {
        products: [...cart, (product -= product)],
      });
      return await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <List sx={{ width: '100%', maxWidth: '51%' }}>
        <Card>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <ListItem>
              <Grid item xs>
                <ListItemAvatar>
                  <Avatar alt={title} src={image} sx={{ width: 58, height: 58 }} />
                </ListItemAvatar>
              </Grid>
              <Grid item container xs justifyContent={'center'} direction="column">
                <Grid item container justifyContent={'center'}>
                  <Typography variant="h5" align="center">
                    {title}
                  </Typography>
                </Grid>
                <Grid item container justifyContent={'center'}>
                  <Typography align="center" variant="body1">
                    {description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs justifyContent={'flex-end'}>
                <ButtonGroup orientation="vertical" variant="string">
                  <Tooltip title="Add" placement="left">
                    <IconButton onClick={() => addToCart()}>
                      <KeyboardArrowUpRoundedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Item Total" placement="left">
                    <Button disableRipple disableFocusRipple>
                      {price}
                    </Button>
                  </Tooltip>
                  <Tooltip title="Remove Item" placement="left">
                    <IconButton onClick={() => removeFromCart()}>
                      <KeyboardArrowDownRoundedIcon />
                    </IconButton>
                  </Tooltip>
                </ButtonGroup>
              </Grid>
            </ListItem>
          </Grid>
        </Card>
      </List>
    </React.Fragment>
  );
};
export default CartItem;
