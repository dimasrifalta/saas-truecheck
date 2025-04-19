import React, { useState } from 'react';

interface PlagiarismDetectionFormProps {
  onAnalyze: (text: string, title: string) => void;
  isAnalyzing: boolean;
  error: string;
  isPaymentError?: boolean;
}

const PlagiarismDetectionForm: React.FC<PlagiarismDetectionFormProps> = ({
  onAnalyze,
  isAnalyzing,
  error,
  isPaymentError = false
}) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [charCount, setCharCount] = useState(0);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(text, title);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Check for Plagiarism
        </h2>
        <p className="text-slate-500">
          Our plagiarism detection tool compares your content against billions of web pages, academic papers, and publications.
        </p>
      </div>

      {error && (
        <div className={`mb-6 p-4 rounded-lg ${
          isPaymentError 
            ? 'bg-amber-50 border border-amber-100 text-amber-700' 
            : 'bg-red-50 border border-red-100 text-red-600'
        }`}>
          <div className="flex items-start">
            {isPaymentError ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <div>
              {error}
              {isPaymentError && (
                <p className="mt-2 text-sm">
                  The API has reached its usage limit. Please try again later or contact the site administrator.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
            Title (Optional)
          </label>
          <input
            type="text"
            id="title"
            className="input-field"
            placeholder="Enter a title for your content"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isAnalyzing}
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">
            Content to Check
          </label>
          <textarea
            id="content"
            className="input-field h-64 resize-none"
            placeholder="Paste your content here to check for plagiarism..."
            value={text}
            onChange={handleTextChange}
            disabled={isAnalyzing}
            required
          ></textarea>
          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>Minimum 100 characters recommended</span>
            <span className={charCount > 0 ? 'font-medium' : ''}>{charCount} characters</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-700 font-medium transition-colors"
              onClick={() => {
                setText('');
                setTitle('');
                setCharCount(0);
              }}
              disabled={isAnalyzing || (!text && !title)}
            >
              Clear
            </button>
            <button
              type="button"
              className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => {
                const demoTitle = "Rumored Samsung Gadgets For 2023";
                const demoText = "The Galaxy S23 launch may be far behind us, but Samsung likely has plenty more to announce in 2023. That's if history repeats itself. Should Samsung stick to its annual routine, we can expect to see new foldable phones and wearable devices in August. The company also previewed new designs for bendable phones and tablets earlier this year, hinting that the company may be planning to expand beyond the Z Fold and Z Flip in the near future. Though Samsung regularly releases new products across many categories, including TVs, home appliances and monitors, I'm most interested in where its mobile devices are headed. Wearables have also become a large part of how Samsung intends to differentiate its phones from those of other Android device makers. It's a strategy to create a web of products that keep people hooked, much like Apple's range of devices.";
                setTitle(demoTitle);
                setText(demoText);
                setCharCount(demoText.length);
              }}
              disabled={isAnalyzing}
            >
              Load Demo Text
            </button>
          </div>
          <button
            type="submit"
            className="btn-primary flex items-center disabled:opacity-60 disabled:pointer-events-none"
            disabled={isAnalyzing || !text}
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </>
            ) : (
              'Check for Plagiarism'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlagiarismDetectionForm; 