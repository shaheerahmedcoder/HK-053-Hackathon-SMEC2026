import { User } from "@/types/social";
import { UserCard } from "./UserCard";

interface SuggestedUsersProps {
  users: User[];
}

export function SuggestedUsers({ users }: SuggestedUsersProps) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-card p-4">
      <h3 className="font-semibold text-foreground mb-4">Suggested for you</h3>
      <div className="space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} compact />
        ))}
      </div>
    </div>
  );
}
