import './index.css'
import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Paper,
  CardContent,
  Grid,
  ThemeProvider,
  createTheme,
  IconButton,
  Button,
  Link,
  Tabs,
  Tab,
  Card,
  CardMedia,
  Rating,
  CardActions,
  Divider,
  Badge,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Drafts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#ffc1cc',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [rating1, setRating1] = React.useState(null);
  const [rating2, setRating2] = React.useState(null);
  const [rating3, setRating3] = React.useState(null);
  const [rating4, setRating4] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar با Material-UI */}
        <AppBar
          position="fixed"
          sx={{
            background: "rgba(217, 165, 138, 0.2)",
            backdropFilter: "blur(10px)",
            padding: "10px 0",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(217, 165, 138, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15)",
            borderBottom: "1px solid rgba(155, 155, 155, 0.12)",
          }}
        >
          <Toolbar>
            <Container maxWidth="xl">
              <Toolbar
                disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href="/">
                  <Avatar
                    sx={{
                      filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
                      mr: 3
                    }}
                    alt="Logo"
                    src="/img/Logo.png"
                  />
                </Link>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 5,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "fantasy",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                  }}
                ></Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: "center" }}>
                          {page}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "#360909",
                    textDecoration: "none",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Korean Skin Care
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "#360909",
                        display: "block",
                        marginRight: 8,
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton sx={{ padding: '0 15px' }} onClick={handleOpenUserMenu}>
                      <Avatar
                        alt="User Avatar"
                        src="/img/avatar.jpg"
                      />
                    </IconButton>
                    <Badge>
                        <ShoppingCartIcon color='secondary' />
                    </Badge>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: "center" }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            height: "100vh",
            backgroundImage: "url(/img/1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <CardContent
              sx={{ p: 3, display: "inline-flex", flexDirection: "column" }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  color: "#331F00",
                  padding: "10px 40px 10px 10px",
                  borderRadius: 2,
                  display: "inline-block",
                  fontWeight: "bold",
                  mb: 2,
                  filter: 'drop-shadow(5px 5px 5px #E6CE9D)',
                }}
              >
                Natural Beauty Care
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "#E1C69F",
                  fontWeight: "bold",
                  fontSize: { xs: "2rem" },
                  borderRadius: 2,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  mb: 3,
                  padding: "5px 40px 5px 10px",
                }}
              >
                Skin & Body Care
              </Typography>
              <Box className="w-28 h-28 rounded-full relative left-7 bg-yellow-100 hover:bg-amber-200 shadow-xl-30 flex items-center justify-center font-bold transition ease-in delay-150 duration-100">
                <Typography>
                  Shop Now!
                </Typography>
              </Box>
            </CardContent>
          </Container>
        </Box>
        {/* Services Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              mb: 5, textAlign: "center", color: "#1B1A1A", fontSize: {
                xs: '1rem',
                sm: '1.2rem',
                md: '1.7rem',
              },
            }}
          >
            “The lace trim adds a luxurious touch to the luxe fabric design; better still, it’s made with recycled lace as a more sustainable option.”
          </Typography>
          <Grid container alignItems="center" justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'space-between',
            lg: 'space-between',
          }} spacing={4} >
            <Grid item xs={12} md={3}>
              <img src="img/art1.png" width={150} alt="num1" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="img/art2.png" width={150} alt="num2" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="img/art3.png" width={150} alt="num3" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="img/art4.png" width={150} alt="num4" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="img/art5.png" width={150} alt="num5" />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center" spacing={3} sx={{ marginTop: 15, mb: 4 }}>
            <Grid item xs={12} md={3}>
              <Box component="img" src="img/poster1.png" sx={{ borderRadius: 4, boxShadow: 3 }} width={350} alt="num6" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box component="img" src="img/poster2.png" sx={{ borderRadius: 4, boxShadow: 3 }} width={350} alt="num7" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box component="img" src="img/poster3.png" sx={{ borderRadius: 4, boxShadow: 3 }} width={350} alt="num8" />
            </Grid>
          </Grid>
        </Container>
        {/* Trending Products Section */}
        <Container maxWidth="lg" sx={{ py: 6, mb: 4 }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "#2C2B2B", fontWeight: 'bold' }}
            >
              Trending Products
            </Typography>
            <Grid container alignItems="center" justifyContent="center" spacing={3} sx={{ marginTop: 5, mb: 4 }}>
              <Tabs
                value={value}
                onChange={handleChange}
              >
                <Tab value="one" label="New Products" />
                <Tab value="two" label="Top Selling" />
                <Tab value="three" label="Featured" />
              </Tabs>
            </Grid>
          </Box>
        </Container>
        <Grid container alignItems="center" justifyContent="center" spacing={3} sx={{ mb: 20 }}>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/nail.png"
                title="Nail Polish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'>
                  Vernis à Ongles Nail Polish
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-1"
                    value={rating1}
                    onChange={(event, newRating) => {
                      setRating1(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $50.00 - <Box component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>$60.00</Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/fundation.png"
                title="Nail Polish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ":hover": {
                      overflow: 'visible',
                      textOverflow: 'clip',
                      whiteSpace: 'normal',
                    }
                  }}
                >
                  Estée Lauder Double Wear Weightless Liquid Foundation
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-2"
                    value={rating2}
                    onChange={(event, newRating) => {
                      setRating2(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $60.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/pouder.png"
                title="Powder"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ":hover": {
                      overflow: 'visible',
                      textOverflow: 'clip',
                      whiteSpace: 'normal',
                    }
                  }}>
                  Charlotte Tilbury Airbrush Flawless Finish Setting Powder
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-3"
                    value={rating3}
                    onChange={(event, newRating) => {
                      setRating3(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $65.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/eye.png"
                title="eye Cream"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ":hover": {
                      overflow: 'visible',
                      textOverflow: 'clip',
                      whiteSpace: 'normal',
                    }
                  }}
                >
                  Clinique All About Eyes Cream-Gel Eye Cream
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-4"
                    value={rating4}
                    onChange={(event, newRating) => {
                      setRating4(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $50.00-$45.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* body description section */}
        <Grid container spacing={{xs: 2}} className="bg-[#f9f6f1]">
          {/* Image side */}
          <Grid item xs={12} md={6}
          className='w-4xl'
            component="img"
            src='/img/left.png'>
          </Grid>
          {/* Text side */}
          <Grid
            item
            xs={12}
            md={6}
            className="m-auto"
          >
            <Typography variant="h4" className="text-[#2F2F2F] font-light mb-4">
              Be your own <br /> kind of <br /> beautiful
            </Typography>

            <Typography className="text-[#d97d54] text-lg font-semibold tracking-wider py-4 mb-4">
              60 : 23 : 32 : 17
            </Typography>

            <Typography className="text-gray-500 max-w-md py-3 mb-6">
              Made using clean, non-toxic ingredients, our products are designed for every.
            </Typography>

            <Button
              variant="contained"
              sx={{ marginBottom: { xs: 4, md: 6 } }}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full normal-case"
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} className="bg-white">
          {/* Text side */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ order: { xs: 2, md: 2, lg: 1 } }}
            className="flex flex-col justify-center text-center m-auto"
          >
            <Typography variant="h4" className="py-6 text-[#2F2F2F]">
              About Our <br /> Iconic Products
              <hr />
            </Typography>

            <Typography className="text-gray-600 py-4 leading-relaxed">
              We have skincare, body, wellbeing products and  <br />  amazing fragrance range.
              All made with love in France.
              <br />
            </Typography>

            <div className="space-y-2 mt-4 text-gray-700">
              <hr />
              <p><strong>THAT'S WHY:</strong> We create special products.</p>
              <p><strong>WE ALWAYS:</strong> Take care about every details.</p>
              <p><strong>FOR WHO:</strong> Who always desire be beautiful.</p>
            </div>
          </Grid>

          {/* Image side */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1, lg: 2 } }}>
            <Box
              component="img"
              src="/img/right4.jpg"
              alt="Product"
              className="w-5xl object-cover"
            />
          </Grid>
        </Grid>

        {/* Special Products */}
        <Container maxWidth="lg" sx={{ py: 6, mb: 4 }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "#2C2B2B", fontWeight: 'bold', marginTop: '35px' }}
            >
              Special Products
            </Typography>
          </Box>
        </Container>
        <Grid container alignItems="center" justifyContent="center" spacing={3} sx={{ mb: 20 }}>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/nail.png"
                title="Nail Polish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'>
                  Vernis à Ongles Nail Polish
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-1"
                    value={rating1}
                    onChange={(event, newRating) => {
                      setRating1(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $50.00 - <Box component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>$60.00</Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/illusion.jpg"
                title="illusion"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ":hover": {
                      overflow: 'visible',
                      textOverflow: 'clip',
                      whiteSpace: 'normal',
                    }
                  }}
                >
                  Estée Lauder Double Wear Weightless Liquid Foundation
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-2"
                    value={rating2}
                    onChange={(event, newRating) => {
                      setRating2(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $10.00 - <Box component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>$20.00</Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/collagen.jpg"
                title="collagen"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ":hover": {
                      overflow: 'visible',
                      textOverflow: 'clip',
                      whiteSpace: 'normal',
                    }
                  }}>
                  Charlotte Tilbury Airbrush Flawless Finish Setting Powder
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-3"
                    value={rating3}
                    onChange={(event, newRating) => {
                      setRating3(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $45.00 - <Box component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>$60.00</Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              maxWidth: 345, boxShadow: 2, ":hover": {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }
            }}>
              <CardMedia
                sx={{ height: 350 }}
                image="/img/serum.jpg"
                title="Serum"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='#2C2B2B'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ":hover": {
                      overflow: 'visible',
                      textOverflow: 'clip',
                      whiteSpace: 'normal',
                    }
                  }}
                >
                  Clinique All About Eyes Cream-Gel Eye Cream
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled-4"
                    value={rating4}
                    onChange={(event, newRating) => {
                      setRating4(newRating);
                    }}
                  />
                </Box>
                <Typography sx={{ color: 'darkred' }}>
                  $12.00 - <Box component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>$18.00</Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* articles */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Grid container alignItems="center" justifyContent='center' spacing={4}>
            <Grid xs={12} md={6}>
              <Card sx={{ maxWidth: 545 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/img/10.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <Card sx={{ maxWidth: 545 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/img/9.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* footer */}
        <Container maxWidth sx={{background: '#614931', padding: "20px"}}>
            <Grid container spacing={10} alignItems='center' justifyContent={{
              sx: 'flex-start',
              sm: 'left',
              md: 'space-evenly'
            }} sx={{padding: '20px', marginBottom: '30px'}}>
              <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'center'}} >
                  <Box sx={{padding: '10px', border: '1px solid #3A2C1D', margin: '0 4px', borderRadius: '100%'}}><InstagramIcon/></Box>
                    <Box sx={{padding: '10px', border: '1px solid #3A2C1D', margin: '0 4px', borderRadius: '100%'}}><TelegramIcon/></Box>
                    <Box sx={{padding: '10px', border: '1px solid #3A2C1D', margin: '0 4px', borderRadius: '100%'}}><YouTubeIcon/></Box>
                    <Box sx={{padding: '10px', border: '1px solid #3A2C1D', margin: '0 4px', borderRadius: '100%'}}><XIcon/></Box>
                    <Box sx={{padding: '10px', border: '1px solid #3A2C1D', margin: '0 4px', borderRadius: '100%'}}><LinkedInIcon/></Box>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={12} md={4}>
                  <Box 
                  component='img'
                  src='/img/Logo.png'
                  maxWidth='60px'
                  sx={{
                      filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
                    }}
                  />
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={12} sm={6} md={4}>
                <Typography>
                  <DraftsIcon/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                    <Grid item sx={{display: 'flex',alignItems: 'center', margin: '10px auto'}}>
                      <TextField label="Enter Your Email" variant="standard" />
                      <Button sx={{position: 'relative', bottom: '-6px'}} variant="contained">Subscribe</Button>
                    </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ mb: 3 }} />
           <Grid container spacing={4} justifyContent='space-between' sx={{padding: {sm: '0 40px', md: '0 150px'}}}>
              <Grid item xs={12} sm={6} md={3}>
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="About Us"
                      primaryTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                    />
                  </ListItem>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      maxWidth: 360,          
                      lineHeight: 1.9,
                      letterSpacing: 0.2,
                      whiteSpace: 'pre-line'
                    }}>
                    We have skincare, body, wellbeing
                    products and amazing fragrance range.
                    All made with love in France. Our
                    formulations have proven efficacy,
                    contain...
                  </Typography>

                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Information"
                      primaryTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                    />
                  </ListItem>
                  {['My account', 'Checkout', 'Cart', 'Shop', 'Sample Page'].map((t) => (
                    <ListItem key={t} disableGutters>
                      <ListItemText primary={t} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Quick Link"
                      primaryTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                    />
                  </ListItem>
                  {['Wishlist', 'My account', 'Checkout', 'Cart', 'Shop'].map((t) => (
                    <ListItem key={t} disableGutters>
                      <ListItemText primary={t} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <List>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Store Information"
                      primaryTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                    />
                  </ListItem>

                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="124 Bloom Street, London, UK" />
                  </ListItem>

                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="+44 20 7946 1825" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3 }} />
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 3 }}>
              © 2024 Korean Skin Care. All rights reserved.
            </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App
