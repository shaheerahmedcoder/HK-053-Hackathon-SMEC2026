import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DownloadButtonProps {
  targetSelector: string;
  filename?: string;
}

const DownloadButton = ({ targetSelector, filename = "word-cloud" }: DownloadButtonProps) => {
  const { toast } = useToast();

  const handleDownload = async () => {
    const element = document.querySelector(targetSelector);
    if (!element) {
      toast({
        title: "Error",
        description: "Could not find the word cloud to download.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Dynamic import for html2canvas
      const html2canvas = (await import("html2canvas")).default;
      
      const canvas = await html2canvas(element as HTMLElement, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      toast({
        title: "Downloaded!",
        description: "Your word cloud has been saved.",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "Could not generate the image. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="bg-vintage-olive hover:bg-vintage-olive/90 text-vintage-cream font-display text-lg py-6 px-8 border-2 border-vintage-brown shadow-retro"
    >
      <Download className="w-5 h-5 mr-2" />
      Download as Image
    </Button>
  );
};

export default DownloadButton;
