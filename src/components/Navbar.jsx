import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import NavDrawer from './NavDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ComboBox from './ComboBox';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.4),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, setUserInfo, userInfo } = useGlobalContext();
  return (
    <Box style={{ marginTop: 100 }}>
      <AppBar>
        <Toolbar>
          <NavDrawer />
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography sx={{ color: '#000' }} variant="h6">
              BunNeed
            </Typography>
          </Link>
          <Search>
            <ComboBox />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex' } }}>
            <div>
              {!userInfo.userId ? (
                <Button
                  sx={{ color: '#000', display: { xs: 'none', sm: 'block' } }}
                  onClick={() => navigate('/login')}
                >
                  <Typography variant="h6">Login</Typography>
                </Button>
              ) : (
                <Grid container>
                  <Grid>
                    <Button
                      sx={{ color: '#000', display: { xs: 'none', sm: 'block' } }}
                      onClick={() => {
                        setUserInfo({});
                        navigate('/');
                      }}
                    >
                      <Typography variant="h6">Logout</Typography>
                    </Button>
                  </Grid>
                  <Grid>
                    <IconButton
                      onClick={() => navigate('/cart')}
                      size="large"
                      aria-label="shows the amount in the cart"
                      color="inherit"
                    >
                      <Badge badgeContent={cart.length} color="primary">
                        <ShoppingCartOutlinedIcon />
                      </Badge>
                    </IconButton>
                  </Grid>
                </Grid>
              )}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
