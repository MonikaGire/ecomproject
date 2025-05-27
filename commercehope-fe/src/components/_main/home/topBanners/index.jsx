'use client';
import React from 'react';
import Link from 'next/link';
// mui
import { Box, Card, Grid, Stack, Typography, Button, Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, alpha } from '@mui/material/styles';
// next
import Image from 'next/image';
import { Padding } from '@mui/icons-material';

export default function Index() {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up('xl'));
  const isDeskTopBtn = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box my={6} style={{backgroundColor:'#ffffff',padding:'50px'}}>
      <Container maxWidth="xl" >
        <Grid container spacing={3}>
        <Grid item lg={4} md={4} xs={12}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundImage: `url('/images/pdct-cgry-01.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 1,
                boxShadow: 'none',
                minHeight: { xs: 220, md: 300, xl: 480 }, // Responsive height

                position: 'relative', // Needed for layering content
                color: '#fff', // Optional: white text if bg is dark
              }}
            >
              {/* <Stack spacing={isDeskTop ? 2 : 1.5} sx={{ p: { sm: '24px', xs: '12px' } }}>
                <Typography
                  variant={isDeskTop ? 'h3' : 'h4'}
                  color="inherit"
                  lineHeight={1}
                  noWrap
                  sx={{
                     fontSize: {
      xs: 'clamp(16px, 5vw, 22px)',
      sm: 'clamp(20px, 5vw, 26px)',
      md: 'clamp(24px, 5vw, 32px)',
    },
                  }}
                >
                 Elegant Chandeliers Collection
                </Typography>
                <Typography
                  variant={isDeskTop ? 'subtitle1' : 'subtitle2'}
                  color="inherit"
                  lineHeight={1}
                  sx={{
                    fontSize: {
                      lg: 18,
                      md: 16,
                      xs: 12
                    }
                  }}
                >
                  <Box
                    component="span"
                    fontWeight={700}
                    mr={0.5}
                    sx={{
                      color: 'secondary.main',
                      fontSize: {
                        lg: 18,
                        md: 16,
                        xs: 12
                      }
                    }}
                  >
                    25%
                  </Box>
                  Off on first order
                </Typography>
                <Typography
                  variant={isDeskTop ? 'body1' : 'body2'}
                  color="inherit"
                  mb={2}
                  display={{ md: 'block', xs: 'none' }}
                >
                  Illuminate your home with timeless beauty and modern design.
                  Discover handcrafted lighting that transforms any space.
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href="/products?gender=men"
                    variant="contained"
                    color="secondary"
                    size={isDeskTopBtn ? 'medium' : 'small'}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Stack> */}
            </Card>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              backgroundImage: `url('/images/pdct-cgry-02.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: 1,
              boxShadow: 'none',
              minHeight: { xs: 220, md: 300, xl: 480 }, // Responsive height
              color: '#fff'
            }}
          >
            {/* <Stack spacing={isDeskTop ? 2 : 1.5} sx={{ p: { sm: '24px', xs: '12px' } }}>
             
<Typography
                  variant={isDeskTop ? 'h3' : 'h4'}
                  color="inherit"
                  lineHeight={1}
                  noWrap
                  sx={{
                     fontSize: {
      xs: 'clamp(16px, 5vw, 22px)',
      sm: 'clamp(20px, 5vw, 26px)',
      md: 'clamp(24px, 5vw, 32px)',
    },
                  }}
                >
                 Stylish Lamps for Every Room
                </Typography>
              <Typography
                variant={isDeskTop ? 'subtitle1' : 'subtitle2'}
                color="inherit"
                sx={{
                  fontSize: {
                    lg: 18,
                    md: 16,
                    xs: 12
                  }
                }}
              >
                <Box
                  component="span"
                  fontWeight={700}
                  mr={0.5}
                  sx={{
                    color: 'secondary.main',
                    fontSize: {
                      lg: 18,
                      md: 16,
                      xs: 12
                    }
                  }}
                >
                  25%
                </Box>
                Off on first order
              </Typography>

              <Typography
                variant={isDeskTop ? 'body1' : 'body2'}
                color="inherit"
                mb={2}
                
                display={{ md: 'block', xs: 'none' }}
              >
                Brighten your space with elegant and functional lighting.<br />
                Discover unique designs that match your style.
              </Typography>

              <Box>
                <Button
                  component={Link}
                  href="/products?gender=men"
                  variant="contained"
                  color="secondary"
                  size={isDeskTopBtn ? 'medium' : 'small'}
                >
                  Shop Now
                </Button>
              </Box>
            </Stack> */}
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xs={12} >
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              backgroundImage: `url('/images/pdct-cgry-03.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: 1,
              boxShadow: 'none',
              minHeight: { xs: 220, md: 300, xl: 480 }, // Responsive height
              color: '#fff',
            
            }}
          >
            <Stack spacing={isDeskTop ? 2 : 1.5} sx={{ p: { sm: '24px', xs: '12px' } }}>
              <Typography
                variant={isDeskTop ? 'h3' : 'h4'}
                color="inherit"
                noWrap
                sx={{
                  fontSize: {
      xs: 'clamp(16px, 5vw, 22px)',
      sm: 'clamp(20px, 5vw, 26px)',
      md: 'clamp(24px, 5vw, 32px)',
    },
                }}
              >
                Modern Hanging Lights Collection
              </Typography>

              <Typography
                variant={isDeskTop ? 'subtitle1' : 'subtitle2'}
                color="inherit"
                sx={{
                  fontSize: {
                    lg: 18,
                    md: 16,
                    xs: 12
                  }
                }}
              >
                <Box
                  component="span"
                  fontWeight={700}
                  mr={0.5}
                  sx={{
                    color: 'secondary.main',
                    fontSize: {
                      lg: 18,
                      md: 16,
                      xs: 12
                    }
                  }}
                >
                  25%
                </Box>
                Off on first order
              </Typography>

              <Typography
                variant={isDeskTop ? 'body1' : 'body2'}
                color="inherit"
                mb={2}
                display={{ md: 'block', xs: 'none' }}
              >
                Transform your interiors with sleek and stylish hanging lights.
                Perfect ambiance, perfect style — all in one glow.
              </Typography>

              <Box>
                <Button
                  component={Link}
                  href="/products?gender=men"
                  variant="contained"
                  color="secondary"
                  size={isDeskTopBtn ? 'medium' : 'small'}
                >
                  Shop Now
                </Button>
              </Box>
            </Stack>
          </Card>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
