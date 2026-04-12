"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost } from '../lib/getBlogPosts';

interface Props {
  posts: BlogPost[];
}

export default function FromTheFieldContent({ posts }: Props) {
  return (
    <>
      <Box>
        {/* Hero Section */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image="/cece/site-photos/hands-make-a-heart.jpg"
            alt="From the Field"
            sx={{
              width: "100%",
              height: { xs: 350, sm: 450, md: 600 },
              objectFit: "cover",
              objectPosition: "center 45%"
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0, 61, 122, 0.9) 0%, rgba(0, 61, 122, 0.6) 50%, transparent 100%)',
              py: { xs: 6, md: 8 },
              color: 'white'
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="h2"
                fontWeight={700}
                textAlign="center"
                mb={2}
                sx={{
                  color: 'white',
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                From the Field
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  color: 'white',
                  textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                Follow our progress as we work to empower communities and transform lives through education
              </Typography>
            </Container>
          </Box>
        </Box>

        {/* Blog Posts */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {posts.map((post, index) => (
            <Box key={post.slug}>
              <Box sx={{ mb: 6 }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      width: '100%',
                      height: { xs: 300, sm: 400, md: 500 },
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 60%, transparent 100%)',
                      p: { xs: 3, md: 5 }
                    }}
                  >
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      color="white"
                      sx={{
                        fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    px: { xs: 3, md: 4 },
                    py: { xs: 3, md: 4 },
                    backgroundColor: 'rgba(0, 61, 122, 0.03)',
                    borderRadius: '0 0 8px 8px'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Chip label={post.category} color="primary" size="small" />
                    <Typography variant="body2" color="text.secondary">
                      {post.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                      By {post.author}
                    </Typography>
                  </Box>

                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => (
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                          {children}
                        </Typography>
                      ),
                      h2: ({ children }) => (
                        <Typography variant="h5" fontWeight={700} mt={4} mb={1.5} color="primary">
                          {children}
                        </Typography>
                      ),
                      h3: ({ children }) => (
                        <Typography variant="h6" fontWeight={700} mt={3} mb={1} color="primary">
                          {children}
                        </Typography>
                      ),
                      ul: ({ children }) => (
                        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                          {children}
                        </Box>
                      ),
                      li: ({ children }) => (
                        <Typography component="li" variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8, mb: 0.5 }}>
                          {children}
                        </Typography>
                      ),
                      strong: ({ children }) => (
                        <Box component="strong" sx={{ fontWeight: 700 }}>
                          {children}
                        </Box>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </Box>
              </Box>

              {index < posts.length - 1 && (
                <Box sx={{ my: 8 }} />
              )}
            </Box>
          ))}
        </Container>

        {/* Call to Action */}
        <Box sx={{ background: 'rgba(0, 61, 122, 0.05)', py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" fontWeight={700} textAlign="center" mb={3} color="primary">
              Be Part of Our Journey
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              Every step we take toward our mission is made possible by supporters like you. Whether through donations,
              volunteering, or simply sharing our story, you can help us create lasting change in the lives of children
              and communities in Liberia.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Check back regularly for updates on our progress and impact stories from the field.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

