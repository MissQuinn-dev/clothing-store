import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import NavDrawer from './NavDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import ComboBox from './ComboBox';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.4),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Navbar = () => {
  const { categoryArray, cart } = useGlobalContext();

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" style={{ marginTop: 100 }}>
      <AppBar>
        <Toolbar>
          <NavDrawer />
          <Typography variant="h5">BunNeed</Typography>
          <Search>
            <ComboBox />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {categoryArray.map(({ category, id }) => (
              <Button key={id} sx={{ my: 2, color: 'black', display: 'block' }}>
                {category}
              </Button>
            ))}
            <IconButton size="large" aria-label="shows the amount in the cart" color="inherit">
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
