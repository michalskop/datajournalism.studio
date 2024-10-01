// src/components/RecentPosts.tsx
import React from 'react';
import { Heading, Grid, Flex, Text } from '../once-ui/components';
import Link from 'next/link';
import { PostData } from '../utils/markdown';

interface RecentPostsProps {
  recentPosts: PostData[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ recentPosts }) => {
  return (
    <>
      <Heading as="h2">Recent Posts</Heading>
      <Grid columns="repeat(3, 1fr)" gap="24">
        {recentPosts.map((post) => (
          <Flex key={post.slug} direction="column">
            <Heading as="h3">{post.title}</Heading>
            <Text>{new Date(post.date).toLocaleDateString()}</Text>
            <Link href={`/blog/${post.slug}`}>Read more</Link>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default RecentPosts;