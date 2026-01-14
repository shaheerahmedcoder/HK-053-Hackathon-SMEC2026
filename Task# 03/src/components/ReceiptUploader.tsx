import { useState, useCallback } from 'react';
import { Upload, Camera, FileImage } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ReceiptUploaderProps {
  onUpload: (file: File) => void;
}

export function ReceiptUploader({ onUpload }: ReceiptUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      onUpload(files[0]);
    }
  }, [onUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onUpload(files[0]);
    }
  }, [onUpload]);

  return (
    <Card variant="elevated" className="overflow-hidden">
      <CardContent className="p-0">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`
            relative p-8 border-2 border-dashed rounded-lg m-4 transition-all duration-200
            ${isDragging 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50 hover:bg-muted/50'
            }
          `}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-lg">Upload Receipt</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Drag and drop your receipt image here, or click to browse
              </p>
            </div>
            <div className="flex gap-3">
              <label htmlFor="file-upload">
                <Button variant="default" size="sm" asChild>
                  <span className="cursor-pointer">
                    <FileImage className="w-4 h-4" />
                    Browse Files
                  </span>
                </Button>
              </label>
              <Button variant="outline" size="sm">
                <Camera className="w-4 h-4" />
                Take Photo
              </Button>
            </div>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
