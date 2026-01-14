import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image, X } from "lucide-react";
import { currentUser } from "@/data/mockData";

interface CreatePostProps {
  onPost: (content: string) => void;
  onClose?: () => void;
  isModal?: boolean;
}

export function CreatePost({ onPost, onClose, isModal = false }: CreatePostProps) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content.trim());
      setContent("");
      onClose?.();
    }
  };

  return (
    <div className={`bg-card border border-border rounded-lg shadow-card ${isModal ? '' : 'animate-fade-in'}`}>
      {isModal && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="font-semibold text-foreground">Create post</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={currentUser.avatar} alt={currentUser.displayName} />
            <AvatarFallback>{currentUser.displayName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              rows={3}
              className="w-full resize-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-[15px] leading-relaxed"
              autoFocus={isModal}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-border">
          <Button variant="ghost" size="sm" className="text-muted-foreground gap-2">
            <Image className="h-4 w-4" />
            Photo
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!content.trim()}
            size="sm"
            className="px-6"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
