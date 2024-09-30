import { Heading, Text } from '../../../once-ui/components';
import { getPostData, getAllPostSlugs, PostData } from '../../../utils/markdown';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const post: PostData = await getPostData('blog', params.slug);

  return (
    <article>
      <Heading>{post.title}</Heading>
      <Text>{new Date(post.date).toLocaleDateString()}</Text>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          layout="responsive"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs('blog');
  return posts;
}