import { Heading, Text, Grid, Flex } from '../once-ui/components';
import Link from 'next/link';
import { getAllPostSlugs, getPostData, PostData } from '../utils/markdown';

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
    <Flex direction="column">
      <Heading as="h1" className="font-xl">Datajournalism/Studio</Heading>
      <Text>We make the data talk.</Text>
      
      <Heading as="h2">Featured Work</Heading>
      <Grid columns="repeat(2, 1fr)" gap="24">
        {/* Featured work content */}
      </Grid>

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
    </Flex>
  );
}