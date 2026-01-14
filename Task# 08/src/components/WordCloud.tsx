import { useEffect, useRef, useMemo } from "react";
import type { ColorScheme } from "./ColorPicker";

interface WordCloudProps {
  lyrics: string;
  colorScheme: ColorScheme;
}

interface WordData {
  text: string;
  count: number;
  size: number;
  color: string;
  x: number;
  y: number;
  rotation: number;
}

// Common words to filter out
const stopWords = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "this", "that", "be", "are",
  "was", "were", "been", "being", "have", "has", "had", "do", "does",
  "did", "will", "would", "could", "should", "may", "might", "must",
  "shall", "can", "need", "dare", "ought", "used", "i", "you", "he",
  "she", "we", "they", "me", "him", "her", "us", "them", "my", "your",
  "his", "its", "our", "their", "what", "which", "who", "whom", "whose",
  "where", "when", "why", "how", "all", "each", "every", "both", "few",
  "more", "most", "other", "some", "such", "no", "nor", "not", "only",
  "own", "same", "so", "than", "too", "very", "just", "into", "over",
  "after", "before", "between", "under", "again", "then", "once", "here",
  "there", "when", "where", "why", "how", "any", "as", "if", "im", "ive",
  "dont", "wont", "cant", "isnt", "youre", "gonna", "wanna", "gotta",
  "yeah", "oh", "ooh", "ah", "uh", "la", "na", "da"
]);

const processLyrics = (lyrics: string, colors: string[]): WordData[] => {
  const words = lyrics
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));

  const wordCounts: Record<string, number> = {};
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  const sortedWords = Object.entries(wordCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 50);

  const maxCount = sortedWords[0]?.[1] || 1;
  const minCount = sortedWords[sortedWords.length - 1]?.[1] || 1;

  return sortedWords.map(([text, count], index) => {
    const normalizedCount = (count - minCount) / (maxCount - minCount || 1);
    const size = 14 + normalizedCount * 48;
    
    return {
      text,
      count,
      size,
      color: colors[index % colors.length],
      x: 0,
      y: 0,
      rotation: Math.random() > 0.7 ? (Math.random() > 0.5 ? 90 : -90) : 0,
    };
  });
};

const WordCloud = ({ lyrics, colorScheme }: WordCloudProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const words = useMemo(
    () => processLyrics(lyrics, colorScheme.colors),
    [lyrics, colorScheme.colors]
  );

  // Simple spiral placement algorithm
  const placedWords = useMemo(() => {
    const placed: WordData[] = [];
    const centerX = 300;
    const centerY = 250;
    
    words.forEach((word, i) => {
      const angle = i * 0.5;
      const radius = 20 + i * 8;
      const x = centerX + Math.cos(angle) * radius * (0.8 + Math.random() * 0.4);
      const y = centerY + Math.sin(angle) * radius * (0.6 + Math.random() * 0.4);
      
      placed.push({
        ...word,
        x: Math.max(20, Math.min(580, x)),
        y: Math.max(20, Math.min(480, y)),
      });
    });
    
    return placed;
  }, [words]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[6/5] max-w-[600px] mx-auto border-4 border-vintage-brown rounded-sm overflow-hidden"
      style={{ backgroundColor: colorScheme.background }}
    >
      {/* Vintage paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-vintage-brown/40" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-vintage-brown/40" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-vintage-brown/40" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-vintage-brown/40" />

      {/* Words */}
      <svg className="w-full h-full" viewBox="0 0 600 500">
        {placedWords.map((word, i) => (
          <text
            key={`${word.text}-${i}`}
            x={word.x}
            y={word.y}
            fontSize={word.size}
            fill={word.color}
            fontFamily="'Playfair Display', serif"
            fontWeight={word.size > 40 ? "700" : "400"}
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${word.rotation}, ${word.x}, ${word.y})`}
            className="select-none"
            style={{
              filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.1))",
            }}
          >
            {word.text}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default WordCloud;
