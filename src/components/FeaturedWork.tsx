// src/components/FeaturedWork.tsx
import React from 'react';
import { Heading, Grid } from '../once-ui/components';

const FeaturedWork: React.FC = () => {
  return (
    <>
      <Heading as="h2" style={{ textAlign: 'center' }}>Featured Work</Heading>
      <Grid columns="repeat(2, 1fr)" gap="24">
        {/* Featured work content */}
      </Grid>
    </>
  );
};

export default FeaturedWork;