import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {Theme} from '@mui/material/styles';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {RouteItems} from '../../utils/RouteItems';

function capitalizeFirstAndLast(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toLowerCase();
}

function NavBar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [serviceSubMenuOpen, setServiceSubMenuOpen] = useState(false);

  const handleServiceSubMenuClick = () => {
    setServiceSubMenuOpen(!serviceSubMenuOpen);
  };

  const handleMobileDrawerOpen = () => {
    setMobileDrawerOpen(true);
  };

  const handleMobileDrawerClose = () => {
    setMobileDrawerOpen(false);
  };

  const handleServiceMouseOver = () => {
    setServiceSubMenuOpen(true);
  };

  const handleServiceMouseLeave = () => {
    setServiceSubMenuOpen(false);
  };

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div>
      <AppBar position="fixed" sx={{
        overflow: 'hidden', top: 0, width: '100%', zIndex: 1050,
        transition: 'color 0.1s linear 0s',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}>
        <Toolbar sx={{
          display: {xs: 'block', sm: 'flex', md: 'flex'},
          justifyContent: 'space-between',
          justifyItems: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center"
        }}>
          <Stack sx={{
            display: 'flex',
            justifyContent: "center",
          }}>
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileDrawerOpen}>
                <MenuIcon />
              </IconButton>
            ) : null}
            {!isMobile && (
              <Box pt={1} component={Link} to="/">
                <img src="../../assets/logo/log2.png" alt="Logo" height="50" />
              </Box>
            )}
          </Stack>

          <Box sx={{textAlign: "center", pt: 1, my: 2}}>
            {!isMobile &&
              RouteItems.map((item) => (
                <React.Fragment key={item.id} >
                  {!item.children ? (
                    <Button color="inherit" sx={{fontSize: "md", fontWeight: 600, }}
                      component={Link} to={item.path}>
                      {capitalizeFirstAndLast(item.name)}
                    </Button>
                  ) : (
                    <Button
                      color="inherit"
                      onMouseOver={handleServiceMouseOver}
                      onMouseLeave={handleServiceMouseLeave}
                      onClick={handleServiceSubMenuClick}>
                      {item.name}
                      {serviceSubMenuOpen ? (
                          <KeyboardArrowDownIcon sx={{fontSize: 16}} />
                      ) : (
                            <ArrowForwardIosIcon sx={{fontSize: 16}} />
                      )}
                    </Button>
                  )}
                </React.Fragment>
              ))}

            <div>
              {isMobile ? null : (
                <React.Fragment>
                  <Drawer
                    anchor="top"
                    open={serviceSubMenuOpen}
                    onClose={() => setServiceSubMenuOpen(false)}
                    onMouseOver={handleServiceMouseOver}
                    onMouseLeave={handleServiceMouseLeave}>
                    <Stack
                      height={400}
                      width={"full"}
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                    >
                      <List sx={{backgroundColor: '#171923', width: "100%", pt: 4, px: 1}}>
                        {RouteItems.find((item) => item.id === 3)?.children?.map((subItem) => (
                          <ListItem
                            key={subItem?.name}
                            component={Link}
                            sx={{
                              ml: 3,
                              textDecoration: "none", color: '#718096',
                              textTransform: 'uppercase', width: '92%',



                              '&:hover': {
                                backgroundColor: 'rgba(12, 0, 10, 0.4)',
                                color: "#EDF2F7",
                                transform: 'scale(1.1)',
                              }, transition: 'transform 0.3s ease',
                            }}
                            to={`/produit/${subItem?.path}`}
                            onClick={() => setServiceSubMenuOpen(false)}>
                            <LocalDiningIcon />
                            <Typography sx={{fontWeight: "600", fontSize: 16, mx: 4}}>
                              {subItem?.name}
                            </Typography>
                            <ArrowForwardIcon />
                          </ListItem>
                        ))}
                      </List>
                      <Box
                        textAlign={"center"}
                        sx={{
                          bgcolor: "#171923",
                          width: "100%",
                          alignItems: "center",
                          height: '100%',
                          imageRendering: "optimizeQuality",
                          textAlign: "center",
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundImage: 'url("../../assets/menu/beef-grelhado1.jpg")',
                        }}
                      />
                    </Stack>
                  </Drawer>
                </React.Fragment>
              )}
            </div>
          </Box>
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon sx={{fontSize: 32, color: "#fff"}} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={isMobile ? 'right' : 'top'}
        open={mobileDrawerOpen}
        onClose={handleMobileDrawerClose}
        sx={{bgcolor: "#fff"}}>

        <List>
          {RouteItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.children ? (
                <div>
                  <ListItem onClick={handleServiceSubMenuClick}>
                    <ListItemText primary={item.name} />
                    {item.id === 3 && (
                      <ListItemIcon>
                        {serviceSubMenuOpen ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <ArrowForwardIosIcon />
                        )}
                      </ListItemIcon>
                    )}
                  </ListItem>
                  {item.id === 3 && (
                    <Collapse in={serviceSubMenuOpen} timeout="auto" unmountOnExit>
                      <List>
                        {item.children.map((subItem) => (
                          <ListItem
                            key={subItem?.name}
                            component={Link}
                            to={`/produit/${subItem?.path}`}
                            onClick={handleMobileDrawerClose}
                            sx={{textDecoration: "none", color: '#2D3748', }}>
                            <ListItemText sx={{ml: 2, }}>{subItem?.name}</ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </div>
              ) : (
                  <ListItem
                  component={Link}
                  to={item.path}
                  onClick={handleMobileDrawerClose}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

    </div>
  );
}

export default NavBar;
