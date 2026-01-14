export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  isFollowing?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: Date;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  createdAt: Date;
  comments: Comment[];
}
