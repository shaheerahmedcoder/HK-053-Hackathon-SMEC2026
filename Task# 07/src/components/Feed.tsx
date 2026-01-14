import { Post } from "@/types/social";
import { PostCard } from "./PostCard";
import { CreatePost } from "./CreatePost";

interface FeedProps {
  posts: Post[];
  onNewPost: (content: string) => void;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
  showCreatePost?: boolean;
}

export function Feed({ posts, onNewPost, onLike, onComment, showCreatePost = true }: FeedProps) {
  return (
    <div className="space-y-4">
      {showCreatePost && <CreatePost onPost={onNewPost} />}
      
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
        />
      ))}
    </div>
  );
}
