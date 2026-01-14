import { User, Post } from "@/types/social";

export const currentUser: User = {
  id: "1",
  username: "alexchen",
  displayName: "Alex Chen",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  bio: "Product designer & coffee enthusiast ☕",
  followersCount: 1243,
  followingCount: 892,
};

export const users: User[] = [
  currentUser,
  {
    id: "2",
    username: "sarahmiller",
    displayName: "Sarah Miller",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    bio: "Travel blogger | 30+ countries explored",
    followersCount: 8924,
    followingCount: 432,
    isFollowing: true,
  },
  {
    id: "3",
    username: "mikejohnson",
    displayName: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Full-stack developer | Open source contributor",
    followersCount: 2341,
    followingCount: 567,
    isFollowing: false,
  },
  {
    id: "4",
    username: "emilywang",
    displayName: "Emily Wang",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Photographer | Capturing moments",
    followersCount: 15782,
    followingCount: 234,
    isFollowing: true,
  },
];

export const initialPosts: Post[] = [
  {
    id: "1",
    user: users[1],
    content: "Just finished a 10-mile hike in the Swiss Alps. The views were absolutely breathtaking! Sometimes you need to disconnect to reconnect. 🏔️",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    likesCount: 234,
    commentsCount: 18,
    isLiked: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    comments: [
      {
        id: "c1",
        user: users[2],
        content: "This looks incredible! Adding to my bucket list 🙌",
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      },
    ],
  },
  {
    id: "2",
    user: users[2],
    content: "Shipped a new feature today that I've been working on for weeks. The feeling of seeing your code help real users is unmatched. Remember: every expert was once a beginner.",
    likesCount: 89,
    commentsCount: 7,
    isLiked: true,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    comments: [],
  },
  {
    id: "3",
    user: users[3],
    content: "Golden hour in Barcelona. Sometimes the best shots come when you least expect them.",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop",
    likesCount: 567,
    commentsCount: 42,
    isLiked: false,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    comments: [
      {
        id: "c2",
        user: users[1],
        content: "Your eye for light is amazing!",
        createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      },
    ],
  },
];
