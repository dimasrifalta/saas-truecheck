import React, { useState } from 'react';
import { PlagiarismDetectionResult } from '@/types/plagiarism';
import Link from 'next/link';

interface PlagiarismDetectionResultsProps {
  results: PlagiarismDetectionResult;
  onReset: () => void;
}

const PlagiarismDetectionResults: React.FC<PlagiarismDetectionResultsProps> = ({ results, onReset }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  // Use originalityai as primary provider
  const provider = results?.originalityai || results?.winstonai || Object.values(results)[0];
  
  if (!provider) {
    return (
      <div className="p-6">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            No valid results returned from the plagiarism detection service.
          </p>
          <button
            className="btn-primary"
            onClick={onReset}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const plagiaScore = provider.plagia_score || 0;
  const hasMatches = provider.items && provider.items.length > 0;
  
  // Helper to toggle item expansion
  const toggleExpand = (itemIndex: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemIndex]: !prev[itemIndex]
    }));
  };

  // Format URL for display
  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return `${urlObj.hostname}${urlObj.pathname}`;
    } catch {
      return url;
    }
  };

  return (
    <div>
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Plagiarism Detection Results
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
                className={`${
                  plagiaScore > 30 
                    ? 'text-red-500' 
                    : plagiaScore > 10 
                      ? 'text-amber-500' 
                      : 'text-emerald-500'
                }`}
                strokeWidth="8" 
                strokeDasharray={`${Math.min(plagiaScore, 100) * 2.51} 251`} 
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
                {plagiaScore}%
              </text>
            </svg>
          </div>
          
          <div className="text-center">
            <h3 className={`text-xl font-semibold mb-2 ${
              plagiaScore > 30 
                ? 'text-red-600' 
                : plagiaScore > 10 
                  ? 'text-amber-600' 
                  : 'text-emerald-600'
            }`}>
              {plagiaScore > 30 
                ? 'High Plagiarism Detected' 
                : plagiaScore > 10 
                  ? 'Some Plagiarism Detected' 
                  : hasMatches 
                    ? 'Low Plagiarism Detected' 
                    : 'No Plagiarism Detected'}
            </h3>
            <p className="text-slate-500 max-w-lg">
              {plagiaScore > 30 
                ? 'This text contains substantial portions that match existing online content. Please review the matches below and consider revising or citing your sources.'
                : plagiaScore > 10 
                  ? 'This text contains some portions that match existing online content. Check the matches below to ensure proper attribution.'
                  : hasMatches 
                    ? 'This text contains minimal matches with existing online content. The content appears mostly original.'
                    : 'No significant matches found. This content appears to be original.'}
            </p>
          </div>
        </div>
      </div>
      
      {hasMatches && provider.items && (
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Matched Sources
          </h3>
          
          <div className="space-y-4">
            {provider.items.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <div 
                  className="bg-slate-50 p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(`${itemIndex}`)}
                >
                  <h4 className="font-medium text-slate-900">{item.text}</h4>
                  <div className="flex items-center">
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded mr-2">
                      {item.candidates.length} {item.candidates.length === 1 ? 'match' : 'matches'}
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-slate-400 transition-transform ${expandedItems[`${itemIndex}`] ? 'transform rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {expandedItems[`${itemIndex}`] && (
                  <div className="p-4 space-y-4">
                    {item.candidates.map((candidate, candidateIndex) => (
                      <div 
                        key={candidateIndex} 
                        className={`p-4 rounded-lg border ${
                          candidate.prediction === 'plagiarized' 
                            ? 'bg-red-50 border-red-100' 
                            : 'bg-emerald-50 border-emerald-100'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              candidate.prediction === 'plagiarized' 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {candidate.prediction === 'plagiarized' ? 'Plagiarized' : 'Original'}
                            </span>
                            <span className="text-slate-500 text-sm ml-2">
                              {Math.round(candidate.plagia_score * 100)}% match
                            </span>
                          </div>
                          <a 
                            href={candidate.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-indigo-600 hover:text-indigo-700 hover:underline text-sm flex items-center"
                          >
                            <span>{formatUrl(candidate.url)}</span>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 ml-1" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </a>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-100">
                          <p className="text-slate-700">
                            &ldquo;{candidate.plagiarized_text}&rdquo;
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
            Check New Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlagiarismDetectionResults; 