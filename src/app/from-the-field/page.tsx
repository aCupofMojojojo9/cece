import { getBlogPosts } from '../../lib/getBlogPosts';
import FromTheFieldContent from '../../components/FromTheFieldContent';

export default function FromTheField() {
  const posts = getBlogPosts();
  return <FromTheFieldContent posts={posts} />;
}
