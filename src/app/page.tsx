import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Detect AI Content & Plagiarism <span className="text-indigo-500">Instantly</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Verify the originality of any text with our powerful AI detection and plagiarism checking tools. Perfect for educators, publishers, and content creators.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/sign-up" className="btn-primary py-3 px-6 text-center">
                  Start Free Trial
                </Link>
                <Link href="/ai-detection" className="btn-secondary border-indigo-100 text-indigo-600 py-3 px-6 text-center">
                  Try AI Detection
                </Link>
                <Link href="/plagiarism-detection" className="btn-secondary border-indigo-100 text-indigo-600 py-3 px-6 text-center">
                  Try Plagiarism Detection
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="card shadow-sm p-6">
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <textarea 
                    placeholder="Paste your content here to check for plagiarism and AI detection..." 
                    className="input-field h-40 resize-none"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <Link href="/plagiarism-detection" className="flex-1 btn-primary text-center">
                    Check for Plagiarism
                  </Link>
                  <Link href="/ai-detection" className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium text-center shadow-sm hover:shadow transition-all">
                    Detect AI Content
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Powerful Detection Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform uses advanced algorithms to provide accurate and reliable results for both AI-generated content and plagiarism detection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl shadow-subtle">
              <div className="bg-indigo-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Content Detection</h3>
              <p className="text-slate-600">
                Identify content created by AI tools like ChatGPT, GPT-4, and other language models with high accuracy.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl shadow-subtle">
              <div className="bg-indigo-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Plagiarism Checker</h3>
              <p className="text-slate-600">
                Compare text against billions of web pages, academic papers, and publications to find matching content.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl shadow-subtle">
              <div className="bg-indigo-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Detailed Reports</h3>
              <p className="text-slate-600">
                Get comprehensive reports with highlighted sections, similarity scores, and source attribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs with no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Basic</h3>
                <p className="text-slate-500 mb-6">Perfect for occasional use</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-slate-900">$9</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    5,000 words per month
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Basic reporting
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Email support
                  </li>
                </ul>
                <Link href="/sign-up" className="block w-full btn-secondary text-center py-3">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-indigo-500 transform scale-105">
              <div className="bg-indigo-500 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Pro</h3>
                <p className="text-slate-500 mb-6">Ideal for regular content creators</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-slate-900">$29</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    50,000 words per month
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced reporting
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                </ul>
                <Link href="/sign-up" className="block w-full btn-primary text-center py-3">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise</h3>
                <p className="text-slate-500 mb-6">For teams and businesses</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-slate-900">$99</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited words
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Custom reporting
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated support
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Team management
                  </li>
                </ul>
                <Link href="/contact" className="block w-full btn-secondary text-center py-3">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our plagiarism and AI detection tools.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-slate-900">How accurate is the AI detection?</h3>
              <p className="mt-3 text-slate-600">
                Our AI detection algorithm has a 95%+ accuracy rate for identifying content generated by popular AI tools like ChatGPT, GPT-4, and similar language models.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-slate-900">How does the plagiarism checker work?</h3>
              <p className="mt-3 text-slate-600">
                Our plagiarism checker compares your text against billions of web pages, academic papers, and publications to find matching or similar content, providing detailed source information.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-slate-900">Is my content secure when I check it?</h3>
              <p className="mt-3 text-slate-600">
                Yes, we take data privacy seriously. Your content is encrypted during transmission and storage, and we do not store your content after analysis unless you specifically opt to save it.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-slate-900">Can I use this for academic papers?</h3>
              <p className="mt-3 text-slate-600">
                Absolutely! TruthCheck is ideal for students and educators to verify academic integrity before submission or during grading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-500 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to verify your content?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust TruthCheck for reliable AI detection and plagiarism checking.
            </p>
            <Link href="/sign-up" className="inline-block bg-white text-indigo-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-medium text-lg shadow-sm hover:shadow transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
