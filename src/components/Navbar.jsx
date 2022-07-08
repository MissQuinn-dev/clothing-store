import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import ComboBox from './ComboBox';
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

export const Navbar = () => {
  const { categoryArray } = useGlobalContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Link onClick={handleMenuClose} to="/" style={{ textDecoration: 'none' }}>
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link onClick={handleMenuClose} to="/products" style={{ textDecoration: 'none' }}>
          Products
        </Link>
      </MenuItem>
      <MenuItem>
        <Link onClick={handleMenuClose} to="/cartcontainer" style={{ textDecoration: 'none' }}>
          Cart
        </Link>
      </MenuItem>
      <MenuItem>
        <Link onClick={handleMenuClose} to="/checkout" style={{ textDecoration: 'none' }}>
          Check Out
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 10 new items" color="inherit">
          <Badge badgeContent={10} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <Link
          m={8}
          onClick={handleMenuClose}
          to="/"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          to="/products"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Products
        </Link>
      </MenuItem>

      <MenuItem>
        <Link
          onClick={handleMenuClose}
          to="/checkout"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Check Out
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          to="/cartcontainer"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <IconButton size="large" aria-label="show 13 new items" color="inherit"></IconButton>
          <Badge badgeContent={13} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" style={{ marginTop: 100 }}>
      <AppBar>
        <Toolbar>
          <NavDrawer />

          <Search>
            <ComboBox />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {categoryArray.map(({ category, id }) => (
              <Button
                key={id}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {category}
              </Button>
            ))}
            <IconButton size="large" aria-label="show 4 new items" color="inherit">
              <Badge badgeContent={13} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
