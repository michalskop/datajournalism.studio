import { Heading, Text, Grid } from '../../once-ui/components';
import Link from 'next/link';
import { getAllPostSlugs, getPostData, PostData } from '../../utils/markdown';

async function getAllPosts(): Promise<PostData[]> {
  const slugs = getAllPostSlugs('blog');
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostData('blog', slug.params.slug))
  );
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <Heading>Blog</Heading>
      <Text>Insights and stories from the world of data journalism.</Text>
      
      <Grid columns="repeat(2, 1fr)" gap="24">
        {posts.map((post) => (
          <div key={post.slug}>
            <Heading as="h3">{post.title}</Heading>
            <Text>{new Date(post.date).toLocaleDateString()}</Text>
            <Link href={`/blog/${post.slug}`}>Read more</Link>
          </div>
        ))}
      </Grid>
    </>
  );
}