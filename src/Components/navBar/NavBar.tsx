import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {RouteItems} from '../../utils/RouteItems';

function capitalizeFirstAndLast(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toLowerCase();
}

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
      <AppBar position="static" sx={{bgcolor: "#09090A"}}>
        <Toolbar sx={{
          display: 'flex',
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
                <img src="/public/assets/logo/log2.png" alt="Logo" height="50" />
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
                        <KeyboardArrowDownIcon sx={{fontSize: 16}} /> // Ajuste o tamanho conforme necessário
                      ) : (
                        <ArrowForwardIosIcon sx={{fontSize: 16}} /> // Ajuste o tamanho conforme necessário
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
                    onMouseLeave={handleServiceMouseLeave}
                  >
                    <Stack
                      height={400}
                      width={"full"}
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}
                    >
                      <List sx={{bgcolor: "gray", width: "100%"}}>
                        {RouteItems.find((item) => item.id === 3)?.children?.map((subItem) => (
                          <ListItem
                            key={subItem.name}
                            component={Link}
                            to={`/produit/${subItem.path}`}
                            onClick={() => setServiceSubMenuOpen(false)}>
                            <ListItemText primary={subItem.name} />
                          </ListItem>
                        ))}
                      </List>
                      <Box
                        textAlign={"center"}
                        sx={{
                          bgcolor: "#171923",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Typography textAlign={"center"} variant="h2" color={"white"}>
                          IMAGE
                        </Typography>
                      </Box>
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
        anchor="left"
        open={mobileDrawerOpen}
        onClose={handleMobileDrawerClose}
        sx={{bgcolor: "#171923"}}>

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
                            key={subItem.name}
                            component={Link}
                            to={`/produit/${subItem.path}`}
                            onClick={handleMobileDrawerClose}
                          >
                            <ListItemText primary={subItem.name} />
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
    </div >
  );
}

export default NavBar;
