import React from 'react';

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
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">
            No valid results returned from the AI detection service.
          </p>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            onClick={onReset}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const roundedScore = Math.round(provider.ai_score * 100);
  const isLikelyAI = roundedScore >= 70;
  const isPossiblyAI = roundedScore >= 40 && roundedScore < 70;

  const getResultColor = () => {
    if (isLikelyAI) return 'text-red-600 dark:text-red-400';
    if (isPossiblyAI) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
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
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Analysis Results
        </h2>
        
        <div className="flex flex-col items-center my-8">
          <div className="relative w-48 h-48 mb-6">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-gray-200 dark:text-gray-700" 
                strokeWidth="10" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50"
              />
              <circle 
                className={`${isLikelyAI ? 'text-red-500' : isPossiblyAI ? 'text-yellow-500' : 'text-green-500'}`}
                strokeWidth="10" 
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
                className="text-3xl font-bold text-gray-900 dark:text-white" 
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
            <h3 className={`text-2xl font-bold ${getResultColor()} mb-2`}>
              {getResultText()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg">
              {getResultDescription()}
            </p>
          </div>
        </div>
      </div>
      
      {provider.items && provider.items.length > 0 && (
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Detailed Analysis
          </h3>
          
          <div className="space-y-4">
            {provider.items.map((item, index) => {
              const itemScore = Math.round(item.ai_score * 100);
              let bgColor = 'bg-gray-50 dark:bg-gray-800';
              let borderColor = 'border-gray-200 dark:border-gray-700';
              
              if (item.prediction === 'ai-generated' && item.ai_score > 0.7) {
                bgColor = 'bg-red-50 dark:bg-red-900/20';
                borderColor = 'border-red-200 dark:border-red-900/30';
              } else if (item.prediction === 'original' && item.ai_score < 0.3) {
                bgColor = 'bg-green-50 dark:bg-green-900/20';
                borderColor = 'border-green-200 dark:border-green-900/30';
              }
              
              return (
                <div 
                  key={index} 
                  className={`p-4 rounded-md border ${bgColor} ${borderColor}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.prediction === 'ai-generated' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {item.prediction === 'ai-generated' ? 'AI-Generated' : 'Human-Written'}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {itemScore}% AI Score
                    </span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      <div className="p-6 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Powered by EdenAI Technology
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
          onClick={onReset}
        >
          Analyze New Text
        </button>
      </div>
    </div>
  );
};

export default AIDetectionResults; 