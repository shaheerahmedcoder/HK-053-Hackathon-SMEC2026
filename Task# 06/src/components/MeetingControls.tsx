import { Mic, MicOff, Video, VideoOff, Monitor, MessageSquare, Users, MoreHorizontal, Phone, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MeetingControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 glass rounded-2xl">
      <Button 
        variant={isMuted ? "controlDanger" : "control"} 
        size="iconLg"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </Button>
      
      <Button 
        variant={isVideoOff ? "controlDanger" : "control"} 
        size="iconLg"
        onClick={() => setIsVideoOff(!isVideoOff)}
      >
        {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
      </Button>
      
      <Button variant="control" size="iconLg">
        <Monitor className="w-5 h-5" />
      </Button>
      
      <Button 
        variant={isHandRaised ? "controlActive" : "control"} 
        size="iconLg"
        onClick={() => setIsHandRaised(!isHandRaised)}
      >
        <Hand className="w-5 h-5" />
      </Button>
      
      <div className="hidden md:flex items-center gap-2 md:gap-3 md:ml-4 md:pl-4 md:border-l md:border-border">
        <Button variant="control" size="iconLg">
          <MessageSquare className="w-5 h-5" />
        </Button>
        
        <Button variant="control" size="iconLg">
          <Users className="w-5 h-5" />
        </Button>
        
        <Button variant="control" size="iconLg">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="ml-2 md:ml-4 md:pl-4 md:border-l md:border-border">
        <Button variant="controlDanger" size="iconLg">
          <Phone className="w-5 h-5 rotate-[135deg]" />
        </Button>
      </div>
    </div>
  );
};

export default MeetingControls;
