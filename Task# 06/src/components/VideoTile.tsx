import { Mic, MicOff } from "lucide-react";

interface VideoTileProps {
  name: string;
  initials: string;
  isMuted?: boolean;
  isSpeaking?: boolean;
  isScreenShare?: boolean;
}

const VideoTile = ({ name, initials, isMuted = false, isSpeaking = false, isScreenShare = false }: VideoTileProps) => {
  return (
    <div className={`relative rounded-xl overflow-hidden bg-secondary/50 aspect-video flex items-center justify-center transition-all duration-300 ${isSpeaking ? 'ring-2 ring-primary' : ''}`}>
      {isScreenShare ? (
        <div className="absolute inset-0 bg-card flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-secondary to-card p-8">
            <div className="w-full h-full rounded-lg border border-border/50 bg-background/50 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Screen Share</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-medium text-primary">{initials}</span>
        </div>
      )}
      
      {/* Speaking indicator */}
      {isSpeaking && (
        <div className="absolute -inset-px rounded-xl">
          <div className="absolute inset-0 rounded-xl ring-2 ring-primary animate-pulse-ring" />
        </div>
      )}
      
      {/* Name and mic status */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
          {name}
        </span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isMuted ? 'bg-destructive/80' : 'bg-background/80'} backdrop-blur-sm`}>
          {isMuted ? (
            <MicOff className="w-3.5 h-3.5 text-destructive-foreground" />
          ) : (
            <Mic className="w-3.5 h-3.5 text-foreground" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTile;
