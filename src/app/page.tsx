import { Heading, Text, Grid, Flex, LetterFx } from '../once-ui/components';
import Link from 'next/link';
import { getAllPostSlugs, getPostData, PostData } from '../utils/markdown';
import FeaturedWork from '../components/FeaturedWork';
import RecentPosts from '../components/RecentPosts';

async function getRecentPosts(): Promise<PostData[]> {
  const slugs = getAllPostSlugs('blog');
  const posts = await Promise.all(
    slugs.slice(0, 3).map(async (slug) => await getPostData('blog', slug.params.slug))
  );
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <Flex 
      direction="column"
      padding="16"
      gap="24"
    >
      <Heading as="h1" onSolid="accent-strong" className="font-display font-strong font-l neutral-on-background-strong" style={{ textAlign: 'center' }}>
        Data Journalism Studio
      </Heading>
      <Text className="mb-48 font-display font-strong font-xs warning-on-background-weak" style={{ textAlign: 'center' }}>
      <span
          style={{
            fontFamily: 'var(--font-family-code)'
          }}
        >
          <LetterFx
            speed="slow"
            trigger="instant"
            charset={[
              'X',
              '@',
              '$',
              'a',
              'H',
              'z',
              'o',
              '0',
              'y',
              '#',
              '?',
              '*',
              '0',
              '1',
              '+'
            ]}
          >
            We make data talk.
          </LetterFx>
        </span>
        
        </Text>


      
        <FeaturedWork />
        <RecentPosts recentPosts={recentPosts} />
    </Flex>
  );
}