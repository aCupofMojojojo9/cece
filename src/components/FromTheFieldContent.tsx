"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';

const blogPosts = [
  {
    id: 2,
    title: "Taking Action: Planning Our March 2026 Liberia Visit",
    date: "January 15, 2026",
    author: "David Ziama",
    category: "Updates",
    image: "/cece/photos/liberia-children.jpg",
    excerpt: "As we move into the new year, we're excited to announce concrete steps toward our mission...",
    content: `As we move into the new year, we're thrilled to share that CECE's Dream is taking decisive action toward our mission of empowering communities through education. After months of careful planning and relationship building, we're ready to make our vision a reality.

I'm excited to announce that I'll be traveling to Liberia in March 2026 for an extensive visit to meet with school administrators, principals, and community leaders. This trip represents a critical milestone for our organization – it's where strategy meets reality, where planning becomes impact.

**What We're Planning:**

During my visit, I'll be conducting comprehensive assessments of multiple schools across different regions. I'll be meeting with principals to understand their most pressing needs, from basic classroom supplies to infrastructure improvements. These face-to-face conversations are invaluable; they allow us to truly understand the challenges each school faces and how we can provide the most effective support.

**Direct Funding Distribution:**

One of the most exciting aspects of this trip is that we'll be delivering direct funding to schools that need it most. We've identified several partner institutions where our support can make an immediate, measurable difference. This funding will go toward:

- Essential classroom supplies and learning materials
- Teacher support and professional development resources  
- Infrastructure repairs and improvements
- Programs that support student wellbeing and engagement

**Building Lasting Partnerships:**

This visit isn't just about delivering resources – it's about building the relationships that will sustain our work for years to come. By meeting with educators and community leaders in person, we're laying the groundwork for ongoing collaboration, transparent communication, and shared commitment to educational excellence.

**Community-Centered Approach:**

Throughout this trip, our focus will remain on listening and learning. The communities we serve know their needs better than anyone. Our role is to provide support, resources, and partnership – not to impose solutions from afar. This March visit will help us refine our approach and ensure that every dollar donated creates maximum impact.

**Looking Ahead:**

This is just the beginning. The relationships we build, the assessments we conduct, and the programs we establish during this visit will shape CECE's Dream for years to come. We're not just making a one-time donation; we're investing in the future of education in Liberia.

We'll be sharing updates throughout this journey, including photos, stories, and insights from our partner schools. Thank you to everyone who has supported us in reaching this milestone. Together, we're turning dreams into reality – one classroom, one student, one community at a time.

Stay tuned for more updates as we prepare for this exciting trip!`
  },
  {
    id: 1,
    title: "Laying the Foundation: Planning for 2026",
    date: "December 10, 2025",
    author: "CECE's Dream Team",
    category: "Planning",
    image: "/cece/photos/kids-reading.jpg",
    excerpt: "As we close out 2025, our team is deep in the planning stages for an impactful 2026...",
    content: `As we approach the end of 2025, the CECE's Dream team is hard at work laying the groundwork for what promises to be a transformative year ahead. These early days are critical – they're when vision meets strategy, when passion becomes practical action.

**Strategic Planning Sessions:**

Our board has been meeting regularly to develop comprehensive strategies for 2026. These aren't just casual discussions; they're intensive planning sessions where we examine every aspect of our mission. We're asking ourselves tough questions: How can we maximize our impact? What are the most pressing needs in the communities we serve? How do we ensure transparency and accountability in every dollar we raise and spend?

David Ziama, our founder, has been in constant communication with contacts in Liberia, gathering real-time information about educational needs and opportunities. These conversations are shaping our priorities and helping us identify where our support can make the biggest difference.

**Financial Planning and Sustainability:**

A significant focus of our December planning has been financial strategy. We're not just thinking about immediate fundraising – we're building a sustainable financial model that will support our mission for years to come. This includes:

- Developing diverse funding streams to ensure stability
- Creating transparent financial processes for donor confidence  
- Establishing partnerships with other organizations that share our values
- Planning for both immediate needs and long-term program sustainability

**Program Development:**

We're also designing the specific programs and initiatives we'll launch in 2026. This includes identifying partner schools in Liberia, determining the most effective ways to deliver support, and establishing metrics to measure our impact. We want to ensure that every program we create is evidence-based, community-driven, and designed for lasting results.

**Building Our Infrastructure:**

Behind the scenes, we're also strengthening our organizational infrastructure. This means developing better communication systems, creating efficient processes for fund distribution, and building the relationships we'll need to succeed. We're establishing connections with local leaders, educational experts, and community organizations who can help us navigate the complexities of international educational support.

**The Road Ahead:**

These planning days might not be as visible as delivering supplies to a school or cutting a ribbon at a new facility, but they're absolutely essential. Every hour we spend in planning now will translate into more effective programs, better resource allocation, and greater impact for the children and communities we serve.

As we finalize our 2026 strategy, we're filled with excitement and determination. The foundation we're building now will support incredible work in the year ahead. We're grateful for the supporters, volunteers, and partners who are joining us on this journey.

**Looking Forward:**

Stay tuned for more updates as our plans solidify and we move into the action phase of our work. 2026 is going to be a year of real, measurable impact – and it all starts with the careful planning we're doing right now.

Thank you for believing in our mission and supporting our work. Together, we're building something truly special.`
  }
];

export default function FromTheFieldContent() {
  return (
    <>
      <Box>
        {/* Hero Section */}
        <Box sx={{ background: 'linear-gradient(135deg, #003D7A 0%, #003366 100%)', py: 8, color: 'white' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" fontWeight={700} textAlign="center" mb={2}>
              From the Field
            </Typography>
            <Typography variant="h6" textAlign="center" sx={{ maxWidth: 700, mx: 'auto' }}>
              Follow our progress as we work to empower communities and transform lives through education
            </Typography>
          </Container>
        </Box>

        {/* Blog Posts */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {blogPosts.map((post, index) => (
            <Card key={post.id} sx={{ mb: 6, boxShadow: 3, overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' } }}>
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    height: { xs: 250, md: 'auto' },
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ flex: 1, p: { xs: 3, md: 5 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Chip label={post.category} color="primary" size="small" />
                    <Typography variant="body2" color="text.secondary">
                      {post.date}
                    </Typography>
                  </Box>
                  
                  <Typography variant="h4" fontWeight={700} mb={2} color="primary">
                    {post.title}
                  </Typography>
                  
                  <Typography variant="subtitle1" color="text.secondary" mb={3} fontStyle="italic">
                    By {post.author}
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                    {post.content}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
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
