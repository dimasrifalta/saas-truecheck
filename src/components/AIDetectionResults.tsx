import React from 'react';
import Link from 'next/link';

interface ResultItem {
  text: string;
  prediction: string;
  ai_score: number;
  ai_score_detail?: number;
}

interface AIDetectionResultsProps {
  results: {
    winstonai?: {
      ai_score: number;
      items: ResultItem[];
      cost: number;
    };
    sapling?: {
      ai_score: number;
      items: ResultItem[];
      cost: number;
    };
  };
  onReset: () => void;
}

const AIDetectionResults: React.FC<AIDetectionResultsProps> = ({ results, onReset }) => {
  // Use winstonai as primary provider
  const provider = results?.winstonai || results?.sapling;
  
  if (!provider) {
    return (
      <div className="p-6">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            No valid results returned from the AI detection service.
          </p>
          <div className="space-x-4">
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
            <button
              className="btn-primary"
              onClick={onReset}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const roundedScore = Math.round(provider.ai_score * 100);
  const isLikelyAI = roundedScore >= 70;
  const isPossiblyAI = roundedScore >= 40 && roundedScore < 70;

  const getResultColor = () => {
    if (isLikelyAI) return 'text-red-600';
    if (isPossiblyAI) return 'text-amber-600';
    return 'text-emerald-600';
  };

  const getResultText = () => {
    if (isLikelyAI) return 'Likely AI-Generated';
    if (isPossiblyAI) return 'Possibly AI-Generated';
    return 'Likely Human-Written';
  };

  const getResultDescription = () => {
    if (isLikelyAI) {
      return 'This text shows strong characteristics of AI-generated content. It exhibits patterns, structures, and language usage that are typical of content produced by AI language models.';
    } else if (isPossiblyAI) {
      return 'This text shows some characteristics of AI-generated content mixed with possible human writing, or it may be human-written content that has been edited or refined by AI.';
    } else {
      return 'This text shows strong characteristics of human-written content. It exhibits creativity, nuance, and language patterns typical of human writers.';
    }
  };

  return (
    <div>
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Analysis Results
        </h2>
        
        <div className="flex flex-col items-center my-8">
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-slate-100" 
                strokeWidth="8" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50"
              />
              <circle 
                className={`${isLikelyAI ? 'text-red-500' : isPossiblyAI ? 'text-amber-500' : 'text-emerald-500'}`}
                strokeWidth="8" 
                strokeDasharray={`${roundedScore * 2.51} 251`} 
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50" 
                transform="rotate(-90 50 50)"
              />
              <text 
                className="text-3xl font-bold text-slate-900" 
                x="50" 
                y="50" 
                dominantBaseline="middle" 
                textAnchor="middle"
              >
                {roundedScore}%
              </text>
            </svg>
          </div>
          
          <div className="text-center">
            <h3 className={`text-xl font-semibold ${getResultColor()} mb-2`}>
              {getResultText()}
            </h3>
            <p className="text-slate-500 max-w-lg">
              {getResultDescription()}
            </p>
          </div>
        </div>
      </div>
      
      {provider.items && provider.items.length > 0 && (
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Detailed Analysis
          </h3>
          
          <div className="space-y-4">
            {provider.items.map((item, index) => {
              const itemScore = Math.round(item.ai_score * 100);
              let bgColor = 'bg-slate-50';
              let borderColor = 'border-slate-200';
              
              if (item.prediction === 'ai-generated' && item.ai_score > 0.7) {
                bgColor = 'bg-red-50';
                borderColor = 'border-red-100';
              } else if (item.prediction === 'original' && item.ai_score < 0.3) {
                bgColor = 'bg-emerald-50';
                borderColor = 'border-emerald-100';
              }
              
              return (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${bgColor} ${borderColor}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.prediction === 'ai-generated' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.prediction === 'ai-generated' ? 'AI-Generated' : 'Human-Written'}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {itemScore}% AI Score
                    </span>
                  </div>
                  <p className="text-slate-700">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      <div className="p-6 bg-slate-50 flex justify-between items-center">
        <p className="text-sm text-slate-500">
          Powered by EdenAI Technology
        </p>
        <div className="flex space-x-4">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
          <button
            className="btn-primary"
            onClick={onReset}
          >
            Analyze New Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIDetectionResults; 