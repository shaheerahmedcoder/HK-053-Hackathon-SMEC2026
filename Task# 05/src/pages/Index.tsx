import { useState } from "react";
import { Header } from "@/components/Header";
import { Feed } from "@/components/Feed";
import { SuggestedUsers } from "@/components/SuggestedUsers";
import { CreatePost } from "@/components/CreatePost";
import { users, currentUser, initialPosts } from "@/data/mockData";
import { Post } from "@/types/social";

const Index = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const suggestedUsers = users.slice(1);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      user: currentUser,
      content,
      likesCount: 0,
      commentsCount: 0,
      isLiked: false,
      createdAt: new Date(),
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1,
        };
      }
      return post;
    }));
  };

  const handleComment = (postId: string, content: string) => {
    setPosts(posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          commentsCount: post.commentsCount + 1,
          comments: [
            ...post.comments,
            {
              id: Date.now().toString(),
              user: currentUser,
              content,
              createdAt: new Date(),
            },
          ],
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNewPost={() => setShowCreateModal(true)} />
      
      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Main Feed */}
          <div className="max-w-[600px] mx-auto w-full lg:max-w-none lg:mx-0">
            <Feed 
              posts={posts}
              onNewPost={handleNewPost}
              onLike={handleLike}
              onComment={handleComment}
            />
          </div>

          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-4">
              <SuggestedUsers users={suggestedUsers} />
              
              <div className="text-xs text-muted-foreground px-2 space-y-1">
                <p>About · Help · Privacy · Terms</p>
                <p>© 2024 SMEC connect</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setShowCreateModal(false)}
          />
          <div className="relative w-full max-w-lg mx-4 animate-fade-in">
            <CreatePost 
              onPost={(content) => {
                handleNewPost(content);
                setShowCreateModal(false);
              }} 
              onClose={() => setShowCreateModal(false)}
              isModal
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
