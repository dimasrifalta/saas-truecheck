"use client";

import React, { useState } from 'react';
import PlagiarismDetectionForm from '@/components/PlagiarismDetectionForm';
import PlagiarismDetectionResults from '@/components/PlagiarismDetectionResults';
import { PlagiarismDetectionResult } from '@/types/plagiarism';

export default function PlagiarismDetectionPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');
  const [isPaymentError, setIsPaymentError] = useState(false);
  const [results, setResults] = useState<PlagiarismDetectionResult | null>(null);

  const handleAnalyze = async (text: string, title: string) => {
    setIsAnalyzing(true);
    setError('');
    setIsPaymentError(false);
    setResults(null);

    try {
      const response = await fetch('/api/plagiarism-detection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, title }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to analyze the text');
        
        // Check if it's a payment/credit related error
        if (response.status === 402 || data.errorCode === 'PAYMENT_REQUIRED') {
          setIsPaymentError(true);
        }
        
        return;
      }

      setResults(data);
    } catch (err) {
      console.error('Error during plagiarism detection:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setError('');
    setIsPaymentError(false);
  };

  return (
    <div className="container-custom section animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Plagiarism Detection
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Check your content against billions of web pages and publications to ensure originality and proper attribution.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {results ? (
            <PlagiarismDetectionResults 
              results={results} 
              onReset={handleReset} 
            />
          ) : (
            <PlagiarismDetectionForm 
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
              error={error}
              isPaymentError={isPaymentError}
            />
          )}
        </div>
      </div>
    </div>
  );
} 