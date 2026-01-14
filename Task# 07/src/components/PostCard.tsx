import { useState } from "react";
import { Post } from "@/types/social";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { CommentSection } from "./CommentSection";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function PostCard({ post, onLike, onComment }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);

  const handleLike = () => {
    setIsLikeAnimating(true);
    onLike(post.id);
    setTimeout(() => setIsLikeAnimating(false), 300);
  };

  return (
    <article className="bg-card border border-border rounded-lg shadow-card animate-fade-in">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.user.avatar} alt={post.user.displayName} />
              <AvatarFallback>{post.user.displayName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground text-sm">
                  {post.user.displayName}
                </span>
                <span className="text-muted-foreground text-sm">
                  @{post.user.username}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {formatTimeAgo(post.createdAt)}
              </span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="mt-3">
          <p className="text-foreground text-[15px] leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>

        {/* Image */}
        {post.image && (
          <div className="mt-3 -mx-4">
            <img
              src={post.image}
              alt=""
              className="w-full object-cover max-h-96"
            />
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={cn(
              "gap-2 text-muted-foreground hover:text-primary",
              post.isLiked && "text-primary"
            )}
          >
            <Heart
              className={cn(
                "h-[18px] w-[18px] transition-all",
                post.isLiked && "fill-primary",
                isLikeAnimating && "animate-like-pop"
              )}
            />
            <span className="text-sm font-medium">{post.likesCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="gap-2 text-muted-foreground hover:text-accent"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            <span className="text-sm font-medium">{post.commentsCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Share className="h-[18px] w-[18px]" />
          </Button>
        </div>
      </div>

      {/* Comments */}
      {showComments && (
        <CommentSection
          comments={post.comments}
          onAddComment={(content) => onComment(post.id, content)}
        />
      )}
    </article>
  );
}
