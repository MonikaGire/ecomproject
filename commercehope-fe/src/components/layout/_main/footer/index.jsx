'use client';
import React from 'react';
import NextLink from 'next/link';
import { Typography, Container, Stack, Box, IconButton, Grid, Link } from '@mui/material';
import { alpha } from '@mui/material/styles';

import NewsLetter from './newsletter';

// icons
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const SOCIAL_MEDIA_LINK = [
  {
    name: 'facebook',
    linkPath: 'https://www.facebook.com/p/TWO-Brothers-INC-100078288664590/',
    icon: <FaFacebook />
  },
  {
    name: 'instagram',
    linkPath: 'https://www.instagram.com/twobrothersincorporation/',
    icon: <IoLogoInstagram />
  },
  // {
  //   name: 'linkedin',
  //   linkPath: 'https://www.linkedin.com/company/89683736/admin',
  //   icon: <FaLinkedin />
  // },
  // {
  //   name: 'youtube',
  //   linkPath: '',
  //   icon: <IoLogoYoutube />
  // }
];

const IMPORTANT_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' }
];

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        py: 5,
        px: 2
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* 1. Logo & Intro */}
          <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            src="/logo.png" // replace with your logo path
            alt="Company Logo"
            sx={{ width: 120, mb: 2 }}
          />
            <Typography variant="body2" color="text.secondary">
             Discover our exquisite collection of decorative lights — from stunning chandeliers and elegant hanging lamps to cozy table lamps — designed to enhance every corner of your home with warmth, style, and personality.
            </Typography>
          </Grid>

          {/* 2. Important Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Important Links
            </Typography>
            <Stack spacing={1}>
              {IMPORTANT_LINKS.map((item, index) => (
                <Link key={index} component={NextLink} href={item.path} color="text.secondary" underline="hover">
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* 3. App & Social Media */}
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
              Download Our App
            </Typography>
            <Stack spacing={1}>
              <Box
                component="a"
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-block', width: 150 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width="100%"
                />
              </Box>

              <Box
                component="a"
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-block', width: 150 }}
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width="100%"
                />
              </Box>
            </Stack>
          </Grid>

          {/* 4. Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Subscribe for the latest updates.
            </Typography>
            <NewsLetter />
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Connect with Us
            </Typography>
            <Stack direction="row" spacing={2} mb={2}>
              {SOCIAL_MEDIA_LINK.map((item, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={item.linkPath}
                  target="_blank"
                  aria-label={item.name}
                  sx={{ color: 'primary.main', fontSize: 28 }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © 2025 Two Brothers. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
