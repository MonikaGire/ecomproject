// pages/index.js
import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build your first app with Next.js and understand the basics.',
    date: 'May 12, 2025',
  },
  {
    id: 2,
    title: 'Material UI Tips for Clean UIs',
    excerpt: 'Explore how to use Material UI effectively in your Next.js apps.',
    date: 'May 10, 2025',
  },
  {
    id: 3,
    title: 'Static vs. Server Rendering in Next.js',
    excerpt: 'Understand when to use static generation and server-side rendering.',
    date: 'May 8, 2025',
  },
];

export default function Blog() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h3" gutterBottom>
        My Blog
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={12} key={post.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {post.excerpt}
                </Typography>
                <Button href={`/blog/${post.id}`} variant="contained" size="small">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
