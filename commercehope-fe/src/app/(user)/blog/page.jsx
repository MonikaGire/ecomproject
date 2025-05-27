// pages/index.js
'use client';
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const blogPosts = [
  {
    id: 1,
    title: 'Exploring the World of Next.js',
    excerpt: 'Discover the power of server-side rendering and static generation in web development.',
    date: 'May 13, 2025',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: '10 UI Tricks with MUI',
    excerpt: 'Make your UI pop with these creative design tips using Material UI.',
    date: 'May 10, 2025',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'How to Build a Blog with Next.js',
    excerpt: 'This guide walks you through creating a dynamic blog with Next.js and MUI.',
    date: 'May 7, 2025',
    image: '/images/blog3.jpg',
  },
];

export default function BlogMain() {
   const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <>
      {/* Hero Banner */}
 <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: isDark ? 'white' : 'black',
        py: 10,
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome to the Blog
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Insights, tutorials, and updates — all in one place.
        </Typography>
      </Box>
    </Box>

      {/* Blog List */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Button
                    href={`/blog/${post.id}`}
                    size="small"
                    variant="outlined"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
