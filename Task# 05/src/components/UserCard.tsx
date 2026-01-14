import { User } from "@/types/social";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface UserCardProps {
  user: User;
  showBio?: boolean;
  compact?: boolean;
}

export function UserCard({ user, showBio = false, compact = false }: UserCardProps) {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing ?? false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatar} alt={user.displayName} />
          <AvatarFallback>{user.displayName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {user.displayName}
          </p>
          <p className="text-xs text-muted-foreground">@{user.username}</p>
        </div>
        <Button
          variant={isFollowing ? "secondary" : "default"}
          size="sm"
          onClick={handleFollow}
          className="shrink-0 text-xs h-8 px-4"
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-card transition-shadow hover:shadow-soft">
      <Avatar className="h-12 w-12">
        <AvatarImage src={user.avatar} alt={user.displayName} />
        <AvatarFallback>{user.displayName[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="font-medium text-foreground">{user.displayName}</p>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>
          <Button
            variant={isFollowing ? "secondary" : "default"}
            size="sm"
            onClick={handleFollow}
            className="shrink-0"
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
        {showBio && user.bio && (
          <p className="mt-2 text-sm text-muted-foreground">{user.bio}</p>
        )}
        <div className="mt-3 flex items-center gap-4 text-sm">
          <span>
            <span className="font-medium text-foreground">{user.followersCount.toLocaleString()}</span>
            <span className="text-muted-foreground ml-1">followers</span>
          </span>
          <span>
            <span className="font-medium text-foreground">{user.followingCount.toLocaleString()}</span>
            <span className="text-muted-foreground ml-1">following</span>
          </span>
        </div>
      </div>
    </div>
  );
}
