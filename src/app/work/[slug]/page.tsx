import { Heading, Text } from '../../../once-ui/components';
import { getPostData, getAllPostSlugs, PostData } from '../../../utils/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            <Image
              {...props}
              width={props.width || 800}
              height={props.height || 600}
              layout="responsive"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}