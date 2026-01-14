import VideoTile from "./VideoTile";
import MeetingControls from "./MeetingControls";

const participants = [
  { name: "You", initials: "YU", isMuted: false, isSpeaking: true },
  { name: "Sarah Chen", initials: "SC", isMuted: false, isSpeaking: false },
  { name: "Mike Ross", initials: "MR", isMuted: true, isSpeaking: false },
  { name: "Alex Kim", initials: "AK", isMuted: false, isSpeaking: false },
];

const MeetingRoom = () => {
  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Seamless video meetings
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Crystal-clear HD video with adaptive quality that works even on slower connections.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden glass p-4 md:p-6">
            {/* Video Grid */}
            <div className="video-grid video-grid-4 mb-6">
              {participants.map((participant, index) => (
                <VideoTile
                  key={index}
                  name={participant.name}
                  initials={participant.initials}
                  isMuted={participant.isMuted}
                  isSpeaking={participant.isSpeaking}
                />
              ))}
            </div>
            
            {/* Controls */}
            <div className="flex justify-center">
              <MeetingControls />
            </div>
            
            {/* Meeting info */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-xs font-medium text-foreground">REC</span>
              </div>
              <span className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                32:15
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
